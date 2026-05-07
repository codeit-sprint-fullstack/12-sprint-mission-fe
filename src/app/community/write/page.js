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
    <section className="flex flex-col gap-6 md:gap-8 mt-4 lg:mt-6">
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
    </section>
  );
}
