"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

import ProductForm from "@/app/(with-layout)/(app)/items/_components/ProductForm";
import { updateProduct } from "@/lib/api/products.api";
import type { Product } from "@/types/product";
import { showErrorToast } from "@/utils/showErrorToast";

type ProductEditClientProps = {
  product: Product;
};

export function ProductEditClient({ product }: ProductEditClientProps) {
  const router = useRouter();

  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(String(product.price));
  const [tags, setTags] = useState<string[]>(product.tags);
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
      updateProduct(product.id, {
        name,
        description,
        price: Number(price),
        tags,
      }),
    onSuccess: () => router.replace(`/items/${product.id}`),
    onError: (err: Error) => showErrorToast(err, "상품 수정"),
  });

  const isValid = name.trim().length > 0 && description.trim().length >= 10;

  return (
    <ProductForm
      heading="상품 수정하기"
      submitLabel="수정"
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
