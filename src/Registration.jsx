import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemHeader from "./headers/ItemHeader.jsx";
import Footer from "./footers/Footer.jsx";
import { createProduct } from "./api/ProductService.js";

import { useFormValidation } from "./hooks/useFormValidation";
import "./css/registration.css";

const Registration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });

  const [currentTag, setCurrentTag] = useState("");
  const [tags, setTags] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { errors, isFormValid, validateTag } = useFormValidation(
    formData,
    tags
  );
  const [tagError, setTagError] = useState("");

  const handleTagChange = (e) => {
    const value = e.target.value;
    setCurrentTag(value);
    setTagError(validateTag(value));
  };

  const handleTagInputKeyDown = (e) => {
    if (e.nativeEvent.isComposing) return;

    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submitData = {
      ...formData,
      price: Number(formData.price),
      tags: tags,
      images: ["https://picsum.photos/200"],
    };

    try {
      const result = await createProduct(submitData);
      alert("상품이 성공적으로 등록되었습니다.");
      console.log("보내는 데이터:", submitData);
      navigate(`/items/${result.id}`);
    } catch (error) {
      console.error("등록 실패:", error);
      alert("등록에 실패했습니다.");
      console.log("보내는 데이터:", submitData);
    }
  };

  return (
    <>
      <ItemHeader />
      <main className="main-contents">
        <form className="item-registration-form" onSubmit={handleSubmit}>
          <section className="form-header">
            <h2 className="main-title">상품 등록하기</h2>
            {/* 유효성 검사 통과 여부에 따라 active 클래스 및 disabled 속성 제어 */}
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
            {/* 에러 발생 시 빨간색 메시지 표시 */}
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
};
export default Registration;
