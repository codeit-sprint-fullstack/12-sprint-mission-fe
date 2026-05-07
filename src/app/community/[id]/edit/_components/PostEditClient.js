"use client";

import { useRouter } from "next/navigation";
import { updateArticle } from "@/lib/api/posts";
import usePostForm from "@/hooks/usePostForm";
import PostForm from "@/app/community/_components/PostForm";

export default function PostEditClient({ post }) {
  const router = useRouter();
  const {
    title,
    setTitle,
    content,
    setContent,
    isValid,
    isSubmitting,
    handleSubmit,
  } = usePostForm({ title: post.title, content: post.content });

  return (
    <section className="flex flex-col gap-6 md:gap-8 mt-4 lg:mt-6">
      <PostForm
        heading="게시글 수정"
        submitLabel="수정"
        title={title}
        onTitleChange={setTitle}
        content={content}
        onContentChange={setContent}
        isValid={isValid}
        isSubmitting={isSubmitting}
        onSubmit={() =>
          handleSubmit(async ({ title, content }) => {
            await updateArticle(post.id, { title, content });
            router.replace(`/community/${post.id}`);
          })
        }
      />
    </section>
  );
}
