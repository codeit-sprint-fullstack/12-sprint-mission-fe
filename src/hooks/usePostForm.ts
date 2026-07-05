import { useState } from "react";
import { toast } from "react-hot-toast";

type PostFormValues = {
  title: string;
  content: string;
};

type PostFormInitialValues = Partial<PostFormValues>;

export default function usePostForm(initialValues: PostFormInitialValues = {}) {
  const [title, setTitle] = useState(initialValues.title ?? "");
  const [content, setContent] = useState(initialValues.content ?? "");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValid = title.trim().length > 0 && content.trim().length > 0;

  const handleSubmit = async (
    action: (values: PostFormValues) => Promise<unknown>,
  ) => {
    if (!isValid) return;
    try {
      setIsSubmitting(true);
      await action({ title, content });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "문제가 발생했습니다.";
      toast.error(message);
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
