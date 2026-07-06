"use client";

import {
  ImageUploader,
  type ImageUploaderProps,
} from "@/app/(with-layout)/(app)/_components/ImageUploader";
import { LabeledTextField } from "@/app/(with-layout)/(app)/_components/LabeledTextField";
import {
  TagInput,
  type TagInputProps,
} from "@/app/(with-layout)/(app)/items/_components/TagInput";
import Button from "@/components/ui/Button";

const NAME_MAX_LENGTH = 100;
const DESCRIPTION_MIN_LENGTH = 10;

type ProductFormProps = Omit<ImageUploaderProps, "label" | "isSubmitting"> &
  Omit<TagInputProps, "isSubmitting"> & {
    heading: string;
    submitLabel?: string;
    name: string;
    onNameChange: (value: string) => void;
    description: string;
    onDescriptionChange: (value: string) => void;
    price: string;
    onPriceChange: (value: string) => void;
    onSubmit: () => void;
    isValid: boolean;
    isSubmitting: boolean;
  };

export default function ProductForm({
  heading,
  submitLabel = "등록",
  name,
  onNameChange,
  description,
  onDescriptionChange,
  price,
  onPriceChange,
  tags,
  tagInput,
  onTagInputChange,
  onAddTag,
  onRemoveTag,
  images,
  onImagesChange,
  existingImageUrls = [],
  onRemoveExistingImage,
  onSubmit,
  isSubmitting,
  isValid,
}: ProductFormProps) {
  const isDescriptionTooShort =
    description.length > 0 &&
    description.trim().length < DESCRIPTION_MIN_LENGTH;

  return (
    <section>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="text-xl font-bold text-gray-800">{heading}</h2>
          <Button
            type="submit"
            disabled={!isValid || isSubmitting}
            loading={isSubmitting}
          >
            {submitLabel}
          </Button>
        </div>

        <ImageUploader
          label="상품 이미지"
          images={images}
          onImagesChange={onImagesChange}
          existingImageUrls={existingImageUrls}
          onRemoveExistingImage={onRemoveExistingImage}
          isSubmitting={isSubmitting}
        />

        <LabeledTextField
          id="name"
          label="상품명"
          value={name}
          placeholder="상품명을 입력해주세요."
          onChange={onNameChange}
          maxLength={NAME_MAX_LENGTH}
          disabled={isSubmitting}
        />

        <LabeledTextField
          id="description"
          label="상품 소개"
          value={description}
          placeholder="상품 소개를 입력해주세요."
          as="textarea"
          onChange={onDescriptionChange}
          disabled={isSubmitting}
          error={
            isDescriptionTooShort
              ? `상품 소개는 ${DESCRIPTION_MIN_LENGTH}자 이상 입력해주세요.`
              : undefined
          }
        />

        <LabeledTextField
          id="price"
          label="판매가격"
          type="number"
          value={price}
          onChange={onPriceChange}
          placeholder="판매 가격을 입력해주세요."
          disabled={isSubmitting}
        />

        <TagInput
          tags={tags}
          tagInput={tagInput}
          onTagInputChange={onTagInputChange}
          onAddTag={onAddTag}
          onRemoveTag={onRemoveTag}
          isSubmitting={isSubmitting}
        />
      </form>
    </section>
  );
}
