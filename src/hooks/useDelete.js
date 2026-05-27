import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function useDelete({ deleteFn, onSuccess }) {
  const [modalOpen, setModalOpen] = useState(false);

  const { mutate: deleteMutate, isPending: isDeleting } = useMutation({
    mutationFn: deleteFn,

    onSuccess: (data) => {
      setModalOpen(false);
      onSuccess(data);
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
