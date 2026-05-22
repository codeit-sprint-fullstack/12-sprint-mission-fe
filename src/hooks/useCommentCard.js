import { useState } from "react";
import { toast } from "react-hot-toast";
import { updateComment, deleteComment } from "@/lib/api/comments";

export default function useCommentCard({ comment, onRefresh }) {
  const [content, setContent] = useState(comment.content);
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const isDisabled = content.trim().length === 0 || isSubmitting;

  const handleEdit = async () => {
    if (isDisabled) return;

    try {
      setIsSubmitting(true);
      await updateComment(comment.id, content);
      await onRefresh();

      setIsEditing(false);
    } catch (err) {
      toast.error(err.message || "댓글 수정에 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setContent(comment.content);
    setIsEditing(false);
  };

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await deleteComment(comment.id);
      await onRefresh();
      setModalOpen(false);
    } catch (err) {
      toast.error(err.message || "댓글 삭제에 실패했습니다.");
    } finally {
      setIsDeleting(false);
    }
  };

  return {
    content,
    setContent,
    isEditing,
    setIsEditing,
    isSubmitting,
    isDeleting,
    isDisabled,
    modalOpen,
    setModalOpen,
    handleEdit,
    handleCancel,
    handleDelete,
  };
}
