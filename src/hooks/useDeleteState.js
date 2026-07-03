import { useState } from "react";
import { toast } from "react-hot-toast";

export function useDeleteState() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);

  const closeModal = () => setModalOpen(false);

  const handleErrorDelete = (err) => {
    toast.error(
      err.response?.data?.message || err.message || "삭제에 실패했습니다.",
    );
  };

  return {
    modalOpen,
    openModal,
    closeModal,
    handleErrorDelete,
  };
}
