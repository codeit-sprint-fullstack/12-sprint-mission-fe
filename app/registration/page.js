"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { createProduct } from "../../lib/productService";
import { useFormValidation } from "../../hooks/useFormValidation";

export default function RegistrationPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });
  const [currentTag, setCurrentTag] = useState("");
  const [tags, setTags] = useState([]);
  const [tagError, setTagError] = useState("");

  const { errors, isFormValid, validateTag } = useFormValidation(
    formData,
    tags,
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTagChange = (event) => {
    const value = event.target.value;
    setCurrentTag(value);
    setTagError(validateTag(value));
  };

  const handleTagInputKeyDown = (event) => {
    if (event.nativeEvent.isComposing) return;
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      const tagValue = currentTag.trim().replace(",", "");
      if (!tagValue) return;
      if (tags.includes(tagValue)) {
        alert("이미 등록된 태그입니다.");
        setCurrentTag("");
        return;
      }
      setTags([...tags, tagValue]);
      setCurrentTag("");
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const submitData = {
      ...formData,
      price: Number(formData.price),
      tags,
      images: ["https://picsum.photos/200"],
    };

    try {
      const result = await createProduct(submitData);
      alert("상품이 성공적으로 등록되었습니다.");
      router.push(`/items/${result.id}`);
    } catch (error) {
      console.error("등록 실패:", error);
      alert("등록에 실패했습니다.");
    }
  };

  return (
    <>
      <Header />
      <main className="main-contents">
        <form className="item-registration-form" onSubmit={handleSubmit}>
          <section className="form-header">
            <h2 className="main-title">상품 등록하기</h2>
            <button
              type="submit"
              className={`submit-btn ${isFormValid ? "active" : ""}`}
              disabled={!isFormValid}
            >
              등록
            </button>
          </section>
          <section className="form-input-section">
            <label className="section-title">상품명</label>
            <input
              name="name"
              type="text"
              className={`form-input ${errors.name ? "error" : ""}`}
              placeholder="상품명을 입력해주세요"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error-msg">{errors.name}</p>}
          </section>
          <section className="form-input-section">
            <label className="section-title">상품 소개</label>
            <textarea
              name="description"
              className={`form-textarea ${errors.description ? "error" : ""}`}
              placeholder="상품 소개를 입력해주세요"
              value={formData.description}
              onChange={handleChange}
            />
            {errors.description && (
              <p className="error-msg">{errors.description}</p>
            )}
          </section>
          <section className="form-input-section">
            <label className="section-title">판매 가격</label>
            <input
              name="price"
              type="number"
              className={`form-input ${errors.price ? "error" : ""}`}
              placeholder="판매 가격을 입력해주세요"
              value={formData.price}
              onChange={handleChange}
            />
            {errors.price && <p className="error-msg">{errors.price}</p>}
          </section>
          <section className="form-input-section">
            <label className="section-title">태그</label>
            <input
              type="text"
              className={`form-input ${tagError ? "error" : ""}`}
              placeholder="태그를 입력해주세요"
              value={currentTag}
              onChange={handleTagChange}
              onKeyDown={handleTagInputKeyDown}
            />
            {tagError && <p className="error-msg">{tagError}</p>}
            <div className="tag-list">
              {tags.map((tag) => (
                <div key={tag} className="tag-chip">
                  <span className="tag-text">#{tag}</span>
                  <button
                    type="button"
                    className="tag-delete-btn"
                    onClick={() => removeTag(tag)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </section>
        </form>
      </main>
      <Footer />
    </>
  );
}
