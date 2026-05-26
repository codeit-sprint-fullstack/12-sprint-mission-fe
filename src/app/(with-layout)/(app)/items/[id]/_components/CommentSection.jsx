import { getProductComments } from "@/lib/api/products";
import CommentSectionClient from "./CommentSectionClient";

export default async function CommentSection({ productId }) {
  const { data: initialComments } = await getProductComments({ productId });

  return (
    <CommentSectionClient
      productId={productId}
      initialComments={initialComments}
    />
  );
}
