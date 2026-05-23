"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {
  createArticleComment,
  deleteArticle,
  deleteArticleComment,
  getArticle,
  getArticleComments,
  patchArticleComment,
} from "@/lib/ArticleService";

export default function ArticleDetailPage() {
  const { id } = useParams();
  const router = useRouter();

  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingContent, setEditingContent] = useState("");

  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const [openCommentMenuId, setOpenCommentMenuId] = useState(null);

  const isCommentValid = comment.trim().length > 0;

  async function fetchArticleDetail() {
    const articleData = await getArticle(id);
    const commentData = await getArticleComments(id);

    setArticle(articleData);
    setComments(commentData.list || []);
  }

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        await fetchArticleDetail();
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    if (id) load();
  }, [id]);

  async function handleDeleteArticle() {
    const ok = confirm("게시글을 삭제하시겠습니까?");
    if (!ok) return;

    await deleteArticle(id);
    router.push("/community");
  }

  async function handleCreateComment() {
    if (!isCommentValid) return;

    await createArticleComment(id, comment);
    setComment("");
    await fetchArticleDetail();
  }

  async function handleUpdateComment(commentId) {
    if (!editingContent.trim()) return;

    await patchArticleComment(commentId, editingContent);
    setEditingCommentId(null);
    setEditingContent("");
    await fetchArticleDetail();
  }

  async function handleDeleteComment(commentId) {
    const ok = confirm("댓글을 삭제하시겠습니까?");
    if (!ok) return;

    await deleteArticleComment(commentId);
    await fetchArticleDetail();
  }

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col bg-white">
        <Header />
        <main className="flex-1 py-[80px] text-center text-[14px] text-[#9CA3AF]">
          게시글을 불러오는 중...
        </main>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="flex min-h-screen flex-col bg-white">
        <Header />
        <main className="flex-1 py-[80px] text-center text-[14px] text-[#9CA3AF]">
          게시글이 없습니다.
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="mx-auto w-full max-w-[1200px] flex-1 pt-[32px] pb-[80px]">
        {/* 게시글 상단 */}
        <section className="relative border-b border-[#E5E7EB] pb-[24px]">
          <div className="flex items-start justify-between gap-[24px]">
            <div className="min-w-0">
              <h1 className="text-[18px] font-bold leading-[26px] text-[#111827]">
                {article.title}
              </h1>

              <div className="mt-[12px] flex items-center gap-[12px] text-[12px] text-[#9CA3AF]">
                <span className="flex items-center gap-[6px]">
                  <img
                    src="/images/icons/pr-medium.svg"
                    alt=""
                    className="h-[24px] w-[24px]"
                  />
                  좋은판다
                </span>

                <span>2024. 01. 02</span>

                <span className="flex h-[32px] items-center gap-[6px] rounded-[35px] border border-[#E5E7EB] px-[12px] text-[#6B7280]">
                  <img
                    src="/images/icons/fv-inactive.png"
                    alt=""
                    className="h-[16px] w-[16px]"
                  />
                  {article.likeCount || 123}
                </span>
              </div>
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={() => setMenuOpen((prev) => !prev)}
                className="flex h-[24px] w-[24px] items-center justify-center text-[#9CA3AF]"
              >
                ⋮
              </button>

              {menuOpen && (
                <div className="absolute right-0 top-[28px] z-10 flex h-[92px] w-[139px] flex-col rounded-[8px] border border-[#E5E7EB] bg-white shadow-sm">
                  <Link
                    href={`/community/${id}/edit`}
                    className="flex flex-1 items-center justify-center text-[14px] text-[#6B7280]"
                  >
                    수정하기
                  </Link>

                  <button
                    type="button"
                    onClick={handleDeleteArticle}
                    className="flex flex-1 items-center justify-center text-[14px] text-[#6B7280]"
                  >
                    삭제하기
                  </button>
                </div>
              )}
            </div>
          </div>

          <p className="mt-[32px] whitespace-pre-line text-[14px] font-normal leading-[24px] text-[#111827]">
            {article.content}
          </p>
        </section>

        {/* 댓글 입력 */}
        <section className="mt-[24px]">
          <h2 className="mb-[12px] text-[14px] font-bold text-[#111827]">
            댓글달기
          </h2>

          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="댓글을 입력해주세요."
            className="h-[104px] w-full resize-none rounded-[12px] bg-[#F3F4F6] p-[16px_24px] text-[14px] leading-[24px] text-[#111827] outline-none placeholder:text-[#9CA3AF]"
          />

          <div className="mt-[12px] flex justify-end">
            <button
              type="button"
              disabled={!isCommentValid}
              onClick={handleCreateComment}
              className="flex h-[42px] w-[74px] items-center justify-center rounded-[8px] bg-[#3692FF] text-[14px] font-semibold text-white disabled:bg-[#9CA3AF]"
            >
              등록
            </button>
          </div>
        </section>

        {/* 댓글 리스트 */}
        <section className="mt-[24px]">
          {comments.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-[72px] text-center text-[14px] leading-[24px] text-[#9CA3AF]">
              <div className="mb-[12px] flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#F3F4F6]">
                💬
              </div>
              아직 댓글이 없어요.
              <br />
              지금 댓글을 달아보세요!
            </div>
          ) : (
            comments.map((item) => (
              <article
                key={item.id}
                className="relative flex min-h-[88px] w-full border-b border-[#E5E7EB] py-[12px]"
              >
                <div className="flex-1">
                  {editingCommentId === item.id ? (
                    <div>
                      <textarea
                        value={editingContent}
                        onChange={(e) => setEditingContent(e.target.value)}
                        className="h-[80px] w-full resize-none rounded-[12px] bg-[#F3F4F6] p-[12px_16px] text-[14px] outline-none"
                      />

                      <div className="mt-[8px] flex justify-end gap-[12px]">
                        <button
                          type="button"
                          onClick={() => {
                            setEditingCommentId(null);
                            setEditingContent("");
                          }}
                          className="text-[13px] text-[#6B7280]"
                        >
                          취소
                        </button>

                        <button
                          type="button"
                          onClick={() => handleUpdateComment(item.id)}
                          className="text-[13px] font-semibold text-[#3692FF]"
                        >
                          저장
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="text-[14px] font-normal leading-[24px] text-[#111827]">
                        {item.content}
                      </p>

                      <div className="mt-[12px] flex items-center gap-[8px] text-[12px] text-[#9CA3AF]">
                        <img
                          src="/images/icons/pr-medium.svg"
                          alt=""
                          className="h-[24px] w-[24px]"
                        />
                        <span>좋은판다</span>
                        <span>1시간 전</span>
                      </div>
                    </>
                  )}
                </div>

                {editingCommentId !== item.id && (
                  <div className="relative ml-[24px]">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenCommentMenuId((prev) =>
                          prev === item.id ? null : item.id,
                        )
                      }
                      className="flex h-[24px] w-[24px] items-center justify-center text-[#9CA3AF]"
                    >
                      ⋮
                    </button>

                    {openCommentMenuId === item.id && (
                      <div className="absolute right-0 top-[28px] z-10 flex h-[92px] w-[139px] flex-col rounded-[8px] border border-[#E5E7EB] bg-white shadow-sm">
                        <button
                          type="button"
                          onClick={() => {
                            setEditingCommentId(item.id);
                            setEditingContent(item.content);
                            setOpenCommentMenuId(null);
                          }}
                          className="flex flex-1 items-center justify-center text-[14px] text-[#6B7280]"
                        >
                          수정하기
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setOpenCommentMenuId(null);
                            handleDeleteComment(item.id);
                          }}
                          className="flex flex-1 items-center justify-center text-[14px] text-[#6B7280]"
                        >
                          삭제하기
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </article>
            ))
          )}
        </section>

        {/* 목록 버튼 */}
        <div className="mt-[40px] flex justify-center">
          <Link
            href="/community"
            className="flex h-[48px] w-[240px] items-center justify-center gap-[8px] rounded-[40px] bg-[#3692FF] text-[14px] font-semibold text-white"
          >
            목록으로 돌아가기
            <span>↩</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
