"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createProduct } from "../../api/ProductService";
import { BoardShell } from "./Layout";

export default function ProductRegistrationPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const canSubmit = name.trim() && description.trim() && price.trim() && !isSubmitting;

  async function handleSubmit(event) {
    event.preventDefault();
    if (!canSubmit) return;

    setIsSubmitting(true);
    setError("");

    try {
      await createProduct({
        name: name.trim(),
        description: description.trim(),
        price: Number(price),
        tags: tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
        images: [],
      });
      router.push("/market");
    } catch {
      setError("상품 등록에 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <BoardShell>
      <form className="article-form" onSubmit={handleSubmit}>
        <header className="form-header">
          <h1>상품 등록하기</h1>
          <button type="submit" className="submit-button" disabled={!canSubmit}>
            {isSubmitting ? "등록 중" : "등록"}
          </button>
        </header>

        {error ? <p className="form-error">{error}</p> : null}

        <label className="form-field">
          <span>*상품명</span>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="상품명을 입력해주세요"
          />
        </label>

        <label className="form-field">
          <span>*상품 소개</span>
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="상품 소개를 입력해주세요"
          />
        </label>

        <label className="form-field">
          <span>*판매 가격</span>
          <input
            value={price}
            onChange={(event) => setPrice(event.target.value.replace(/[^0-9]/g, ""))}
            placeholder="판매 가격을 입력해주세요"
          />
        </label>

        <label className="form-field">
          <span>태그</span>
          <input
            value={tags}
            onChange={(event) => setTags(event.target.value)}
            placeholder="태그를 입력해주세요"
          />
        </label>
      </form>
    </BoardShell>
  );
}
