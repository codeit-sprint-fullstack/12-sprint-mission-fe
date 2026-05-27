"use client";

import Image from "next/image";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";
import useUpdateComment from "@/hooks/useUpdateComment";
import useDelete from "@/hooks/useDelete";
import useUser from "@/hooks/useUser";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import KebabMenu from "@/components/ui/KebabMenu";
import CommentTextarea from "./CommentTextarea";

export default function CommentCard({
  comment,
  queryKey,
  updateComment,
  deleteComment,
}) {
  const [content, setContent] = useState(comment.content);
  const [isEditing, setIsEditing] = useState(false);
  const { data: user } = useUser();
  const queryClient = useQueryClient();

  const { isSubmitting, handleEdit } = useUpdateComment({
    updateFn: () => updateComment(comment.id, content),
    onSuccess: () => {
      setIsEditing(false);
      queryClient.invalidateQueries({ queryKey });
    },
  });

  const { isDeleting, modalOpen, setModalOpen, handleDelete } = useDelete({
    deleteFn: () => deleteComment(comment.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  const handleCancel = () => {
    setContent(comment.content);
    setIsEditing(false);
  };

  const isOwner = user?.id === comment.writer.id;
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
