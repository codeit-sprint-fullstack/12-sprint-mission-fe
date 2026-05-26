import { getArticleComments } from "@/lib/api/posts";
import CommentSectionClient from "./CommentSectionClient";

export default async function CommentSection({ articleId }) {
  const { data: initialComments } = await getArticleComments({ articleId });

  return (
    <CommentSectionClient
      articleId={articleId}
      initialComments={initialComments}
    />
  );
}
