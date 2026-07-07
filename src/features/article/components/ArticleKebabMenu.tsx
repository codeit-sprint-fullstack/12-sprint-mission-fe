"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { KebabMenu } from "@/common/components/ui/KebabMenu";
import { Modal } from "@/common/components/ui/Modal";
import { useDeleteState } from "@/common/hooks/useDeleteState";
import { deleteArticle } from "@/features/article/api";

type ArticleKebabMenuProps = {
  articleId: number;
};

export default function ArticleKebabMenu({ articleId }: ArticleKebabMenuProps) {
  const router = useRouter();

  const { modalOpen, openModal, closeModal, handleErrorDelete } =
    useDeleteState();

  const { mutate: handleDelete, isPending: isDeleting } = useMutation({
    mutationFn: () => deleteArticle(articleId),
    onSuccess: () => {
      closeModal();
      router.replace("/community");
    },
    onError: handleErrorDelete,
  });

  return (
    <>
      <KebabMenu>
        <KebabMenu.Link href={`/community/${articleId}/edit`}>
          수정하기
        </KebabMenu.Link>
        <KebabMenu.Button onClick={openModal}>삭제하기</KebabMenu.Button>
      </KebabMenu>

      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        variant="danger"
        title="정말로 게시글을 삭제하시겠어요?"
        confirmText="삭제"
        onConfirm={handleDelete}
        loading={isDeleting}
      />
    </>
  );
}
