import { CommentSectionClient } from "@/app/(with-layout)/(app)/community/[id]/_components/CommentSectionClient";
import { getArticleComments } from "@/features/article/api";

type CommentSectionProps = {
  articleId: number;
};

export async function CommentSection({ articleId }: CommentSectionProps) {
  const { data: initialComments } = await getArticleComments({ articleId });

  return (
    <CommentSectionClient
      articleId={articleId}
      initialComments={initialComments}
    />
  );
}
