"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { showErrorToast } from "@/utils/showErrorToast";
import { createArticle } from "@/lib/api/article.api";
import PostForm from "./_components/PostForm";

export default function PostWriteClient() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { mutate: handleSubmit, isPending: isSubmitting } = useMutation({
    mutationFn: () => createArticle({ title, content }),
    onSuccess: (data) => router.replace(`/community/${data.id}`),
    onError: (err) => showErrorToast(err, "게시글 등록"),
  });

  const isValid = title.trim() && content.trim();

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
