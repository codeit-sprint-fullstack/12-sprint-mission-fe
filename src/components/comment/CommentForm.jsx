"use client";

import { useState } from "react";
import useCreateComment from "@/hooks/useCreateComment";
import Button from "@/components/ui/Button";
import CommentTextarea from "./CommentTextarea";

export default function CommentForm({ createComment, queryKey, placeholder }) {
  const [comment, setComment] = useState("");

  const { isSubmitting, handleSubmit } = useCreateComment({
    createComment: () => createComment(comment),
    queryKey,
    onSuccess: () => setComment(""),
  });

  const isDisabled = comment.trim().length === 0 || isSubmitting;

  return (
    <div>
      <div className="flex flex-col gap-3">
        <CommentTextarea
          value={comment}
          onChange={setComment}
          placeholder={placeholder}
        />

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
