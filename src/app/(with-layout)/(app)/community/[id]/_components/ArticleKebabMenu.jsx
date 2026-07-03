"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { useDeleteState } from "@/hooks/useDeleteState";
import { deleteArticle } from "@/lib/api/article.api";
import Modal from "@/components/ui/Modal";
import KebabMenu from "@/components/ui/KebabMenu";

export default function ArticleKebabMenu({ id }) {
  const router = useRouter();

  const { modalOpen, openModal, closeModal, handleErrorDelete } =
    useDeleteState();

  const { mutate: handleDelete, isPending: isDeleting } = useMutation({
    mutationFn: () => deleteArticle(id),
    onSuccess: () => {
      closeModal();
      router.replace("/community");
    },
    onError: handleErrorDelete,
  });

  return (
    <>
      <KebabMenu>
        <KebabMenu.Link href={`/community/${id}/edit`}>수정하기</KebabMenu.Link>
        <KebabMenu.Button onClick={openModal}>삭제하기</KebabMenu.Button>
      </KebabMenu>

      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        variant="danger"
        title="정말로 게시글을 삭제하시겠어요?"
        confirmText="삭제"
        onConfirm={handleDelete}
        disabled={isDeleting}
        loading={isDeleting}
      />
    </>
  );
}
