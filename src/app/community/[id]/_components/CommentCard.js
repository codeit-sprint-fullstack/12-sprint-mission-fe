"use client";

import { useState } from "react";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";
import { updateComment, deleteComment } from "@/lib/api/comments";
import Button from "@/components/ui/Button";
import KebabMenu from "./KebabMenu";
import CommentTextarea from "./CommentTextarea";

export default function CommentCard({ comment, onRefresh }) {
  const [content, setContent] = useState(comment.content);
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isDisabled = content.trim().length === 0 || isSubmitting;

  const handleEdit = async () => {
    if (isDisabled) return;

    try {
      setIsSubmitting(true);
      await updateComment(comment.id, content);
      await onRefresh();

      setIsEditing(false);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setContent(comment.content);
    setIsEditing(false);
  };

  const handleDelete = async () => {
    try {
      await deleteComment(comment.id);
      await onRefresh();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className={`
        flex flex-col pb-[0.75rem] border-b border-gray-300 bg-gray-bg
        ${isEditing ? "gap-4" : "gap-6"}    
    `}
    >
      {isEditing ? (
        <CommentTextarea value={content} onChange={setContent} />
      ) : (
        <div className="flex justify-between items-start gap-3">
          <p className="tflex-1 min-w-0 break-words text-md-regular">
            {comment.content}
          </p>
          <div className="shrink-0">
            <KebabMenu>
              <KebabMenu.Button onClick={() => setIsEditing(true)}>
                수정하기
              </KebabMenu.Button>
              <KebabMenu.Button onClick={handleDelete}>
                삭제하기
              </KebabMenu.Button>
            </KebabMenu>
          </div>
        </div>
      )}
      <div className="flex justify-between items-center">
        <div className="flex items-start gap-2">
          <Image
            src="/icons/ic-profile.svg"
            width={32}
            height={32}
            alt="프로필 사진"
          />
          <div className="flex flex-col gap-1 text-xs-regular">
            <span className="text-gray-600">닉네임</span>
            <span className="text-gray-400">
              {formatDistanceToNow(new Date(comment.createdAt), {
                addSuffix: true,
                locale: ko,
              })}
            </span>
          </div>
        </div>

        {isEditing && (
          <div className="flex gap-1 justify-end">
            <Button
              variant="secondary"
              className="px-[1.4375rem] h-[2.625rem] text-lg-semibold rounded-lg"
              onClick={handleCancel}
            >
              취소
            </Button>

            <Button
              className="px-[1.4375rem] h-[2.625rem] text-lg-semibold rounded-lg"
              onClick={handleEdit}
              disabled={isDisabled}
            >
              {isSubmitting ? "수정 중..." : "수정 완료"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
