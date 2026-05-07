"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { createArticleComment } from "@/lib/api/posts";

const MAX_LENGTH = 200;

export default function CommentForm({ postId, onSuccess }) {
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isDisabled = comment.trim().length === 0 || isSubmitting;

  const handleSubmit = async () => {
    if (isDisabled) return;

    try {
      setIsSubmitting(true);
      await createArticleComment(postId, comment);
      setComment("");
      await onSuccess();
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-3">
        <div className="relative">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="댓글을 입력해주세요."
            maxLength={MAX_LENGTH}
            className="w-full h-[6.5rem] px-6 py-4 rounded-xl bg-gray-100 resize-none"
          />

          <span className="absolute bottom-4 right-6 text-xs text-gray-400">
            {comment.length}/{MAX_LENGTH}
          </span>
        </div>

        <div className="flex justify-end">
          <Button
            className="px-[1.4375rem] h-[2.625rem] text-lg-semibold rounded-lg"
            onClick={handleSubmit}
            disabled={isDisabled}
          >
            {isSubmitting ? "등록 중..." : "등록"}
          </Button>
        </div>
      </div>
    </div>
  );
}
