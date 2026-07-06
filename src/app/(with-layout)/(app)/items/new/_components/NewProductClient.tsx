"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

import ProductForm from "@/app/(with-layout)/(app)/items/_components/ProductForm";
import { createProduct } from "@/lib/api/products.api";
import { showErrorToast } from "@/utils/showErrorToast";

export default function NewProductClient() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");

  const handleAddTag = () => {
    const value = tagInput.trim();
    if (!value) return;

    setTags((prev) => {
      if (prev.includes(value)) return prev;
      return [...prev, value];
    });

    setTagInput("");
  };

  const handleRemoveTag = (tag: string) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };

  const { mutate: handleSubmit, isPending: isSubmitting } = useMutation({
    mutationFn: () =>
      createProduct({ name, description, price: Number(price), tags }),
    onSuccess: (response) => router.replace(`/items/${response.data.id}`),
    onError: (err: Error) => showErrorToast(err, "상품 등록"),
  });

  // 설명은 10자 이상이어야 제출 가능 (ProductForm의 에러 메시지 조건과 동일하게 유지)
  const isValid = name.trim().length > 0 && description.trim().length >= 10;

  return (
    <ProductForm
      heading="상품 등록하기"
      submitLabel="등록"
      name={name}
      onNameChange={setName}
      description={description}
      onDescriptionChange={setDescription}
      price={price}
      onPriceChange={setPrice}
      tags={tags}
      tagInput={tagInput}
      onTagInputChange={setTagInput}
      onAddTag={handleAddTag}
      onRemoveTag={handleRemoveTag}
      isValid={isValid}
      isSubmitting={isSubmitting}
      onSubmit={() => handleSubmit()}
    />
  );
}
