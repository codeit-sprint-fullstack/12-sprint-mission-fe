"use client";

import {
  type QueryKey,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useState } from "react";

import Button from "@/components/ui/Button";
import type { Comment } from "@/types/comment";
import { showErrorToast } from "@/utils/showErrorToast";

import CommentTextarea from "./CommentTextarea";

type CommentFormProps = {
  createComment: (content: string) => Promise<unknown>;
  queryKey: QueryKey;
  placeholder?: string;
};

export default function CommentForm({
  createComment,
  queryKey,
  placeholder,
}: CommentFormProps) {
  const queryClient = useQueryClient();

  const [comment, setComment] = useState("");

  const { mutate: handleSubmit, isPending: isSubmitting } = useMutation({
    mutationFn: () => createComment(comment),
    onSuccess: () => {
      setComment("");
      queryClient.invalidateQueries({ queryKey });
    },
    onError: (err) => showErrorToast(err, "댓글 등록"),
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
            onClick={() => handleSubmit()}
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
