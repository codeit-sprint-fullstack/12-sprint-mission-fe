"use client";

import { useMemo, useState } from "react";

export default function useProductForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  const errors = useMemo(() => {
    const nextErrors = {};

    if (!name.trim()) {
      nextErrors.name = "상품명을 입력해주세요.";
    } else if (name.trim().length > 10) {
      nextErrors.name = "상품명은 10자 이하여야 합니다.";
    }

    if (!description.trim()) {
      nextErrors.description = "상품 소개를 입력해주세요.";
    } else if (
      description.trim().length < 10 ||
      description.trim().length > 100
    ) {
      nextErrors.description = "상품 소개는 10자 이상 100자 이하여야 합니다.";
    }

    if (!price.trim()) {
      nextErrors.price = "판매 가격을 입력해주세요.";
    } else if (!/^\d+$/.test(price.trim())) {
      nextErrors.price = "판매 가격은 숫자만 입력해주세요.";
    }

    if (tagInput.trim() && tagInput.trim().length > 5) {
      nextErrors.tagInput = "태그는 5글자 이하여야 합니다.";
    }

    return nextErrors;
  }, [name, description, price, tagInput]);

  const isFormValid =
    name.trim() &&
    description.trim() &&
    price.trim() &&
    !errors.name &&
    !errors.description &&
    !errors.price &&
    !errors.tagInput;

  const handleAddTag = () => {
    const trimmedTag = tagInput.trim();

    if (!trimmedTag) return;
    if (trimmedTag.length > 5) return;

    if (tags.includes(trimmedTag)) {
      setTagInput("");
      return;
    }

    setTags((prev) => [...prev, trimmedTag]);
    setTagInput("");
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags((prev) => prev.filter((tag) => tag !== tagToRemove));
  };

  return {
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
  };
}
