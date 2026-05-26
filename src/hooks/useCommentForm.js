import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export default function useCommentForm({ createComment, queryKey }) {
  const [comment, setComment] = useState("");
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: () => createComment(comment),
    onSuccess: async () => {
      setComment("");
      if (queryKey) {
        queryClient.invalidateQueries({ queryKey });
      }
    },
    onError: (err) => {
      toast.error(err.message || "댓글 등록에 실패했습니다.");
    },
  });

  const isDisabled = comment.trim().length === 0 || isPending;

  return {
    comment,
    setComment,
    isSubmitting: isPending,
    isDisabled,
    handleSubmit: mutate,
  };
}
