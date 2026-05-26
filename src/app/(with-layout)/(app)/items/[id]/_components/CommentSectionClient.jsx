"use client";

import useCommentSection from "@/hooks/useCommentSection";
import CommentForm from "@/components/comment/CommentForm";
import CommentList from "@/components/comment/CommentList";
import CommentListSkeleton from "@/components/comment/CommentListSkeleton";
import { getProductComments, createProductComment } from "@/lib/api/products";
import { updateComment, deleteComment } from "@/lib/api/comments";

export default function CommentSectionClient({ productId, initialComments }) {
  const { comments, isLoading, handleRefresh } = useCommentSection({
    queryKey: ["productComments", productId],
    initialComments,
    fetchComments: () => getProductComments({ productId }),
  });

  return (
    <>
      <div className="flex flex-col mb-6 md:mb-8 lg:mb-10">
        <h3 className="mb-2 text-lg font-semibold">문의하기</h3>
        <CommentForm
          createComment={(content) => createProductComment(productId, content)}
          onSuccess={handleRefresh}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
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
