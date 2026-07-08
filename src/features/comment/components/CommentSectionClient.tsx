"use client";

import type { QueryKey } from "@tanstack/react-query";
import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";

import type { Comment, CommentListResponse } from "@/common/types/comment";
import { deleteComment, updateComment } from "@/features/comment/api";
import { CommentForm } from "@/features/comment/components/CommentForm";
import { CommentList } from "@/features/comment/components/CommentList";
import { CommentListSkeleton } from "@/features/comment/components/CommentListSkeleton";
import { useCommentSection } from "@/features/comment/hooks/useCommentSection";

type CommentSectionClientProps = {
  queryKey: QueryKey;
  initialComments: Comment[];
  fetchComments: () => Promise<CommentListResponse>;
  createComment: (content: string) => Promise<Comment>;
  title: string;
  placeholder?: string;
  emptyImage: string | StaticImageData;
  emptyMessage: ReactNode;
  emptySize: number;
  className?: string;
};

export function CommentSectionClient({
  queryKey,
  initialComments,
  fetchComments,
  createComment,
  title,
  placeholder,
  emptyImage,
  emptyMessage,
  emptySize,
  className,
}: CommentSectionClientProps) {
  const { comments, isLoading } = useCommentSection({
    queryKey,
    initialComments,
    fetchComments,
  });

  return (
    <>
      <div className="flex flex-col mb-6 md:mb-8 lg:mb-10">
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <CommentForm
          createComment={createComment}
          queryKey={queryKey}
          placeholder={placeholder}
        />
      </div>

      {isLoading ? (
        <CommentListSkeleton />
      ) : (
        <CommentList
          comments={comments}
          queryKey={queryKey}
          updateComment={updateComment}
          deleteComment={deleteComment}
          emptyImage={emptyImage}
          emptyMessage={emptyMessage}
          emptySize={emptySize}
          className={className}
        />
      )}
    </>
  );
}
