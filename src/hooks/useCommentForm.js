import { useState } from "react";
import { toast } from "react-hot-toast";

export default function useCommentForm({ createComment, onSuccess }) {
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isDisabled = comment.trim().length === 0 || isSubmitting;

  const handleSubmit = async () => {
    if (isDisabled) return;
    try {
      setIsSubmitting(true);
      await createComment(comment);
      setComment("");
      await onSuccess();
    } catch (err) {
      toast.error(err.message || "댓글 등록에 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return { comment, setComment, isSubmitting, isDisabled, handleSubmit };
}
