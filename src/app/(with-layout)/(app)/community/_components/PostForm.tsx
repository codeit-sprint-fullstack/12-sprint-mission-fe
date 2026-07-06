"use client";

import Image from "next/image";
import { useEffect, useMemo } from "react";

import Button from "@/components/ui/Button";
import { getImageUrl } from "@/utils/getImageUrl";

const TITLE_MAX_LENGTH = 100;
const IMAGE_BOX_MAX = 282;
const MAX_IMAGE_COUNT = 3;

type PostFormProps = {
  heading: string;
  submitLabel?: string;
  title: string;
  onTitleChange: (value: string) => void;
  content: string;
  onContentChange: (value: string) => void;
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

export default function PostForm({
  heading,
  submitLabel = "등록",
  title,
  onTitleChange,
  content,
  onContentChange,
  images = [],
  onImagesChange,
  existingImageUrls = [],
  onRemoveExistingImage,
  onSubmit,
  isSubmitting,
  isValid,
}: PostFormProps) {
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
    <section className="flex flex-col gap-6 md:gap-8">
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

        <div className="mb-[0.75rem]">
          <label
            htmlFor="title"
            className="block text-2lg font-bold text-gray-800"
          >
            *제목
          </label>
        </div>
        <div className="relative">
          <input
            type="text"
            id="title"
            placeholder="제목을 입력해주세요."
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            maxLength={TITLE_MAX_LENGTH}
            disabled={isSubmitting}
            className="
              w-full h-14 mb-4 md:mb-6 px-6 py-4 rounded-lg bg-gray-100
              placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-primary focus:ring-2
            "
          />
          <span className="absolute bottom-8 right-6 text-xs text-gray-400">
            {title.length}/{TITLE_MAX_LENGTH}
          </span>
        </div>

        <div className="mb-[0.75rem]">
          <label
            htmlFor="content"
            className="block text-2lg font-bold text-gray-800"
          >
            *내용
          </label>
        </div>
        <textarea
          id="content"
          value={content}
          placeholder="내용을 입력해주세요."
          onChange={(e) => onContentChange(e.target.value)}
          disabled={isSubmitting}
          className="
            w-full h-[17.625rem]  mb-4 md:mb-6  px-6 py-4 rounded-lg bg-gray-100 resize-none
            placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-primary focus:ring-2
          "
        />

        <div className="mb-4 lg:mb-6">
          <label className="block text-2lg font-bold text-gray-800">
            이미지 ({totalImageCount}/{MAX_IMAGE_COUNT})
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
      </form>
    </section>
  );
}
