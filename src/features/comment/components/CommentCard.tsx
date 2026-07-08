"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/common/components/ui/Button";
import { KebabMenu } from "@/common/components/ui/KebabMenu";
import { Modal } from "@/common/components/ui/Modal";
import { useDeleteState } from "@/common/hooks/useDeleteState";
import { showErrorToast } from "@/common/utils/showErrorToast";
import { CommentTextarea } from "@/features/comment/components/CommentTextarea";
import type { CommentCardProps } from "@/features/comment/types";
import { useUser } from "@/features/user/hooks/useUser";

export function CommentCard({
  comment,
  queryKey,
  updateComment,
  deleteComment,
}: CommentCardProps) {
  const queryClient = useQueryClient();

  const [content, setContent] = useState(comment.content);
  const [isEditing, setIsEditing] = useState(false);

  const { data: user } = useUser();

  const { mutate: handleEdit, isPending: isSubmitting } = useMutation({
    mutationFn: () => updateComment(comment.id, content),

    onSuccess: () => {
      setIsEditing(false);
      queryClient.invalidateQueries({ queryKey });
    },

    onError: (err) => showErrorToast(err, "댓글 수정"),
  });

  const { modalOpen, openModal, closeModal, handleErrorDelete } =
    useDeleteState();

  const { mutate: handleDelete, isPending: isDeleting } = useMutation({
    mutationFn: () => deleteComment(comment.id),
    onSuccess: () => {
      closeModal();
      queryClient.invalidateQueries({ queryKey });
    },
    onError: handleErrorDelete,
  });

  const handleCancel = () => {
    setContent(comment.content);
    setIsEditing(false);
  };

  const isOwner = user?.id === comment.authorId;
  const isDisabled = content.trim().length === 0 || isSubmitting;

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
                  <KebabMenu.Button onClick={openModal}>
                    삭제하기
                  </KebabMenu.Button>
                </KebabMenu>
              </div>
            )}
          </div>
        )}
        <div className="flex justify-between items-center">
          <div className="flex items-start gap-2">
            {/* TODO: 실제 사용자 이미지로 교체 예정 */}
            <Image
              src="/icons/ic-profile.svg"
              width={32}
              height={32}
              alt={`${comment.authorNickname}님의 프로필 사진`}
            />
            <div className="flex flex-col gap-1 text-xs">
              <span className="text-gray-600">{comment.authorNickname}</span>
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
                onClick={() => handleEdit()}
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
        onClose={closeModal}
        variant="danger"
        title="정말로 댓글을 삭제하시겠어요?"
        confirmText="삭제"
        onConfirm={handleDelete}
        loading={isDeleting}
      />
    </>
  );
}
