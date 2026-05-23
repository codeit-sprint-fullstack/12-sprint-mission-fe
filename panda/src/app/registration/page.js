"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import useProductForm from "@/hooks/useProductForm";
import { createProduct, getProduct, patchProduct } from "@/lib/ProductService";

export default function RegistrationPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();

  const productId = searchParams.get("id");
  const isEditMode = Boolean(productId);

  const [submitError, setSubmitError] = useState("");

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
    setTags,
    errors,
    isFormValid,
    handleAddTag,
    handleRemoveTag,
  } = useProductForm();

  const productQuery = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProduct(productId),
    enabled: isEditMode,
  });

  useEffect(() => {
    if (!productQuery.data) return;

    setName(productQuery.data.name || "");
    setDescription(productQuery.data.description || "");
    setPrice(String(productQuery.data.price || ""));
    setTags(productQuery.data.tags || []);
  }, [productQuery.data, setName, setDescription, setPrice, setTags]);

  const productMutation = useMutation({
    mutationFn: (payload) => {
      if (isEditMode) {
        return patchProduct(productId, payload);
      }

      return createProduct(payload);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: ["product", productId] });

      router.push(`/items/${data.id || productId}`);
    },
    onError: () => {
      setSubmitError(
        isEditMode ? "상품 수정에 실패했습니다." : "상품 등록에 실패했습니다.",
      );
    },
  });

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid || productMutation.isPending) return;

    productMutation.mutate({
      name: name.trim(),
      description: description.trim(),
      price: Number(price),
      tags,
    });
  };

  if (isEditMode && productQuery.isLoading) {
    return (
      <div className="registration-page">
        <Header />
        <main className="registration-main text-center text-[#9CA3AF]">
          상품 정보를 불러오는 중...
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="registration-page">
      <Header />

      <main className="registration-main">
        <section className="registration-section">
          <div className="registration-header">
            <h1 className="registration-title">
              {isEditMode ? "상품 수정하기" : "상품 등록하기"}
            </h1>

            <button
              type="submit"
              form="registration-form"
              className="submit-button"
              disabled={!isFormValid || productMutation.isPending}
            >
              {productMutation.isPending
                ? isEditMode
                  ? "수정 중..."
                  : "등록 중..."
                : isEditMode
                  ? "수정"
                  : "등록"}
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
