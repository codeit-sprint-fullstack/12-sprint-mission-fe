import { productQueryKeys } from "@/common/constants/queryKeys";
import { CommentSectionClient } from "@/features/comment/components/CommentSectionClient";
import { getProductComments } from "@/features/product/api";

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
      type="product"
      id={productId}
      queryKey={queryKey}
      initialComments={initialComments}
    />
  );
}
