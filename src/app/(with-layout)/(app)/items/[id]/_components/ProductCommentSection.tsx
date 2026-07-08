import { productQueryKeys } from "@/common/constants/queryKeys";
import { CommentSectionClient } from "@/features/comment/components/CommentSectionClient";
import {
  createProductComment,
  getProductComments,
} from "@/features/product/api";

type CommentSectionProps = {
  productId: number;
};

export async function ProductCommentSection({
  productId,
}: CommentSectionProps) {
  const { data: initialComments } = await getProductComments({ productId });
  const queryKey = productQueryKeys.comments(productId);

  return (
    <CommentSectionClient
      queryKey={queryKey}
      initialComments={initialComments}
      fetchComments={() => getProductComments({ productId })}
      createComment={(content) => createProductComment(productId, content)}
      title="문의하기"
      placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
      emptyImage="/icons/ic-empty-inquiry.svg"
      emptyMessage="아직 문의가 없어요"
      emptySize={196}
      className="pb-2"
    />
  );
}
