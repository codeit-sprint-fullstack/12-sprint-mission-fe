import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export default function useUpdate({ updateFn, onSuccess }) {
  const { mutate, isPending } = useMutation({
    mutationFn: updateFn,
    onSuccess,
    onError: (err) => toast.error(err.message || "수정에 실패했습니다."),
  });

  return {
    isSubmitting: isPending,
    handleEdit: mutate,
  };
}
