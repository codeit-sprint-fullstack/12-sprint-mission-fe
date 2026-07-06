"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

import PostForm from "@/app/(with-layout)/(app)/community/_components/PostForm";
import { useImageUpload } from "@/hooks/useImageUpload";
import { createArticle } from "@/lib/api/article.api";
import { showErrorToast } from "@/utils/showErrorToast";

export default function PostWriteClient() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { images, setImages } = useImageUpload();

  const { mutate: handleSubmit, isPending: isSubmitting } = useMutation({
    mutationFn: () => createArticle({ title, content }),
    onSuccess: (response) => router.replace(`/community/${response.data.id}`),
    onError: (err: Error) => showErrorToast(err, "게시글 등록"),
  });

  const isValid = title.trim().length > 0 && content.trim().length > 0;

  return (
    <PostForm
      heading="게시글 쓰기"
      submitLabel="등록"
      title={title}
      onTitleChange={setTitle}
      content={content}
      onContentChange={setContent}
      images={images}
      onImagesChange={setImages}
      isValid={isValid}
      isSubmitting={isSubmitting}
      onSubmit={() => handleSubmit()}
    />
  );
}
