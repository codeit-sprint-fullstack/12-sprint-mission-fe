"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

import PostForm from "@/app/(with-layout)/(app)/community/_components/PostForm";
import { updateArticle } from "@/lib/api/article.api";
import type { Article } from "@/types/article";
import { showErrorToast } from "@/utils/showErrorToast";

type PostEditClientProps = {
  post: Article;
};

export default function PostEditClient({ post }: PostEditClientProps) {
  const router = useRouter();

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  // 기존에 등록되어 있던 이미지 URL (안 지운 것만 남김)
  const [existingImageUrls, setExistingImageUrls] = useState<string[]>(
    post.imageUrls,
  );

  // 새로 추가한 이미지 파일
  const [newImages, setNewImages] = useState<File[]>([]);

  const handleRemoveExistingImage = (url: string) => {
    setExistingImageUrls((prev) => prev.filter((u) => u !== url));
  };

  const { mutate: handleEdit, isPending: isSubmitting } = useMutation({
    mutationFn: () =>
      updateArticle(post.id, { title, content, existingImageUrls }, newImages),

    onSuccess: () => router.replace(`/community/${post.id}`),

    onError: (err) => showErrorToast(err, "게시글 수정"),
  });

  const isValid = title.trim().length > 0 && content.trim().length > 0;

  return (
    <PostForm
      heading="게시글 수정"
      submitLabel="수정"
      title={title}
      onTitleChange={setTitle}
      content={content}
      onContentChange={setContent}
      images={newImages}
      onImagesChange={setNewImages}
      existingImageUrls={existingImageUrls}
      onRemoveExistingImage={handleRemoveExistingImage}
      isValid={isValid}
      isSubmitting={isSubmitting}
      onSubmit={() => handleEdit()}
    />
  );
}
