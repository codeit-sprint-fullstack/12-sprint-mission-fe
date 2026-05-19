"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  createComment,
  deleteArticle,
  deleteComment,
  getArticle,
  getCommentList,
  patchComment,
} from "../../api/boardService";
import { BoardShell } from "./Layout";

const DISPLAY_NAME = "총명한판다";

function normalizeList(data) {
  if (Array.isArray(data)) return data;
  return data?.list || data?.comments || data?.data || [];
}

function formatDate(value) {
  if (!value) return "2024. 01. 02";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "2024. 01. 02";
  return date
    .toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\.$/, "");
}

function CommentItem({ articleId, comment, onChanged }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(comment.content || "");
  const commentId = comment.id || comment._id;

  async function handleUpdate() {
    if (!content.trim()) return;
    await patchComment(articleId, commentId, { content: content.trim() });
    setIsEditing(false);
    setIsOpen(false);
    onChanged();
  }

  async function handleDelete() {
    await deleteComment(articleId, commentId);
    setIsOpen(false);
    onChanged();
  }

  return (
    <article className="comment-item">
      <button
        type="button"
        className="more-button"
        onClick={() => setIsOpen((value) => !value)}
        aria-label="댓글 메뉴 열기"
      >
        ⋮
      </button>
      {isOpen ? (
        <div className="action-menu">
          <button type="button" onClick={() => setIsEditing(true)}>
            수정하기
          </button>
          <button type="button" onClick={handleDelete}>
            삭제하기
          </button>
        </div>
      ) : null}

      {isEditing ? (
        <div className="comment-edit">
          <textarea value={content} onChange={(event) => setContent(event.target.value)} />
          <button type="button" className="primary-button" onClick={handleUpdate}>
            등록
          </button>
        </div>
      ) : (
        <>
          <p className="comment-content">{comment.content || "혹시 사용기간이 어떻게 되실까요?"}</p>
          <div className="comment-meta">
            <span className="avatar" aria-hidden="true" />
            <div>
              <strong>똑똑한판다</strong>
              <span>1시간 전</span>
            </div>
          </div>
        </>
      )}
    </article>
  );
}

export default function ArticleDetailPage({ articleId }) {
  const router = useRouter();
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [error, setError] = useState("");

  async function loadDetail() {
    try {
      const [articleResponse, commentResponse] = await Promise.allSettled([
        getArticle(articleId),
        getCommentList(articleId),
      ]);

      if (articleResponse.status === "fulfilled") {
        setArticle(articleResponse.value);
      } else {
        setError("게시글을 불러오지 못했습니다.");
      }

      if (commentResponse.status === "fulfilled") {
        setComments(normalizeList(commentResponse.value));
      } else {
        setComments([]);
      }
    } catch {
      setError("게시글을 불러오지 못했습니다.");
    }
  }

  useEffect(() => {
    loadDetail();
  }, [articleId]);

  async function handleDeleteArticle() {
    await deleteArticle(articleId);
    router.push("/freeboard");
  }

  async function handleCreateComment(event) {
    event.preventDefault();
    if (!commentInput.trim()) return;

    await createComment(articleId, { content: commentInput.trim() });
    setCommentInput("");
    loadDetail();
  }

  const title =
    article?.title || "맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?";

  return (
    <BoardShell>
      <article className="detail-page">
        {error ? <p className="form-error">{error}</p> : null}

        <header className="detail-header">
          <div>
            <h1>{title}</h1>
            <div className="detail-meta">
              <span className="avatar" aria-hidden="true" />
              <span>{DISPLAY_NAME}</span>
              <span>{formatDate(article?.createdAt)}</span>
              <span className="detail-like">♡ 123</span>
            </div>
          </div>

          <button
            type="button"
            className="more-button"
            onClick={() => setIsMenuOpen((value) => !value)}
            aria-label="게시글 메뉴 열기"
          >
            ⋮
          </button>
          {isMenuOpen ? (
            <div className="action-menu article-menu">
              <Link href={`/freeboard/${articleId}/edit`}>수정하기</Link>
              <button type="button" onClick={handleDeleteArticle}>
                삭제하기
              </button>
            </div>
          ) : null}
        </header>

        <p className="detail-content">{article?.content || "맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?"}</p>

        <form className="comment-form" onSubmit={handleCreateComment}>
          <label>
            <span>댓글달기</span>
            <textarea
              value={commentInput}
              onChange={(event) => setCommentInput(event.target.value)}
              placeholder="댓글을 입력해주세요."
            />
          </label>
          <button type="submit" className="submit-button" disabled={!commentInput.trim()}>
            등록
          </button>
        </form>

        <section className="comments">
          {comments.length === 0 ? (
            <div className="empty-comments">
              <div className="empty-bubbles" aria-hidden="true">
                <span />
                <span />
              </div>
              <p>
                아직 댓글이 없어요,
                <br />
                지금 댓글을 달아보세요!
              </p>
            </div>
          ) : (
            comments.map((comment) => (
              <CommentItem
                key={comment.id || comment._id}
                articleId={articleId}
                comment={comment}
                onChanged={loadDetail}
              />
            ))
          )}
        </section>

        <Link href="/freeboard" className="back-button">
          목록으로 돌아가기 ↩
        </Link>
      </article>
    </BoardShell>
  );
}
