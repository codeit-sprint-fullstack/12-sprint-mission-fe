import type { QueryKey } from "@tanstack/react-query";
import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";

import type { Comment } from "@/common/types/comment";
import type { deleteComment, updateComment } from "@/features/comment/api";

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
