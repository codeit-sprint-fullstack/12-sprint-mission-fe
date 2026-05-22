"use client";

import usePostKebabMenu from "@/hooks/usePostKebabMenu";
import Modal from "@/components/ui/Modal";
import KebabMenu from "./KebabMenu";

export default function PostKebabMenu({ id }) {
  const { isDeleting, modalOpen, setModalOpen, handleDelete } =
    usePostKebabMenu({ id });

  return (
    <>
      <KebabMenu>
        <KebabMenu.Link href={`/community/${id}/edit`}>수정하기</KebabMenu.Link>
        <KebabMenu.Button onClick={() => setModalOpen(true)}>
          삭제하기
        </KebabMenu.Button>
      </KebabMenu>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
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
