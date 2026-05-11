import { api } from "./client";

export const updateComment = (commentId, content) =>
  api.patch(`/comments/${commentId}`, { content });

export const deleteComment = (commentId) =>
  api.delete(`/comments/${commentId}`);
