"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import PostForm from "@/features/article/components/PostForm";
import { useImageUpload } from "@/hooks/useImageUpload";
import { usePostForm } from "@/features/article/hooks/usePostForm";
import { createArticle } from "@/lib/api/article.api";
import { showErrorToast } from "@/utils/showErrorToast";

export default function PostWriteClient() {
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
