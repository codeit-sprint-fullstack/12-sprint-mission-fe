"use client";

import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";
import useCommentCard from "@/hooks/useCommentCard";
import useKebabMenu from "@/hooks/useKebabMenu";
import useUser from "@/hooks/useUser";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import KebabMenu from "@/components/ui/KebabMenu";
import CommentTextarea from "./CommentTextarea";

export default function CommentCard({
  comment,
  onRefresh,
  updateComment,
  deleteComment,
}) {
  const { data: user } = useUser();
  const isOwner = user?.id === comment.writer.id;

  const {
    content,
    setContent,
    isEditing,
    setIsEditing,
    isSubmitting,
    isDisabled,
    handleEdit,
    handleCancel,
  } = useCommentCard({ comment, onRefresh, updateComment, deleteComment });

  const { isDeleting, modalOpen, setModalOpen, handleDelete } = useKebabMenu({
    deleteFn: () => deleteComment(comment.id),
    onSuccess: onRefresh,
  });

  return (
    <>
      <div
        className={`flex flex-col pb-[0.75rem] border-b border-gray-300 bg-surface ${isEditing ? "gap-4" : "gap-6"}`}
      >
        {isEditing ? (
          <CommentTextarea value={content} onChange={setContent} />
        ) : (
          <div className="flex justify-between items-start gap-3">
            <p className="flex-1 min-w-0 break-words text-md">
              {comment.content}
            </p>
            {isOwner && (
              <div className="shrink-0">
                <KebabMenu>
                  <KebabMenu.Button onClick={() => setIsEditing(true)}>
                    수정하기
                  </KebabMenu.Button>
                  <KebabMenu.Button onClick={() => setModalOpen(true)}>
                    삭제하기
                  </KebabMenu.Button>
                </KebabMenu>
              </div>
            )}
          </div>
        )}
        <div className="flex justify-between items-center">
          <div className="flex items-start gap-2">
            <Image
              src={comment.writer?.image || "/icons/ic-profile.svg"}
              width={32}
              height={32}
              alt={`${comment.writer.nickname}님의 프로필 사진`}
            />
            <div className="flex flex-col gap-1 text-xs">
              <span className="text-gray-600">{comment.writer.nickname}</span>
              <time dateTime={comment.createdAt} className="text-gray-400">
                {formatDistanceToNow(new Date(comment.createdAt), {
                  addSuffix: true,
                  locale: ko,
                })}
              </time>
            </div>
          </div>
          {isEditing && (
            <div className="flex gap-1 justify-end">
              <Button variant="secondary" onClick={handleCancel}>
                취소
              </Button>
              <Button
                onClick={handleEdit}
                disabled={isDisabled}
                loading={isSubmitting}
              >
                수정
              </Button>
            </div>
          )}
        </div>
      </div>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        variant="danger"
        title="정말로 댓글을 삭제하시겠어요?"
        confirmText="삭제"
        onConfirm={handleDelete}
        disabled={isDeleting}
        loading={isDeleting}
      />
    </>
  );
}
