import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { deleteArticle } from "@/lib/api/posts";

export default function usePostKebabMenu({ id }) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await deleteArticle(id);
      router.replace("/community");
    } catch (err) {
      toast.error(err.message || "게시글 삭제에 실패했습니다.");
    } finally {
      setIsDeleting(false);
    }
  };

  return { isDeleting, modalOpen, setModalOpen, handleDelete };
}
