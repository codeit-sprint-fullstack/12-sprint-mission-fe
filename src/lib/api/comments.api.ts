import type { CommentResponse } from "@/types/comment";

import { api } from "./client.api";

type UpdateCommentBody = {
  content: string;
};

export const updateComment = (commentId: number, content: string) =>
  api.patch<CommentResponse, UpdateCommentBody>(`/comments/${commentId}`, {
    content,
  });

export const deleteComment = (commentId: number) =>
  api.delete<void>(`/comments/${commentId}`);
