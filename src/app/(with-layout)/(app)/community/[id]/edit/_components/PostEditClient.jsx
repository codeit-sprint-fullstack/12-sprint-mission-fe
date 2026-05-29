"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateArticle } from "@/lib/api/posts";
import useUpdate from "@/hooks/useUpdate";
import PostForm from "./_components/PostForm";

export default function PostEditClient({ post }) {
  const router = useRouter();
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const isValid = title.trim().length > 0 && content.trim().length > 0;

  const { handleEdit, isSubmitting } = useUpdate({
    updateFn: () => updateArticle(post.id, { title, content }),
    onSuccess: () => router.replace(`/community/${post.id}`),
  });

  return (
    <PostForm
      heading="게시글 수정"
      submitLabel="수정"
      title={title}
      onTitleChange={setTitle}
      content={content}
      onContentChange={setContent}
      isValid={isValid}
      isSubmitting={isSubmitting}
      onSubmit={() => handleEdit()}
    />
  );
}
