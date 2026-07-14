import { useState } from "react";
import { toast } from "react-hot-toast";

import type { ApiError } from "@/common/types/api";

export function useDeleteState() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);

  const closeModal = () => setModalOpen(false);

  const handleErrorDelete = (err: ApiError) => {
    toast.error(err.message || "삭제에 실패했습니다.");
  };

  return {
    modalOpen,
    openModal,
    closeModal,
    handleErrorDelete,
  };
}
