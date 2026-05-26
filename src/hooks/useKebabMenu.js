import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function useKebabMenu({
  deleteFn,
  redirectUrl,
  queryKey,
  onSuccess,
}) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [modalOpen, setModalOpen] = useState(false);

  const { mutate: deleteMutate, isPending: isDeleting } = useMutation({
    mutationFn: deleteFn,

    onSuccess: () => {
      setModalOpen(false);

      if (queryKey) {
        queryClient.invalidateQueries({ queryKey });
      }

      if (onSuccess) {
        onSuccess();
      }

      if (redirectUrl) {
        router.replace(redirectUrl);
      }
    },

    onError: (err) => {
      toast.error(
        err.response?.data?.message || err.message || "삭제에 실패했습니다.",
      );
    },
  });

  const handleDelete = () => {
    if (isDeleting) return;
    deleteMutate();
  };

  return { isDeleting, modalOpen, setModalOpen, handleDelete };
}
