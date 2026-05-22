"use client";

import useCommentSection from "@/hooks/useCommentSection";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import CommentListSkeleton from "./CommentListSkeleton";

export default function CommentSectionClient({ postId, initialComments }) {
  const { comments, isLoading, handleRefresh } = useCommentSection({
    postId,
    initialComments,
  });

  return (
    <>
      <div className="flex flex-col mb-6 md:mb-8 lg:mb-10">
        <h3 className="mb-2 text-lg font-semibold">댓글달기</h3>
        <CommentForm postId={postId} onSuccess={handleRefresh} />
      </div>

      {isLoading ? (
        <CommentListSkeleton />
      ) : (
        <CommentList comments={comments} onRefresh={handleRefresh} />
      )}
    </>
  );
}
