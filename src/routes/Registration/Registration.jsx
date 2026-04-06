import styles from "./Registration.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../api/products";
import useProductValidation from "../../hooks/useProductValidation";

const Registration = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const {
    nameError,
    descriptionError,
    priceError,
    tagInputError,
    validateName,
    validateDescription,
    validatePrice,
    validateTagInput,
  } = useProductValidation();

  const isFormValid =
    name.length >= 1 &&
    name.length <= 10 &&
    description.length >= 10 &&
    description.length <= 100 &&
    !isNaN(price) &&
    price !== "" &&
    tags.length > 0;

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      e.preventDefault(); // Enter 로 태그추가시 submit 막기
      if (tagInput.trim()) {
        if (tagInput.trim().length <= 5) {
          setTags((prev) => [...prev, tagInput.trim()]);
          setTagInput("");
        } else {
          validateTagInput(tagInput);
        }
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateName(name);
    validateDescription(description);
    validatePrice(price);

    const data = await createProduct({
      name,
      description,
      price: Number(price),
      tags,
    });
    if (data) navigate(`/items/${data.id}`);
  };

  return (
    <section className={`section ${styles.registration}`}>
      <div className="contents">
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className={`${styles.sectionHeader} section-header`}>
            <h2>상품 등록하기</h2>
            <button
              type="submit"
              disabled={!isFormValid}
              className="btn-primary btn-sm"
            >
              등록
            </button>
          </div>

          <fieldset>
            <label htmlFor="itemName">
              <span>상품명</span>
              <input
                value={name}
                id="itemName"
                className={`${styles.formInput} ${nameError && styles.error}`}
                onChange={(e) => {
                  setName(e.target.value);
                  validateName(e.target.value);
                }}
                placeholder="상품명을 입력해주세요"
              />
              {nameError && <p className={styles.errorMsg}>{nameError}</p>}
            </label>

            <label htmlFor="itemDesc">
              <span>상품 소개</span>
              <textarea
                value={description}
                id="itemDesc"
                className={`${styles.formInput} ${descriptionError && styles.error}`}
                onChange={(e) => {
                  setDescription(e.target.value);
                  validateDescription(e.target.value);
                }}
                placeholder="상품 소개를 입력해주세요"
              />
              {descriptionError && (
                <p className={styles.errorMsg}>{descriptionError}</p>
              )}
            </label>

            <label htmlFor="itemPrice">
              <span>판매가격</span>
              <input
                value={price}
                id="itemPrice"
                className={`${styles.formInput} ${priceError && styles.error}`}
                onChange={(e) => {
                  setPrice(e.target.value);
                  validatePrice(e.target.value);
                }}
                placeholder="판매 가격을 입력해주세요"
              />
              {priceError && <p className={styles.errorMsg}>{priceError}</p>}
            </label>

            <label htmlFor="itemTags">
              <span>태그</span>
              <input
                value={tagInput}
                id="itemTags"
                className={`${styles.formInput} ${tagInputError && styles.error}`}
                onChange={(e) => {
                  setTagInput(e.target.value);
                  validateTagInput(e.target.value);
                }}
                onKeyDown={handleTagKeyDown}
                placeholder="태그를 입력해주세요"
              />
              {tagInputError && (
                <p className={styles.errorMsg}>{tagInputError}</p>
              )}
            </label>

            <div className={styles.tags}>
              {tags.map((tag, i) => (
                <span key={i}>
                  #{tag}
                  <button
                    onClick={() => setTags(tags.filter((_, idx) => idx !== i))}
                  >
                    <span className="sr-only">삭제</span>
                  </button>
                </span>
              ))}
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Registration;
