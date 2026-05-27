import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export default function useUpdateComment({ updateFn, queryKey, onSuccess }) {
  const queryClient = useQueryClient();

  const { mutate: handleEdit, isPending: isSubmitting } = useMutation({
    mutationFn: updateFn,
    onSuccess: () => {
      if (onSuccess) onSuccess();
      if (queryKey) queryClient.invalidateQueries({ queryKey });
    },
    onError: (err) => toast.error(err.message || "댓글 수정에 실패했습니다."),
  });

  return { isSubmitting, handleEdit };
}
