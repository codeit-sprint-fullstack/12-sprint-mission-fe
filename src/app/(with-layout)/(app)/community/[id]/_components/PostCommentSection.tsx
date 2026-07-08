import {
  createArticleComment,
  getArticleComments,
} from "@/features/article/api";
import { CommentSectionClient } from "@/features/comment/components/CommentSectionClient";

type CommentSectionProps = {
  articleId: number;
};

export async function PostCommentSection({ articleId }: CommentSectionProps) {
  const { data: initialComments } = await getArticleComments({ articleId });
  const queryKey = ["articleComments", articleId] as const;

  return (
    <CommentSectionClient
      queryKey={queryKey}
      initialComments={initialComments}
      fetchComments={() => getArticleComments({ articleId })}
      createComment={(content) => createArticleComment(articleId, content)}
      title="댓글달기"
      placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
      emptyImage="/icons/ic-empty-comment.svg"
      emptyMessage={
        <>
          아직 문의가 없어요,
          <br /> 지금 문의를 남겨보세요!
        </>
      }
      emptySize={140}
      className="pb-4"
    />
  );
}
