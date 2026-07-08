"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { useImageUpload } from "@/common/hooks/useImageUpload";
import { showErrorToast } from "@/common/utils/showErrorToast";
import { createArticle } from "@/features/article/api";
import { PostForm } from "@/features/article/components/PostForm";
import { usePostForm } from "@/features/article/hooks/usePostForm";

export function PostWriteClient() {
  const router = useRouter();

  const { title, content, setTitle, setContent, isValid } = usePostForm();
  const { images, setImages } = useImageUpload();

  const { mutate: handleSubmit, isPending: isSubmitting } = useMutation({
    mutationFn: () => createArticle({ title, content }),
    onSuccess: (response) => router.replace(`/community/${response.data.id}`),
    onError: (err: Error) => showErrorToast(err, "게시글 등록"),
  });

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
