"use client";

import useKebabMenu from "@/hooks/useKebabMenu";
import { deleteArticle } from "@/lib/api/posts";
import Modal from "@/components/ui/Modal";
import KebabMenu from "@/components/ui/KebabMenu";

export default function ArticleKebabMenu({ id }) {
  const { isDeleting, modalOpen, setModalOpen, handleDelete } = useKebabMenu({
    deleteFn: () => deleteArticle(id),
    onSuccess: () => router.replace("/community"),
  });

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
