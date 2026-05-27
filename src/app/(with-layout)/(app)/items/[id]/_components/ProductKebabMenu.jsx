"use client";

import useKebabMenu from "@/hooks/useKebabMenu";
import useUser from "@/hooks/useUser";
import { deleteProduct } from "@/lib/api/products";
import Modal from "@/components/ui/Modal";
import KebabMenu from "@/components/ui/KebabMenu";

export default function ProductKebabMenu({ productId, ownerId }) {
  const { data: user } = useUser();
  const isOwner = user?.id === ownerId;

  const { isDeleting, modalOpen, setModalOpen, handleDelete } = useKebabMenu({
    deleteFn: () => deleteProduct(productId),
    onSuccess: () => router.replace("/items"),
  });

  if (!isOwner) return null;

  return (
    <>
      <KebabMenu>
        <KebabMenu.Link href={`/items/${productId}/edit`}>
          수정하기
        </KebabMenu.Link>
        <KebabMenu.Button onClick={() => setModalOpen(true)}>
          삭제하기
        </KebabMenu.Button>
      </KebabMenu>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
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
