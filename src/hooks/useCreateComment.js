import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export default function useCreateComment({ createComment, onSuccess }) {
  const { mutate, isPending } = useMutation({
    mutationFn: createComment,
    onSuccess,
    onError: (err) => {
      toast.error(err.message || "댓글 등록에 실패했습니다.");
    },
  });

  return {
    isSubmitting: isPending,
    handleSubmit: mutate,
  };
}
