"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import useProductForm from "@/hooks/useProductForm";
import { createProduct } from "@/lib/ProductService";

export default function RegistrationPage() {
  const router = useRouter();
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    name,
    setName,
    description,
    setDescription,
    price,
    setPrice,
    tagInput,
    setTagInput,
    tags,
    errors,
    isFormValid,
    handleAddTag,
    handleRemoveTag,
  } = useProductForm();

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid || isSubmitting) return;

    try {
      setSubmitError("");
      setIsSubmitting(true);

      const createdProduct = await createProduct({
        name: name.trim(),
        description: description.trim(),
        price: Number(price),
        tags,
      });

      router.push(`/items/${createdProduct.id}`);
    } catch (error) {
      console.error(error);
      setSubmitError("상품 등록에 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="registration-page">
      <Header />

      <main className="registration-main">
        <section className="registration-section">
          <div className="registration-header">
            <h1 className="registration-title">상품 등록하기</h1>

            <button
              type="submit"
              form="registration-form"
              className="submit-button"
              disabled={!isFormValid || isSubmitting}
            >
              {isSubmitting ? "등록 중..." : "등록"}
            </button>
          </div>

          <form
            id="registration-form"
            className="registration-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">상품명</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={errors.name ? "input-error" : ""}
                placeholder="상품명을 입력해주세요"
              />
              {errors.name && <p className="error-text">{errors.name}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="description">상품 소개</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={errors.description ? "input-error" : ""}
                placeholder="상품 소개를 입력해주세요"
                rows={6}
              />
              {errors.description && (
                <p className="error-text">{errors.description}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="price">판매 가격</label>
              <input
                id="price"
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className={errors.price ? "input-error" : ""}
                placeholder="판매 가격을 입력해주세요"
              />
              {errors.price && <p className="error-text">{errors.price}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="tag">태그</label>
              <input
                id="tag"
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleTagKeyDown}
                className={errors.tagInput ? "input-error" : ""}
                placeholder="태그를 입력하고 Enter를 누르세요"
              />
              {errors.tagInput && (
                <p className="error-text">{errors.tagInput}</p>
              )}

              <div className="tag-list">
                {tags.map((tag) => (
                  <button
                    type="button"
                    key={tag}
                    className="tag-chip"
                    onClick={() => handleRemoveTag(tag)}
                  >
                    #{tag} ×
                  </button>
                ))}
              </div>
            </div>

            {submitError && <p className="submit-error">{submitError}</p>}
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}
