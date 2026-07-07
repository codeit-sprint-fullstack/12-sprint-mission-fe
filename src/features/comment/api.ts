import type { CommentResponse } from "@/common/types/common";

import { api } from "../../lib/api/client.api";

type UpdateCommentBody = {
  content: string;
};

export const updateComment = (commentId: number, content: string) =>
  api.patch<CommentResponse, UpdateCommentBody>(`/comments/${commentId}`, {
    content,
  });

export const deleteComment = (commentId: number) =>
  api.delete<void>(`/comments/${commentId}`);
