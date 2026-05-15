"use client";

import { useEffect, useState, useRef, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import {
  getArticleDetail,
  getArticleComments,
  createArticleComment,
  updateComment,
  deleteComment,
  updateArticle,
  deleteArticle,
} from "../../../lib/articleService";
import { formatRelativeTime } from "../../../lib/formatDate";

function KebabMenu({ onEdit, onDelete }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className="kebab-menu" ref={menuRef}>
      <button
        type="button"
        className="kebab-menu__trigger"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="더보기"
      >
        ⋮
      </button>
      {open && (
        <div className="kebab-menu__dropdown">
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onEdit();
            }}
          >
            수정하기
          </button>
          <button
            type="button"
            className="delete"
            onClick={() => {
              setOpen(false);
              onDelete();
            }}
          >
            삭제하기
          </button>
        </div>
      )}
    </div>
  );
}

export default function ArticleDetailPage({ params }) {
  const { articleId } = use(params);
  const router = useRouter();

  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [commentText, setCommentText] = useState("");
  const [nickname, setNickname] = useState("익명");
  const [error, setError] = useState(null);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingCommentText, setEditingCommentText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const COMMENTS_PER_PAGE = 3;

  const handleEditClick = () => {
    router.push(`/forum/${articleId}/edit`);
  };

  const loadArticle = async (withComments = false) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getArticleDetail(articleId);
      if (data) {
        setArticle(data);
        if (withComments) {
          setComments(data.comments || []);
        }
      }
    } catch (err) {
      console.error(err);
      setError("게시글을 불러오는 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const loadComments = async () => {
    try {
      const commentData = await getArticleComments(articleId);
      setComments(commentData.list || []);
    } catch (err) {
      console.error("댓글을 갱신하는 중 오류가 발생했습니다.", err);
    }
  };

  useEffect(() => {
    if (articleId) {
      loadArticle(true);
      loadComments();
    }
  }, [articleId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!commentText.trim()) return;

    try {
      await createArticleComment(articleId, {
        nickname: nickname || "익명",
        content: commentText.trim(),
      });
      setCommentText("");
      setNickname("익명");
      setCurrentPage(1);
      await loadComments();
      await loadArticle();
    } catch (err) {
      setError("댓글 등록에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleToggleEdit = () => {
    if (isEditMode) {
      setIsEditMode(false);
      setEditTitle(article?.title || "");
      setEditContent(article?.content || "");
    } else {
      setIsEditMode(true);
    }
  };

  const handleSaveArticle = async (event) => {
    event.preventDefault();
    if (!editTitle.trim() || !editContent.trim()) {
      setError("제목과 내용을 모두 입력해주세요.");
      return;
    }

    try {
      await updateArticle(articleId, {
        title: editTitle.trim(),
        content: editContent.trim(),
      });
      setIsEditMode(false);
      await loadArticle();
      setError(null);
    } catch (err) {
      setError("게시글 수정에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleDeleteArticle = async () => {
    if (!window.confirm("정말 이 게시글을 삭제하시겠습니까?")) return;
    try {
      await deleteArticle(articleId);
      router.push("/forum");
    } catch (err) {
      setError("게시글 삭제에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleStartEditComment = (comment) => {
    setEditingCommentId(comment.id);
    setEditingCommentText(comment.content || "");
  };

  const handleCancelEditComment = () => {
    setEditingCommentId(null);
    setEditingCommentText("");
  };

  const handleSaveComment = async (commentId) => {
    if (!editingCommentText.trim()) {
      setError("댓글 내용을 입력해주세요.");
      return;
    }

    try {
      await updateComment(commentId, { content: editingCommentText.trim() });
      setEditingCommentId(null);
      setEditingCommentText("");
      await loadComments();
      await loadArticle();
    } catch (err) {
      setError("댓글 수정에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleDeleteComment = async (commentId) => {
    if (!window.confirm("정말 이 댓글을 삭제하시겠습니까?")) return;
    try {
      await deleteComment(commentId);
      await loadComments();
      await loadArticle();
    } catch (err) {
      setError("댓글 삭제에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <>
      <Header />
      <main className="page-content forum-detail-page">
        <div className="forum-detail__container">
          {isLoading && <p>게시글을 불러오는 중입니다...</p>}
          {error && <p className="error-message">{error}</p>}

          {article && (
            <article className="forum-detail">
              <header className="forum-detail__header">
                <div className="forum-detail__title-row">
                  <h1>{article.title}</h1>
                  <KebabMenu
                    onEdit={handleEditClick}
                    onDelete={handleDeleteArticle}
                  />
                </div>

                <div className="forum-detail__meta">
                  <div className="author">
                    <div className="author-avatar">
                      <img src="/images/user_icon.png" alt="avatar" />
                    </div>

                    <span className="author-name">
                      {article.nickname || "총명한판다"}
                    </span>
                  </div>

                  <span className="date">
                    {new Date(article.createdAt)
                      .toLocaleDateString("ko-KR")
                      .replace(/\.$/, "")}{" "}
                  </span>

                  <span className="divider" />

                  <span className="likes">
                    <span className="heart-icon">♡</span>{" "}
                    {article.likeCount ?? 0}
                  </span>

                  <span className="divider" />

                  <span className="comments-count">
                    댓글 {comments.length}개
                  </span>
                </div>
              </header>

              <div className="forum-detail__content">
                {article.image && (
                  <div className="forum-detail__image-wrap">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="forum-detail__image"
                    />
                  </div>
                )}
                <p>{article.content || "내용이 없습니다."}</p>
              </div>

              {/* 댓글 섹션 영역 */}
              <div className="forum-detail__comments-section">
                <section className="forum-detail__comment-form">
                  <h2>댓글달기</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="comment-form__field">
                      <textarea
                        id="commentText"
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        placeholder="댓글을 입력해주세요."
                        rows={4}
                      />
                    </div>
                    <div className="comment-form__submit-row">
                      <button
                        type="submit"
                        disabled={!commentText.trim()}
                        className={commentText.trim() ? "active" : "disabled"}
                      >
                        등록
                      </button>
                    </div>
                  </form>
                </section>

                <hr className="comment-divider" />

                <section className="forum-detail__comments-list">
                  {comments.length === 0 ? (
                    <div className="forum-detail__empty-block">
                      <div className="empty-comments">
                        <img
                          src="/images/Img_reply_empty.png"
                          alt="댓글 없음"
                        />
                        <p>
                          아직 댓글이 없어요,
                          <br />
                          지금 댓글을 달아보세요!
                        </p>
                      </div>
                      <div className="forum-detail__back-button-wrap">
                        <Link
                          href="/forum"
                          className="forum-detail__back-button"
                        >
                          목록으로 돌아가기 ↩
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <>
                      <ul>
                        {comments
                          .slice(
                            (currentPage - 1) * COMMENTS_PER_PAGE,
                            currentPage * COMMENTS_PER_PAGE,
                          )
                          .map((comment) => (
                            <li key={comment.id} className="comment-item">
                              {editingCommentId === comment.id ? (
                                <div className="comment-edit-box">
                                  <textarea
                                    value={editingCommentText}
                                    onChange={(e) =>
                                      setEditingCommentText(e.target.value)
                                    }
                                    rows={3}
                                  />
                                  <div className="comment-edit-actions">
                                    <button
                                      type="button"
                                      disabled={!editingCommentText.trim()}
                                      className={
                                        editingCommentText.trim()
                                          ? "active"
                                          : "disabled"
                                      }
                                      onClick={() =>
                                        handleSaveComment(comment.id)
                                      }
                                    >
                                      저장
                                    </button>
                                    <button
                                      type="button"
                                      onClick={handleCancelEditComment}
                                    >
                                      취소
                                    </button>
                                  </div>
                                </div>
                              ) : (
                                <>
                                  <div className="comment-item__header">
                                    <p className="comment-item__content">
                                      {comment.content}
                                    </p>
                                    <KebabMenu
                                      onEdit={() =>
                                        handleStartEditComment(comment)
                                      }
                                      onDelete={() =>
                                        handleDeleteComment(comment.id)
                                      }
                                    />
                                  </div>
                                  <div className="comment-item__author">
                                    <div className="comment-item__avatar">
                                      <img
                                        src="/images/user_icon.png"
                                        alt="avatar"
                                      />
                                    </div>
                                    <div>
                                      <p className="comment-item__name">
                                        {comment.nickname || "익명"}
                                      </p>
                                      <p className="comment-item__time">
                                        {formatRelativeTime(comment.createdAt)}
                                      </p>
                                    </div>
                                  </div>
                                </>
                              )}
                            </li>
                          ))}
                      </ul>

                      {/* 페이지네이션 */}
                      {Math.ceil(comments.length / COMMENTS_PER_PAGE) > 1 && (
                        <div className="pagination">
                          <button
                            type="button"
                            className="pagination__arrow"
                            onClick={() =>
                              setCurrentPage((p) => Math.max(1, p - 1))
                            }
                            disabled={currentPage === 1}
                            aria-label="이전 페이지"
                          >
                            &#8249;
                          </button>
                          {Array.from(
                            {
                              length: Math.ceil(
                                comments.length / COMMENTS_PER_PAGE,
                              ),
                            },
                            (_, i) => i + 1,
                          ).map((page) => (
                            <button
                              key={page}
                              type="button"
                              className={currentPage === page ? "active" : ""}
                              onClick={() => setCurrentPage(page)}
                            >
                              {page}
                            </button>
                          ))}
                          <button
                            type="button"
                            className="pagination__arrow"
                            onClick={() =>
                              setCurrentPage((p) =>
                                Math.min(
                                  Math.ceil(
                                    comments.length / COMMENTS_PER_PAGE,
                                  ),
                                  p + 1,
                                ),
                              )
                            }
                            disabled={
                              currentPage ===
                              Math.ceil(comments.length / COMMENTS_PER_PAGE)
                            }
                            aria-label="다음 페이지"
                          >
                            &#8250;
                          </button>
                        </div>
                      )}

                      <div className="forum-detail__back-button-wrap">
                        <Link
                          href="/forum"
                          className="forum-detail__back-button"
                        >
                          목록으로 돌아가기 ↩
                        </Link>
                      </div>
                    </>
                  )}
                </section>
              </div>
            </article>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
