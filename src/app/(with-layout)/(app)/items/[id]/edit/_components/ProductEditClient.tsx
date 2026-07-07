"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import ProductForm from "@/features/product/components/ProductForm";
import { useImageUpload } from "@/common/hooks/useImageUpload";
import { useProductForm } from "@/features/product/hooks/useProductForm";
import { updateProduct } from "@/features/product/api";
import type { Product } from "@/features/product/type";
import { showErrorToast } from "@/utils/showErrorToast";

type ProductEditClientProps = {
  product: Product;
};

export function ProductEditClient({ product }: ProductEditClientProps) {
  const router = useRouter();

  const { values, setters, handlers, isValid } = useProductForm({
    initialProduct: product,
  });
  const { images, setImages, existingImageUrls, handleRemoveExistingImage } =
    useImageUpload();

  const { mutate: handleSubmit, isPending: isSubmitting } = useMutation({
    mutationFn: () =>
      updateProduct(
        product.id,
        {
          name: values.name,
          description: values.description,
          price: Number(values.price),
          tags: values.tags,
          existingImageUrls,
        },
        images,
      ),
    onSuccess: () => router.replace(`/items/${product.id}`),
    onError: (err) => showErrorToast(err, "상품 수정"),
  });

  return (
    <ProductForm
      heading="상품 수정하기"
      submitLabel="수정"
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
      existingImageUrls={existingImageUrls}
      onRemoveExistingImage={handleRemoveExistingImage}
      isValid={isValid}
      isSubmitting={isSubmitting}
      onSubmit={() => handleSubmit()}
    />
  );
}
