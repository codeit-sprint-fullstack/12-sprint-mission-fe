import React, { useState } from "react";
import Navbar from "../components/Section/Navbar";
import Footer from "../components/Section/Footer";
import { createProduct } from "../api/ProductService";
import useProductFormValidation from "../hooks/useProductFormValidation";
import "../style/reset.css";
import "../style/RegistraionPage.css";

const RegistrationPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    values,
    tagInput,
    tags,
    errors,
    touched,
    isSubmitDisabled,
    handleChange,
    handleBlur,
    handleTagInputChange,
    handleTagKeyDown,
    removeTag,
    markAllTouched,
    resetForm,
  } = useProductFormValidation();

  const showError = (field) => touched[field] && errors[field];

  const handleSubmit = async (event) => {
    event.preventDefault();
    markAllTouched();

    if (isSubmitDisabled) {
      return;
    }

    setIsSubmitting(true);

    try {
      await createProduct({
        name: values.name.trim(),
        description: values.description.trim(),
        price: Number(values.price),
        tags,
        images: [],
      });

      resetForm();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Navbar />

      <form className="registration" onSubmit={handleSubmit}>
        <header>
          <h2 className="header-title">상품 등록하기</h2>
          <button
            type="submit"
            className="product-registration-btn"
            disabled={isSubmitDisabled || isSubmitting}
          >
            {isSubmitting ? "등록 중..." : "등록"}
          </button>
        </header>

        <main>
          <section className="registration-field">
            <h2>상품명</h2>
            <input
              type="text"
              value={values.name}
              onChange={handleChange("name")}
              onBlur={handleBlur("name")}
              placeholder="상품명을 입력해 주세요."
              className={`middle-input ${showError("name") ? "input-error" : ""}`}
            />
            {showError("name") ? (
              <p className="input-error-message">{errors.name}</p>
            ) : null}
          </section>

          <section className="registration-field">
            <h2>상품 소개</h2>
            <textarea
              value={values.description}
              onChange={handleChange("description")}
              onBlur={handleBlur("description")}
              placeholder="상품 소개를 입력해 주세요."
              className={`product-description-input ${
                showError("description") ? "input-error" : ""
              }`}
            />
            {showError("description") ? (
              <p className="input-error-message">{errors.description}</p>
            ) : null}
          </section>

          <section className="registration-field">
            <h2>판매 가격</h2>
            <input
              type="text"
              value={values.price}
              onChange={handleChange("price")}
              onBlur={handleBlur("price")}
              placeholder="판매 가격을 입력해 주세요."
              className={`middle-input ${showError("price") ? "input-error" : ""}`}
            />
            {showError("price") ? (
              <p className="input-error-message">{errors.price}</p>
            ) : null}
          </section>

          <section className="registration-field">
            <h2>태그</h2>
            <input
              type="text"
              value={tagInput}
              onChange={handleTagInputChange}
              onBlur={handleBlur("tags")}
              onKeyDown={handleTagKeyDown}
              placeholder="태그를 입력해 주세요."
              className={`middle-input ${showError("tags") ? "input-error" : ""}`}
            />
            <div className="tag-chip-list">
              {tags.map((tag, index) => (
                <button
                  key={`${tag}-${index}`}
                  type="button"
                  className="tag-chip"
                  onClick={() => removeTag(index)}
                >
                  #{tag}
                </button>
              ))}
            </div>
            {showError("tags") ? (
              <p className="input-error-message">{errors.tags}</p>
            ) : null}
          </section>
        </main>
      </form>
      <Footer />
    </div>
  );
};

export default RegistrationPage;
