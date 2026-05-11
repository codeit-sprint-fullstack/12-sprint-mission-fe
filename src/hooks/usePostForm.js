import { useState } from "react";
import { toast } from "react-hot-toast";

export default function usePostForm(initialValues = {}) {
  const [title, setTitle] = useState(initialValues.title ?? "");
  const [content, setContent] = useState(initialValues.content ?? "");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValid = title.trim().length > 0 && content.trim().length > 0;

  const handleSubmit = async (action) => {
    if (!isValid) return;
    try {
      setIsSubmitting(true);
      await action({ title, content });
    } catch (err) {
      toast.error(err.message || "문제가 발생했습니다.");
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    title,
    setTitle,
    content,
    setContent,
    isValid,
    isSubmitting,
    handleSubmit,
  };
}
