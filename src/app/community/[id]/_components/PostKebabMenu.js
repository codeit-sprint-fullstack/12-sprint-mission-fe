"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "@/components/ui/Modal";
import { deleteArticle } from "@/lib/api/posts";
import KebabMenu from "./KebabMenu";

export default function PostKebabMenu({ id }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await deleteArticle(id);
      router.replace("/community");
    } catch (err) {
      console.error(err);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <KebabMenu>
        <KebabMenu.Link href={`/community/${id}/edit`}>수정하기</KebabMenu.Link>
        <KebabMenu.Button onClick={() => setOpen(true)}>
          삭제하기
        </KebabMenu.Button>
      </KebabMenu>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
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
