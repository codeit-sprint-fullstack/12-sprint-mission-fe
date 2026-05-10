"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { createArticleComment } from "@/lib/api/posts";
import CommentTextarea from "./CommentTextarea";

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
        <CommentTextarea value={comment} onChange={setComment} />

        <div className="flex justify-end">
          <Button
            onClick={handleSubmit}
            disabled={isDisabled}
            loading={isSubmitting}
          >
            등록
          </Button>
        </div>
      </div>
    </div>
  );
}
