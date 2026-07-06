"use client";

import Image from "next/image";
import { useEffect, useMemo } from "react";

import Button from "@/components/ui/Button";
import { getImageUrl } from "@/utils/getImageUrl";

const NAME_MAX_LENGTH = 100;
const DESCRIPTION_MIN_LENGTH = 10;
const MAX_IMAGE_COUNT = 3;
const IMAGE_BOX_MAX = 282;

type ProductFormProps = {
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
  // 새로 추가할 이미지 파일들
  images: File[];
  onImagesChange: (files: File[]) => void;
  // 수정 시 기존에 업로드돼 있던 이미지 URL들
  existingImageUrls?: string[];
  onRemoveExistingImage?: (url: string) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
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

  const totalImageCount = existingImageUrls.length + images.length;
  const isImageLimitReached = totalImageCount >= MAX_IMAGE_COUNT;

  // File[]: 미리보기용 objectURL. 이미지가 바뀔 때마다 새로 만들고, 이전 URL은 해제
  const previewUrls = useMemo(
    () => images.map((file) => URL.createObjectURL(file)),
    [images],
  );

  useEffect(() => {
    return () => {
      previewUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previewUrls]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    if (files.length === 0) return;

    const remainingSlots = MAX_IMAGE_COUNT - totalImageCount;
    const filesToAdd = files.slice(0, remainingSlots);

    onImagesChange([...images, ...filesToAdd]);

    // 같은 파일을 다시 선택해도 onChange가 발생하도록 초기화
    e.target.value = "";
  };

  const handleRemoveNewImage = (index: number) => {
    onImagesChange(images.filter((_, i) => i !== index));
  };

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

        <div className="mb-4 lg:mb-6">
          <label className="block text-2lg font-bold text-gray-800">
            상품 이미지 ({totalImageCount}/{MAX_IMAGE_COUNT})
          </label>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4  mb-4 lg:mb-6">
          <label
            htmlFor="images"
            style={{ maxWidth: IMAGE_BOX_MAX }}
            className={`
              flex flex-col items-center justify-center w-full aspect-square mx-auto rounded-lg
              bg-gray-100 cursor-pointer text-gray-400 text-lg
              ${isImageLimitReached || isSubmitting ? "opacity-50 pointer-events-none" : ""}
            `}
          >
            <Image
              src="/icons/ic-plus.svg"
              width={48}
              height={48}
              alt="이미지 등록"
            />

            <span className="mt-[0.75rem]">이미지 등록</span>
            <input
              type="file"
              id="images"
              accept="image/*"
              multiple
              onChange={handleFileSelect}
              disabled={isImageLimitReached || isSubmitting}
              className="hidden"
            />
          </label>

          {existingImageUrls.map((url) => (
            <div
              key={url}
              style={{ maxWidth: IMAGE_BOX_MAX }}
              className="relative w-full aspect-square mx-auto rounded-lg overflow-hidden bg-gray-100"
            >
              <Image
                src={getImageUrl(url)!}
                alt="기존 이미지"
                fill
                className="object-cover"
                unoptimized
              />

              {onRemoveExistingImage && (
                <button
                  type="button"
                  onClick={() => onRemoveExistingImage?.(url)}
                  disabled={isSubmitting}
                  style={{ position: "absolute", top: 8, right: 8 }}
                  className="z-10 p-1.5"
                >
                  <Image
                    src="/icons/ic-tag-remove.svg"
                    width={18}
                    height={18}
                    alt="이미지 삭제"
                  />
                </button>
              )}
            </div>
          ))}

          {previewUrls.map((url, index) => (
            <div
              key={url}
              style={{ maxWidth: IMAGE_BOX_MAX }}
              className="relative w-full aspect-square mx-auto rounded-lg overflow-hidden bg-gray-100"
            >
              <Image src={url} alt="새 이미지" fill className="object-cover" />
              <button
                type="button"
                onClick={() => handleRemoveNewImage(index)}
                disabled={isSubmitting}
                style={{ position: "absolute", top: 8, right: 8 }}
                className="z-10 p-1.5"
              >
                <Image
                  src="/icons/ic-tag-remove.svg"
                  width={20}
                  height={22}
                  alt="이미지 삭제"
                />
              </button>
            </div>
          ))}
        </div>

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
