import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export default function useCommentCard({ comment, updateComment, queryKey }) {
  const [content, setContent] = useState(comment.content);
  const [isEditing, setIsEditing] = useState(false);
  const queryClient = useQueryClient();

  const { mutate: handleEdit, isPending: isSubmitting } = useMutation({
    mutationFn: () => updateComment(comment.id, content),
    onSuccess: () => {
      setIsEditing(false);
      if (queryKey) queryClient.invalidateQueries({ queryKey });
    },
    onError: (err) => toast.error(err.message || "댓글 수정에 실패했습니다."),
  });

  const handleCancel = () => {
    setContent(comment.content);
    setIsEditing(false);
  };

  const isDisabled = content.trim().length === 0 || isSubmitting;

  return {
    content,
    setContent,
    isEditing,
    setIsEditing,
    isSubmitting,
    isDisabled,
    handleEdit,
    handleCancel,
  };
}
