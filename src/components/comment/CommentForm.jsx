"use client";

import useCommentForm from "@/hooks/useCommentForm";
import Button from "@/components/ui/Button";
import CommentTextarea from "./CommentTextarea";

export default function CommentForm({ createComment, onSuccess }) {
  const { comment, setComment, isSubmitting, isDisabled, handleSubmit } =
    useCommentForm({ createComment, onSuccess });

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
