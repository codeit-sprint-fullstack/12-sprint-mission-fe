"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { useDeleteState } from "@/hooks/useDeleteState";
import { deleteProduct } from "@/lib/api/products.api";
import useUser from "@/hooks/useUser";
import Modal from "@/components/ui/Modal";
import KebabMenu from "@/components/ui/KebabMenu";

export default function ProductKebabMenu({ productId, ownerId }) {
  const router = useRouter();

  const { data: user } = useUser();
  const isOwner = user?.id === ownerId;

  const { modalOpen, openModal, closeModal, handleErrorDelete } =
    useDeleteState();

  const { mutate: handleDelete, isPending: isDeleting } = useMutation({
    mutationFn: () => deleteProduct(productId),
    onSuccess: () => {
      closeModal();
      router.replace("/items");
    },
    onError: handleErrorDelete,
  });

  if (!isOwner) {
    return null;
  }

  return (
    <>
      <KebabMenu>
        <KebabMenu.Link href={`/items/${productId}/edit`}>
          수정하기
        </KebabMenu.Link>
        <KebabMenu.Button onClick={openModal}>삭제하기</KebabMenu.Button>
      </KebabMenu>

      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        variant="danger"
        title="정말로 상품을 삭제하시겠어요?"
        confirmText="삭제"
        onConfirm={handleDelete}
        disabled={isDeleting}
        loading={isDeleting}
      />
    </>
  );
}
