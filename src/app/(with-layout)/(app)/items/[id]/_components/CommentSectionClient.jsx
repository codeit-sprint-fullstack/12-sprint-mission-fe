"use client";

import useCommentSection from "@/hooks/useCommentSection";
import CommentForm from "@/components/comment/CommentForm";
import CommentList from "@/components/comment/CommentList";
import CommentListSkeleton from "@/components/comment/CommentListSkeleton";
import { getProductComments, createProductComment } from "@/lib/api/products";
import { updateComment, deleteComment } from "@/lib/api/comments";

export default function CommentSectionClient({ productId, initialComments }) {
  const { comments, isLoading, handleRefresh } = useCommentSection({
    initialComments,
    fetchComments: () => getProductComments({ productId }),
  });

  return (
    <>
      <div className="flex flex-col mb-6 md:mb-8 lg:mb-10">
        <h3 className="mb-2 text-lg font-semibold">댓글달기</h3>
        <CommentForm
          createComment={(content) => createProductComment(productId, content)}
          onSuccess={handleRefresh}
        />
      </div>

      {isLoading ? (
        <CommentListSkeleton />
      ) : (
        <CommentList
          comments={comments}
          onRefresh={handleRefresh}
          updateComment={updateComment}
          deleteComment={deleteComment}
        />
      )}
    </>
  );
}
