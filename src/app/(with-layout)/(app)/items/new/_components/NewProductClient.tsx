"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import ProductForm from "@/features/product/components/ProductForm";
import { useImageUpload } from "@/common/hooks/useImageUpload";
import { useProductForm } from "@/features/product/hooks/useProductForm";
import { createProduct } from "@/features/product/api";
import { showErrorToast } from "@/common/utils/showErrorToast";

export default function NewProductClient() {
  const router = useRouter();
  const { values, setters, handlers, isValid } = useProductForm();
  const { images, setImages } = useImageUpload();

  const { mutate: handleSubmit, isPending: isSubmitting } = useMutation({
    mutationFn: () =>
      createProduct(
        {
          name: values.name,
          description: values.description,
          price: Number(values.price),
          tags: values.tags,
        },
        images,
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
      images={images}
      onImagesChange={setImages}
      isValid={isValid}
      isSubmitting={isSubmitting}
      onSubmit={() => handleSubmit()}
    />
  );
}
