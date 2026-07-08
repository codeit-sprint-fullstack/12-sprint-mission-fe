import { CommentSectionClient } from "@/app/(with-layout)/(app)/items/[id]//_components/CommentSectionClient";
import { getProductComments } from "@/features/product/api";

type CommentSectionProps = {
  productId: number;
};

export async function CommentSection({ productId }: CommentSectionProps) {
  const { data: initialComments } = await getProductComments({ productId });

  return (
    <CommentSectionClient
      productId={productId}
      initialComments={initialComments}
    />
  );
}
