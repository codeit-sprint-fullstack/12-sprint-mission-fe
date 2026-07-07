"use client";

import { Button } from "@/common/components/ui/Button";
import { ContentField } from "@/common/components/ui/ContentField";
import { ImageUploader } from "@/common/components/ui/ImageUploader";
import type { BaseFormWithImagesProps } from "@/common/types/form";

const TITLE_MAX_LENGTH = 100;

type PostFormProps = BaseFormWithImagesProps & {
  title: string;
  onTitleChange: (value: string) => void;
  content: string;
  onContentChange: (value: string) => void;
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

        <ContentField
          id="title"
          label="제목"
          value={title}
          placeholder="제목을 입력해주세요."
          onChange={onTitleChange}
          maxLength={TITLE_MAX_LENGTH}
          disabled={isSubmitting}
        />

        <ContentField
          id="content"
          label="내용"
          value={content}
          placeholder="내용을 입력해주세요."
          as="textarea"
          onChange={onContentChange}
          disabled={isSubmitting}
        />

        <ImageUploader
          images={images}
          onImagesChange={onImagesChange}
          existingImageUrls={existingImageUrls}
          onRemoveExistingImage={onRemoveExistingImage}
          isSubmitting={isSubmitting}
        />
      </form>
    </section>
  );
}
