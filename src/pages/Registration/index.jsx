import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormField } from "@/components/common/FormField";
import { createProduct } from "@/api/productsApi";
import deleteIcon from "./ic-x.svg";
import styles from "./Registration.module.css";

export const Registration = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    tags: [],
  });
  const [tagInput, setTagInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await createProduct({
        ...form,
        price: Number(form.price),
      });

      navigate(`/items/${data.data.id}`);
    } catch (err) {
      console.error("등록 실패: ", err.message);
      alert(`등록에 실패했습니다: ${err.message}`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleTagKeyDown = (e) => {
    if (e.nativeEvent.isComposing) return;

    if (e.key === "Enter") {
      e.preventDefault();

      const trimmed = tagInput.trim();
      if (!trimmed) return;

      setForm({ ...form, tags: [...form.tags, trimmed] });
      setTagInput("");
    }
  };

  const handleTagDelete = (index) => {
    setForm({ ...form, tags: form.tags.filter((_, i) => i !== index) });
  };

  useEffect(() => {
    console.log(form);
  }, [form]);

  const isFormValid =
    form.name.trim() &&
    form.description.trim() &&
    form.price &&
    form.tags.length > 0;

  return (
    <main>
      <section className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.header}>
            <h2 className={`${styles.title} text-xl-bold`}>상품 등록하기</h2>
            <button
              type="submit"
              disabled={!isFormValid}
              className={`btn-base text-lg-semibold ${styles.addBtn}`}
            >
              등록
            </button>
          </div>

          <div className={styles.fields}>
            <FormField
              label="상품명"
              id="productName"
              name="name"
              value={form.name}
              placeholder="상품명을 입력해주세요"
              onChange={handleChange}
            />

            <FormField
              type="textarea"
              label="상품 소개"
              id="productDesc"
              name="description"
              value={form.description}
              placeholder="상품 소개를 입력해주세요"
              onChange={handleChange}
            />

            <FormField
              type="number"
              label="판매가격"
              id="productPrice"
              name="price"
              value={form.price}
              placeholder="판매 가격을 입력해주세요"
              onChange={handleChange}
            />

            <FormField
              label="태그"
              id="productTags"
              name="tags"
              value={tagInput}
              placeholder="태그를 입력해주세요"
              required={false}
              onChange={handleTagInputChange}
              onKeyDown={handleTagKeyDown}
            />
          </div>

          <ul className={styles.tagList}>
            {form.tags.map((tag, index) => (
              <li key={index} className={`text-lg-regular ${styles.tag}`}>
                {tag}
                <button
                  type="button"
                  className={styles.deleteBtn}
                  onClick={() => handleTagDelete(index)}
                >
                  <img src={deleteIcon} alt="" />
                  <span className="sr-only">태그 삭제</span>
                </button>
              </li>
            ))}
          </ul>
        </form>
      </section>
    </main>
  );
};
