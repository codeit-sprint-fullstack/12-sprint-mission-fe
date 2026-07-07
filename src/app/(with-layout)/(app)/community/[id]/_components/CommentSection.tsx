import { getArticleComments } from "@/features/article/api";

import CommentSectionClient from "./CommentSectionClient";

type CommentSectionProps = {
  articleId: number;
};

export default async function CommentSection({
  articleId,
}: CommentSectionProps) {
  const { data: initialComments } = await getArticleComments({ articleId });

  return (
    <CommentSectionClient
      articleId={articleId}
      initialComments={initialComments}
    />
  );
}
