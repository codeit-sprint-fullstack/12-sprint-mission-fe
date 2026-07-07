"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import PostForm from "@/features/article/components/PostForm";
import { useImageUpload } from "@/hooks/useImageUpload";
import { usePostForm } from "@/features/article/hooks/usePostForm";
import { updateArticle } from "@/lib/api/article.api";
import type { Article } from "@/features/article/type";
import { showErrorToast } from "@/utils/showErrorToast";

type PostEditClientProps = {
  post: Article;
};

export default function PostEditClient({ post }: PostEditClientProps) {
  const router = useRouter();

  const { title, content, setTitle, setContent, isValid } = usePostForm({
    initialPost: post,
  });

  const { images, setImages, existingImageUrls, handleRemoveExistingImage } =
    useImageUpload();

  const { mutate: handleEdit, isPending: isSubmitting } = useMutation({
    mutationFn: () =>
      updateArticle(post.id, { title, content, existingImageUrls }, images),

    onSuccess: () => router.replace(`/community/${post.id}`),

    onError: (err) => showErrorToast(err, "게시글 수정"),
  });

  return (
    <PostForm
      heading="게시글 수정"
      submitLabel="수정"
      title={title}
      onTitleChange={setTitle}
      content={content}
      onContentChange={setContent}
      images={images}
      onImagesChange={setImages}
      existingImageUrls={existingImageUrls}
      onRemoveExistingImage={handleRemoveExistingImage}
      isValid={isValid}
      isSubmitting={isSubmitting}
      onSubmit={() => handleEdit()}
    />
  );
}
