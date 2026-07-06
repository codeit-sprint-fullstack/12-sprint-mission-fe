import { getProductComments } from "@/lib/api/products.api";

import CommentSectionClient from "./CommentSectionClient";

type CommentSectionProps = {
  productId: number;
};

export default async function CommentSection({
  productId,
}: CommentSectionProps) {
  const { data: initialComments } = await getProductComments({ productId });

  return (
    <CommentSectionClient
      productId={productId}
      initialComments={initialComments}
    />
  );
}
