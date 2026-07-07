"use client";

import Image from "next/image";
import { useEffect, useMemo } from "react";

import type { ImageUploaderProps } from "@/common/types/form";
import { getImageUrl } from "@/common/utils/getImageUrl";

const MAX_IMAGE_COUNT = 3;
const IMAGE_BOX_MAX = 282;

export function ImageUploader({
  label = "이미지",
  images,
  onImagesChange,
  existingImageUrls = [],
  onRemoveExistingImage,
  isSubmitting,
}: ImageUploaderProps) {
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
    <div>
      <div className="mb-4 lg:mb-6">
        <label className="block text-2lg font-bold text-gray-800">
          {label} ({totalImageCount}/{MAX_IMAGE_COUNT})
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
    </div>
  );
}
