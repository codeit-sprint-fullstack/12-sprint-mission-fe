"use client";

import Image from "next/image";

import type { ImageUploaderProps } from "@/app/(with-layout)/(app)/_components/ImageUploader";
import { ImageUploader } from "@/app/(with-layout)/(app)/_components/ImageUploader";
import Button from "@/components/ui/Button";

const NAME_MAX_LENGTH = 100;
const DESCRIPTION_MIN_LENGTH = 10;

type ProductFormProps = Omit<ImageUploaderProps, "label"> & {
  heading: string;
  submitLabel?: string;
  name: string;
  onNameChange: (value: string) => void;
  description: string;
  onDescriptionChange: (value: string) => void;
  price: string;
  onPriceChange: (value: string) => void;
  tags: string[];
  tagInput: string;
  onTagInputChange: (value: string) => void;
  onAddTag: () => void;
  onRemoveTag: (tag: string) => void;
  onSubmit: () => void;
  isValid: boolean;
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

        <div className="mb-[0.75rem]">
          <label
            htmlFor="name"
            className="block text-2lg font-bold text-gray-800"
          >
            상품명
          </label>
        </div>
        <div className="relative">
          <input
            type="text"
            id="name"
            placeholder="상품명을 입력해주세요."
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            maxLength={NAME_MAX_LENGTH}
            disabled={isSubmitting}
            className="
              w-full h-14 mb-4 lg:mb-6 px-6 py-4 rounded-lg bg-gray-100
              placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-primary focus:ring-2
            "
          />
          <span className="absolute bottom-8 right-6 text-xs text-gray-400">
            {name.length}/{NAME_MAX_LENGTH}
          </span>
        </div>

        <div className="mb-[0.75rem]">
          <label
            htmlFor="description"
            className="block text-2lg font-bold text-gray-800"
          >
            상품 소개
          </label>
        </div>
        <div className="relative">
          <textarea
            id="description"
            value={description}
            placeholder="상품 소개를 입력해주세요."
            onChange={(e) => onDescriptionChange(e.target.value)}
            disabled={isSubmitting}
            aria-invalid={isDescriptionTooShort}
            aria-describedby={
              isDescriptionTooShort ? "description-error" : undefined
            }
            className="
              w-full h-[17.625rem] mb-4 lg:mb-6 px-6 py-4 rounded-lg bg-gray-100 resize-none
              placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-2 focus:ring-primary
            "
          />
          <span className="absolute bottom-8 right-6 text-xs text-gray-400">
            {description.length}/{NAME_MAX_LENGTH}
          </span>
        </div>
        {isDescriptionTooShort && (
          <p id="description-error" className="mb-4 md:mb-6 text-sm text-error">
            상품 소개는 {DESCRIPTION_MIN_LENGTH}자 이상 입력해주세요.
          </p>
        )}

        <div className="mb-[0.75rem]">
          <label
            htmlFor="price"
            className="block text-2lg font-bold text-gray-800"
          >
            판매가격
          </label>
        </div>
        <input
          type="number"
          id="price"
          placeholder="판매 가격을 입력해주세요."
          value={price}
          onChange={(e) => onPriceChange(e.target.value)}
          disabled={isSubmitting}
          className="
              w-full h-14 mb-4 lg:mb-6 px-6 py-4 rounded-lg bg-gray-100
              placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-primary focus:ring-2
            "
        />
        <div className="mb-[0.75rem]">
          <label
            htmlFor="tags"
            className="block text-2lg font-bold text-gray-800"
          >
            태그
          </label>
        </div>
        <input
          type="text"
          id="tags"
          placeholder="태그를 입력한 후 엔터를 눌러주세요."
          value={tagInput}
          onChange={(e) => onTagInputChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              onAddTag();
            }
          }}
          disabled={isSubmitting}
          className="
              w-full h-14mb-4 lg:mb-6 px-6 py-4 rounded-lg bg-gray-100
              placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-primary focus:ring-2
            "
        />
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <div
              key={tag}
              className="flex items-center text-lg gap-2 py-1 px-3 text-gray-800 bg-gray-100 rounded-full"
            >
              <span>#{tag}</span>

              <button type="button" onClick={() => onRemoveTag(tag)}>
                <Image
                  src="/icons/ic-tag-remove.svg"
                  width={20}
                  height={22}
                  alt="태그 삭제"
                />
              </button>
            </div>
          ))}
        </div>
      </form>
    </section>
  );
}
