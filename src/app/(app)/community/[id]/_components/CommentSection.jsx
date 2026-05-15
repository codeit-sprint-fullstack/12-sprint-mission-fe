import { getArticleComments } from "@/lib/api/posts";
import CommentSectionClient from "./CommentSectionClient";

export default async function CommentSection({ postId }) {
  const { data: initialComments } = await getArticleComments({
    articleId: postId,
  });

  return (
    <CommentSectionClient postId={postId} initialComments={initialComments} />
  );
}
