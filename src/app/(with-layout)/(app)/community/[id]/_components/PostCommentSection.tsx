import { articleQueryKeys } from "@/common/constants/queryKeys";
import { getArticleComments } from "@/features/article/api";
import { CommentSectionClient } from "@/features/comment/components/CommentSectionClient";

type CommentSectionProps = {
  articleId: number;
};

export async function PostCommentSection({ articleId }: CommentSectionProps) {
  const { data: initialComments } = await getArticleComments({ articleId });
  const queryKey = articleQueryKeys.comments(articleId);

  return (
    <CommentSectionClient
      type="article"
      id={articleId}
      queryKey={queryKey}
      initialComments={initialComments}
    />
  );
}
