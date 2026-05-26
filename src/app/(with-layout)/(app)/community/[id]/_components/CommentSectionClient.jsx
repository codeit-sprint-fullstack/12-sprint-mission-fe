"use client";

import useCommentSection from "@/hooks/useCommentSection";
import CommentForm from "@/components/comment/CommentForm";
import CommentList from "@/components/comment/CommentList";
import CommentListSkeleton from "@/components/comment/CommentListSkeleton";
import { getArticleComments, createArticleComment } from "@/lib/api/posts";
import { updateComment, deleteComment } from "@/lib/api/comments";

export default function CommentSectionClient({ articleId, initialComments }) {
  const queryKey = ["postComments", articleId];

  const { comments, isLoading } = useCommentSection({
    queryKey,
    initialComments,
    fetchComments: () => getArticleComments({ articleId }),
  });

  return (
    <>
      <div className="flex flex-col mb-6 md:mb-8 lg:mb-10">
        <h3 className="mb-2 text-lg font-semibold">댓글달기</h3>
        <CommentForm
          createComment={(content) => createArticleComment(articleId, content)}
          queryKey={queryKey}
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
        />
      )}
    </>
  );
}
