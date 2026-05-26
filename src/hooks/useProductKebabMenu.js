import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { deleteProduct } from "@/lib/api/products";

export default function useProductKebabMenu({ productId }) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await deleteProduct(productId);
      router.replace("/items");
    } catch (err) {
      toast.error(err.message || "상품 삭제에 실패했습니다.");
    } finally {
      setIsDeleting(false);
    }
  };

  return { isDeleting, modalOpen, setModalOpen, handleDelete };
}
