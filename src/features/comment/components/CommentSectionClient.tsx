"use client";

import type { QueryKey } from "@tanstack/react-query";

import type { Comment } from "@/common/types/comment";
import {
  createArticleComment,
  getArticleComments,
} from "@/features/article/api";
import { deleteComment, updateComment } from "@/features/comment/api";
import { CommentForm } from "@/features/comment/components/CommentForm";
import { CommentList } from "@/features/comment/components/CommentList";
import { CommentListSkeleton } from "@/features/comment/components/CommentListSkeleton";
import { useCommentSection } from "@/features/comment/hooks/useCommentSection";
import {
  createProductComment,
  getProductComments,
} from "@/features/product/api";

type CommentSectionClientProps = {
  type: "article" | "product";
  id: number;
  queryKey: QueryKey;
  initialComments: Comment[];
};

const COMMENT_SECTION_CONFIG = {
  article: {
    title: "댓글 달기",
    placeholder:
      "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.",
    emptyImage: "/icons/ic-empty-comment.svg",
    emptyMessage: (
      <>
        아직 댓글이 없어요.
        <br />
        지금 댓글을 남겨보세요!
      </>
    ),
    emptySize: 140,
    className: "pb-4",
  },
  product: {
    title: "문의하기",
    placeholder:
      "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.",
    emptyImage: "/icons/ic-empty-inquiry.svg",
    emptyMessage: "아직 문의가 없어요.",
    emptySize: 196,
    className: "pb-2",
  },
} as const;

export function CommentSectionClient({
  type,
  id,
  queryKey,
  initialComments,
}: CommentSectionClientProps) {
  const config = COMMENT_SECTION_CONFIG[type];

  const fetchComments =
    type === "article"
      ? () => getArticleComments({ articleId: id })
      : () => getProductComments({ productId: id });

  const createComment =
    type === "article"
      ? (content: string) => createArticleComment(id, content)
      : (content: string) => createProductComment(id, content);

  const { comments, isLoading } = useCommentSection({
    queryKey,
    initialComments,
    fetchComments,
  });

  return (
    <>
      <div className="flex flex-col mb-6 md:mb-8 lg:mb-10">
        <h3 className="mb-2 text-lg font-semibold">{config.title}</h3>
        <CommentForm
          createComment={createComment}
          queryKey={queryKey}
          placeholder={config.placeholder}
        />
      </div>

      {isLoading ? (
        <CommentListSkeleton />
      ) : (
        <CommentList
          comments={comments}
          queryKey={queryKey}
          updateComment={updateComment}
          deleteComment={deleteComment}
          emptyImage={config.emptyImage}
          emptyMessage={config.emptyMessage}
          emptySize={config.emptySize}
          className={config.className}
        />
      )}
    </>
  );
}
