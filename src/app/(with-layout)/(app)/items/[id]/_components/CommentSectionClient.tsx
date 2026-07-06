"use client";

import CommentForm from "@/components/comment/CommentForm";
import CommentList from "@/components/comment/CommentList";
import CommentListSkeleton from "@/components/comment/CommentListSkeleton";
import useCommentSection from "@/hooks/useCommentSection";
import { deleteComment, updateComment } from "@/lib/api/comments.api";
import {
  createProductComment,
  getProductComments,
} from "@/lib/api/products.api";
import type { Comment } from "@/types/comment";

type CommentSectionClientProps = {
  productId: number;
  initialComments: Comment[];
};

export default function CommentSectionClient({
  productId,
  initialComments,
}: CommentSectionClientProps) {
  const queryKey = ["productComments", productId] as const;

  const { comments, isLoading } = useCommentSection({
    queryKey,
    initialComments,
    fetchComments: () => getProductComments({ productId }),
  });

  return (
    <>
      <div className="flex flex-col mb-6 md:mb-8 lg:mb-10">
        <h3 className="mb-2 text-lg font-semibold">문의하기</h3>
        <CommentForm
          createComment={(content: string) =>
            createProductComment(productId, content)
          }
          queryKey={queryKey}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
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
          emptyImage="/icons/ic-empty-inquiry.svg"
          emptyMessage="아직 문의가 없어요"
          emptySize={196}
          className="pb-2"
        />
      )}
    </>
  );
}
