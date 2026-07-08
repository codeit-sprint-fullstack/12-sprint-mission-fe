import { api } from "@/common/api/client";
import type { CommentResponse } from "@/common/types/comment";

type UpdateCommentBody = {
  content: string;
};

export const updateComment = (commentId: number, content: string) =>
  api.patch<CommentResponse, UpdateCommentBody>(`/comments/${commentId}`, {
    content,
  });

export const deleteComment = (commentId: number) =>
  api.delete<void>(`/comments/${commentId}`);
