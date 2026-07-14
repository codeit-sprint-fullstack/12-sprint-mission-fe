import { useState } from "react";

import type { Article } from "@/features/article/type";

type usePostFormOptions = {
  initialPost?: Article;
};

export function usePostForm({ initialPost }: usePostFormOptions = {}) {
  const [title, setTitle] = useState(initialPost?.title ?? "");
  const [content, setContent] = useState(initialPost?.content ?? "");

  const isValid = title.trim().length > 0 && content.trim().length > 0;

  return {
    title,
    content,
    setTitle,
    setContent,
    isValid,
  };
}
