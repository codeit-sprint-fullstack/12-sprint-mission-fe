import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export default function useCreate({ createFn, onSuccess }) {
  const { mutate, isPending } = useMutation({
    mutationFn: createFn,
    onSuccess,
    onError: (err) => {
      toast.error(err.message || "생성에 실패했습니다.");
    },
  });

  return {
    isSubmitting: isPending,
    handleSubmit: mutate,
  };
}
