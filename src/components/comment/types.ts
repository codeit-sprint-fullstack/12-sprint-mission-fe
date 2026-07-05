import type { QueryKey } from "@tanstack/react-query";
import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";

import type { deleteComment, updateComment } from "@/lib/api/comments.api";
import type { Comment } from "@/types/comment";

export type CommentActionProps = {
  queryKey: QueryKey;
  updateComment: typeof updateComment;
  deleteComment: typeof deleteComment;
};

export type CommentCardProps = CommentActionProps & {
  comment: Comment;
};

export type CommentListProps = CommentActionProps & {
  comments: Comment[];
  emptyImage: string | StaticImageData;
  emptyMessage: ReactNode;
  emptySize: number;
  className?: string;
};
