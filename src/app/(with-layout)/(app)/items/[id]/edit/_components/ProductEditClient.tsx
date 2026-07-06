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

  // 기존에 등록되어 있던 이미지 URL (안 지운 것만 남김)
  const [existingImageUrls, setExistingImageUrls] = useState<string[]>(
    product.imageUrls,
  );

  // 새로 추가한 이미지 파일
  const [newImages, setNewImages] = useState<File[]>([]);

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

  const handleRemoveExistingImage = (url: string) => {
    setExistingImageUrls((prev) => prev.filter((u) => u !== url));
  };

  const { mutate: handleSubmit, isPending: isSubmitting } = useMutation({
    mutationFn: () =>
      updateProduct(
        product.id,
        {
          name,
          description,
          price: Number(price),
          tags,
          existingImageUrls,
        },
        newImages,
      ),
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
      images={newImages}
      onImagesChange={setNewImages}
      existingImageUrls={existingImageUrls}
      onRemoveExistingImage={handleRemoveExistingImage}
      isValid={isValid}
      isSubmitting={isSubmitting}
      onSubmit={() => handleSubmit()}
    />
  );
}
