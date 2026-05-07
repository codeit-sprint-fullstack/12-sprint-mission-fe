"use client";

import { useRouter } from "next/navigation";
import { createArticle } from "@/lib/api/posts";
import usePostForm from "@/hooks/usePostForm";
import PostForm from "@/app/community/_components/PostForm";

export default function PostWritePage() {
  const router = useRouter();
  const {
    title,
    setTitle,
    content,
    setContent,
    isValid,
    isSubmitting,
    handleSubmit,
  } = usePostForm();

  return (
    <PostForm
      heading="게시글 쓰기"
      submitLabel="등록"
      title={title}
      onTitleChange={setTitle}
      content={content}
      onContentChange={setContent}
      isValid={isValid}
      isSubmitting={isSubmitting}
      onSubmit={() =>
        handleSubmit(async ({ title, content }) => {
          const { data } = await createArticle({ title, content });
          router.replace(`/community/${data.id}`);
        })
      }
    />
  );
}
