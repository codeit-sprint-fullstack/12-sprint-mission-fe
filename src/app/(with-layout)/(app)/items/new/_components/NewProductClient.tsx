"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import ProductForm from "@/app/(with-layout)/(app)/items/_components/ProductForm";
import { useProductForm } from "@/hooks/useProductForm";
import { createProduct } from "@/lib/api/products.api";
import { showErrorToast } from "@/utils/showErrorToast";

export default function NewProductClient() {
  const router = useRouter();
  const { values, setters, handlers, isValid } = useProductForm();

  const { mutate: handleSubmit, isPending: isSubmitting } = useMutation({
    mutationFn: () =>
      createProduct(
        {
          name: values.name,
          description: values.description,
          price: Number(values.price),
          tags: values.tags,
        },
        values.images,
      ),
    onSuccess: (response) => router.replace(`/items/${response.data.id}`),
    onError: (err) => showErrorToast(err, "상품 등록"),
  });

  return (
    <ProductForm
      heading="상품 등록하기"
      submitLabel="등록"
      name={values.name}
      onNameChange={setters.setName}
      description={values.description}
      onDescriptionChange={setters.setDescription}
      price={values.price}
      onPriceChange={setters.setPrice}
      tags={values.tags}
      tagInput={values.tagInput}
      onTagInputChange={setters.setTagInput}
      onAddTag={handlers.handleAddTag}
      onRemoveTag={handlers.handleRemoveTag}
      images={values.images}
      onImagesChange={setters.setImages}
      isValid={isValid}
      isSubmitting={isSubmitting}
      onSubmit={() => handleSubmit()}
    />
  );
}
