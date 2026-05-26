"use client";

import Modal from "@/components/ui/Modal";
import KebabMenu from "@/components/ui/KebabMenu";

export default function ProductKebabMenu({ id }) {
  return (
    <>
      <KebabMenu>
        <KebabMenu.Link href={`/items/${id}/edit`}>수정하기</KebabMenu.Link>
        <KebabMenu.Button>삭제하기</KebabMenu.Button>
      </KebabMenu>

      <Modal
        variant="danger"
        title="정말로 게시글을 삭제하시겠어요?"
        confirmText="삭제"
      />
    </>
  );
}
