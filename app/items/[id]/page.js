"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Modal from "../../../components/Modal";
import { api } from "../../../lib/axios";
import { formatRelativeTime } from "../../../lib/formatDate";
import "../../../styles/itemdetail.css";
export default function ItemDetailPage({ params }) {
  const { id } = use(params);
  const router = useRouter();
  const queryClient = useQueryClient();

  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [openCommentMenuId, setOpenCommentMenuId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("인가된 사용자만 이용할 수 있습니다. 로그인 페이지로 이동합니다.");
      router.push("/signIn");
    }
  }, [router]);

  const {
    data: product,
    isLoading: isProductLoading,
    error: productError,
  } = useQuery({
    queryKey: ["productDetail", id],
    queryFn: async () => {
      const res = await api.get(`/products/${id}`);
      return res.data;
    },
    enabled: !!id,
    retry: false,
  });

  const { data: commentData, isLoading: isCommentsLoading } = useQuery({
    queryKey: ["productComments", id],
    queryFn: async () => {
      const res = await api.get(`/products/${id}/comments`, {
        params: { limit: 20 },
      });
      return res.data;
    },
    enabled: !!id,
  });

  const {
    register: registerComment,
    handleSubmit: handleCommentSubmit,
    reset: resetCommentForm,
    watch: watchComment,
  } = useForm();
  const {
    register: registerEdit,
    handleSubmit: handleEditSubmit,
    setValue: setEditValue,
  } = useForm();

  const commentContent = watchComment("content", "");

  const deleteProductMutation = useMutation({
    mutationFn: async () => {
      await api.delete(`/products/${id}`);
    },
    onSuccess: () => {
      setDeleteModalOpen(false);
      router.push("/items");
    },
    onError: (err) => {
      alert(err.response?.data?.message || "상품 삭제에 실패했습니다.");
    },
  });

  const toggleFavoriteMutation = useMutation({
    mutationFn: async () => {
      if (product?.isFavorite) {
        await api.delete(`/products/${id}/favorite`);
      } else {
        await api.post(`/products/${id}/favorite`);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["productDetail", id]);
    },
    onError: (err) => {
      alert(err.response?.data?.message || "좋아요 처리에 실패했습니다.");
    },
  });

  const createCommentMutation = useMutation({
    mutationFn: async (content) => {
      const res = await api.post(`/products/${id}/comments`, { content });
      return res.data;
    },
    onSuccess: () => {
      resetCommentForm();
      queryClient.invalidateQueries(["productComments", id]);
    },
    onError: (err) => {
      alert(err.response?.data?.message || "댓글 등록에 실패했습니다.");
    },
  });

  const updateCommentMutation = useMutation({
    mutationFn: async ({ commentId, content }) => {
      const res = await api.patch(`/comments/${commentId}`, { content });
      return res.data;
    },
    onSuccess: () => {
      setEditingCommentId(null);
      queryClient.invalidateQueries(["productComments", id]);
    },
    onError: (err) => {
      alert(err.response?.data?.message || "댓글 수정에 실패했습니다.");
    },
  });

  const deleteCommentMutation = useMutation({
    mutationFn: async (commentId) => {
      await api.delete(`/comments/${commentId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["productComments", id]);
    },
    onError: (err) => {
      alert(err.response?.data?.message || "댓글 삭제에 실패했습니다.");
    },
  });

  const onCommentSubmit = (data) => {
    if (!data.content.trim()) return;
    createCommentMutation.mutate(data.content);
  };

  const onCommentEditSubmit = (data) => {
    if (!data.editContent.trim()) return;
    updateCommentMutation.mutate({
      commentId: editingCommentId,
      content: data.editContent,
    });
  };

  const handleStartEditComment = (comment) => {
    setEditingCommentId(comment.id);
    setOpenCommentMenuId(null);
    setEditValue("editContent", comment.content);
  };

  const renderRelativeTime = (dateString) => {
    if (!dateString) return "-";
    return formatRelativeTime(dateString);
  };

  const getSafeImageUrl = (images) => {
    const src = images?.[0];
    if (
      !src ||
      typeof src !== "string" ||
      src.includes("via.placeholder.com")
    ) {
      return "/images/mini_logo.png";
    }
    return src;
  };

  if (isProductLoading || isCommentsLoading) {
    return <p className="loading-text">데이터를 불러오는 중입니다...</p>;
  }

  if (productError) {
    return (
      <p className="error-message">
        상품 정보를 불러오는 중 오류가 발생했습니다.
      </p>
    );
  }

  return (
    <>
      <Header />
      <main className="page-content item-detail-page">
        <div className="item-detail__container">
          {product && (
            <>
              <section className="item-detail">
                <div className="item-detail__media">
                  <Image
                    src={getSafeImageUrl(product.images)}
                    alt={product.name || "상품 이미지"}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div className="item-detail__info">
                  <div className="item-detail__header-row">
                    <h1>{product.name}</h1>
                    <div className="item-detail__menu-container">
                      <button
                        className="item-detail__kebab-btn"
                        onClick={() => setIsProductMenuOpen(!isProductMenuOpen)}
                      >
                        ⋮
                      </button>
                      {isProductMenuOpen && (
                        <div className="item-detail__dropdown">
                          <button
                            onClick={() => router.push(`/items/${id}/edit`)}
                          >
                            수정하기
                          </button>
                          <button
                            onClick={() => {
                              setDeleteModalOpen(true);
                              setIsProductMenuOpen(false);
                            }}
                          >
                            삭제하기
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="item-detail__price">
                    {product.price > 0
                      ? `${product.price.toLocaleString()}원`
                      : "0원"}
                  </p>

                  <div className="item-detail__section-title">상품 소개</div>
                  <p className="item-detail__description">
                    {product.description || "상품 설명이 없습니다."}
                  </p>

                  <div className="item-detail__section-title">상품 태그</div>
                  <div className="item-detail__tags">
                    {product.tags &&
                      product.tags.map((tag, idx) => (
                        <span key={idx} className="item-detail__tag-item">
                          #{tag}
                        </span>
                      ))}
                  </div>

                  <div className="item-detail__footer-row">
                    <div className="item-detail__profile">
                      <div className="item-detail__avatar-wrapper">
                        <Image
                          src="/images/user_icon.png"
                          alt="유저 아이콘"
                          width={24}
                          height={24}
                          className="item-detail__avatar-img"
                        />
                      </div>
                      <div className="item-detail__user-meta">
                        <span className="item-detail__nickname">
                          {product.writer?.nickname || "판매자"}
                        </span>

                        <span className="item-detail__date">
                          {renderRelativeTime(product.createdAt)}
                        </span>
                      </div>
                    </div>

                    <button
                      className={`item-detail__favorite-btn ${product.isFavorite ? "fav-active" : ""}`}
                      onClick={() => toggleFavoriteMutation.mutate()}
                    >
                      <span className="heart-icon">
                        {product.isFavorite ? "❤️" : "🤍"}
                      </span>
                      <span className="count">
                        {product.favoriteCount || 0}
                      </span>
                    </button>
                  </div>
                </div>
              </section>

              <section className="comments-section">
                <h2>문의하기</h2>

                <form
                  onSubmit={handleCommentSubmit(onCommentSubmit)}
                  className="comment-form"
                >
                  <div className="comment-form__input-container">
                    <textarea
                      {...registerComment("content", { required: true })}
                      placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                      className="comment-form__textarea"
                    />
                    <div className="comment-form__submit-wrapper">
                      <button
                        type="submit"
                        className="comment-form__submit-btn"
                        disabled={!commentContent.trim()}
                      >
                        등록
                      </button>
                    </div>
                  </div>
                </form>

                <div className="comments-list">
                  {commentData?.list && commentData.list.length > 0 ? (
                    commentData.list.map((comment) => (
                      <div key={comment.id} className="comment-item">
                        {editingCommentId === comment.id ? (
                          <form
                            onSubmit={handleEditSubmit(onCommentEditSubmit)}
                            className="comment-edit-form"
                          >
                            <textarea
                              {...registerEdit("editContent", {
                                required: true,
                              })}
                              className="comment-edit-form__textarea"
                            />
                            <div className="comment-edit-form__actions">
                              <button
                                type="submit"
                                className="comment-save-btn"
                              >
                                저장
                              </button>
                              <button
                                type="button"
                                className="comment-cancel-btn"
                                onClick={() => setEditingCommentId(null)}
                              >
                                취소
                              </button>
                            </div>
                          </form>
                        ) : (
                          <>
                            <div className="comment-item__content">
                              <p className="comment-item__text">
                                {comment.content}
                              </p>
                              <div className="comment-item__meta">
                                <div className="comment-item__user">
                                  <div className="comment-item__avatar-wrapper">
                                    <Image
                                      src="/images/user_icon.png"
                                      alt="유저 아이콘"
                                      width={20}
                                      height={20}
                                      className="comment-item__avatar-img"
                                    />
                                  </div>
                                  <div className="comment-item__user-meta">
                                    <span className="comment-item__nickname">
                                      {comment.writer?.nickname}
                                    </span>

                                    <span className="comment-item__date">
                                      {renderRelativeTime(comment.createdAt)}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="comment-item__menu-container">
                              <button
                                className="comment-item__kebab-btn"
                                onClick={() =>
                                  setOpenCommentMenuId(
                                    openCommentMenuId === comment.id
                                      ? null
                                      : comment.id,
                                  )
                                }
                              >
                                ⋮
                              </button>
                              {openCommentMenuId === comment.id && (
                                <div className="comment-item__dropdown">
                                  <button
                                    onClick={() =>
                                      handleStartEditComment(comment)
                                    }
                                  >
                                    수정하기
                                  </button>
                                  <button
                                    onClick={() => {
                                      if (confirm("댓글을 삭제하시겠습니까?")) {
                                        deleteCommentMutation.mutate(
                                          comment.id,
                                        );
                                      }
                                      setOpenCommentMenuId(null);
                                    }}
                                  >
                                    삭제하기
                                  </button>
                                </div>
                              )}
                            </div>
                          </>
                        )}
                      </div>
                    ))
                  ) : (
                    <p className="no-comments">아직 등록된 문의가 없습니다.</p>
                  )}
                </div>
              </section>

              <div className="back-to-list__wrapper">
                <Link href="/items" className="back-to-list__btn">
                  목록으로 돌아가기
                </Link>
              </div>
            </>
          )}
        </div>
      </main>

      <Modal
        isOpen={deleteModalOpen}
        message="정말로 이 상품을 삭제하시겠습니까?"
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={() => deleteProductMutation.mutate()}
      />
      <Footer />
    </>
  );
}
