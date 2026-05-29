"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createArticle } from "@/lib/api/posts";
import useCreate from "@/hooks/useCreate";
import PostForm from "./_components/PostForm";

export default function PostWriteClient() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const isValid = title.trim() && content.trim();

  const { handleSubmit, isSubmitting } = useCreate({
    createFn: () => createArticle({ title, content }),
    onSuccess: (data) => router.replace(`/community/${data.id}`),
  });

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
      onSubmit={() => handleSubmit()}
    />
  );
}
