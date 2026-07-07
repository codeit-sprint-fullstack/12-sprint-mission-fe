"use client";

import type { Comment } from "@/common/types/comment";
import { deleteComment, updateComment } from "@/features/comment/api";
import CommentForm from "@/features/comment/components/CommentForm";
import CommentList from "@/features/comment/components/CommentList";
import CommentListSkeleton from "@/features/comment/components/CommentListSkeleton";
import useCommentSection from "@/features/comment/hooks/useCommentSection";
import {
  createProductComment,
  getProductComments,
} from "@/features/product/api";

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
