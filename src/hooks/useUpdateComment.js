import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export default function useUpdateComment({ updateFn, onSuccess }) {
  const { mutate: handleEdit, isPending: isSubmitting } = useMutation({
    mutationFn: updateFn,
    onSuccess,
    onError: (err) => toast.error(err.message || "댓글 수정에 실패했습니다."),
  });

  return { isSubmitting, handleEdit };
}
