"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { showErrorToast } from "@/utils/showErrorToast";
import { updateArticle } from "@/lib/api/article.api";
import PostForm from "./_components/PostForm";

export default function PostEditClient({ post }) {
  const router = useRouter();

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const { mutate: handleEdit, isPending: isSubmitting } = useMutation({
    mutationFn: () => updateArticle(post.id, { title, content }),

    onSuccess: () => router.replace(`/community/${post.id}`),

    onError: (err) => showErrorToast(err, "게시글 수정"),
  });

  const isValid = title.trim().length > 0 && content.trim().length > 0;

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
