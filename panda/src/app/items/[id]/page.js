"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CustomModal from "@/components/common/CustomModal";
import {
  deleteProduct,
  favoriteProduct,
  getProduct,
  unfavoriteProduct,
} from "@/lib/ProductService";
import {
  createProductComment,
  deleteComment,
  getProductComments,
  updateComment,
} from "@/lib/CommentService";

const DEFAULT_IMAGE = "/images/default-product.png";

export default function ItemDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const queryClient = useQueryClient();

  const [comment, setComment] = useState("");
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingContent, setEditingContent] = useState("");
  const [deleteTarget, setDeleteTarget] = useState(null);

  const productQuery = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
    enabled: Boolean(id),
  });

  const commentsQuery = useQuery({
    queryKey: ["productComments", id],
    queryFn: () => getProductComments(id),
    enabled: Boolean(id),
  });

  const product = productQuery.data;
  const comments = commentsQuery.data?.list || [];

  const isFavorite =
    product?.isFavorite ?? product?.isLiked ?? product?.favorite ?? false;

  const favoriteCount = product?.favoriteCount ?? product?.likeCount ?? 0;

  const deleteProductMutation = useMutation({
    mutationFn: () => deleteProduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      router.push("/items");
    },
  });

  const favoriteMutation = useMutation({
    mutationFn: () =>
      isFavorite ? unfavoriteProduct(id) : favoriteProduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product", id] });
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const createCommentMutation = useMutation({
    mutationFn: () => createProductComment(id, comment.trim()),
    onSuccess: () => {
      setComment("");
      queryClient.invalidateQueries({ queryKey: ["productComments", id] });
    },
  });

  const updateCommentMutation = useMutation({
    mutationFn: ({ commentId, content }) => updateComment(commentId, content),
    onSuccess: () => {
      setEditingCommentId(null);
      setEditingContent("");
      queryClient.invalidateQueries({ queryKey: ["productComments", id] });
    },
  });

  const deleteCommentMutation = useMutation({
    mutationFn: (commentId) => deleteComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["productComments", id] });
    },
  });

  const handleDeleteProduct = () => {
    setDeleteTarget({ type: "product" });
  };

  const handleConfirmDelete = () => {
    if (deleteTarget?.type === "product") {
      deleteProductMutation.mutate();
    }

    if (deleteTarget?.type === "comment") {
      deleteCommentMutation.mutate(deleteTarget.commentId);
    }

    setDeleteTarget(null);
  };

  const handleFavoriteClick = () => {
    favoriteMutation.mutate();
  };

  const handleCreateComment = () => {
    if (!comment.trim()) return;
    createCommentMutation.mutate();
  };

  if (productQuery.isLoading) {
    return (
      <div className="flex min-h-screen flex-col bg-white">
        <Header />
        <main className="flex-1 py-[80px] text-center text-[#9CA3AF]">
          상품을 불러오는 중...
        </main>
        <Footer />
      </div>
    );
  }

  if (productQuery.error || !product) {
    return (
      <div className="flex min-h-screen flex-col bg-white">
        <Header />
        <main className="flex-1 py-[80px] text-center text-red-500">
          상품을 불러오지 못했습니다.
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="mx-auto w-full max-w-[1200px] flex-1 px-6 py-[40px]">
        <section className="grid gap-10 md:grid-cols-[486px_1fr]">
          <div className="aspect-square overflow-hidden rounded-[16px] bg-[#F3F4F6]">
            <img
              src={product.images?.[0] || product.image || DEFAULT_IMAGE}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <div className="border-b border-[#E5E7EB] pb-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h1 className="text-[24px] font-bold text-[#111827]">
                    {product.name}
                  </h1>

                  <p className="mt-4 text-[32px] font-bold text-[#111827]">
                    {Number(product.price || 0).toLocaleString()}원
                  </p>
                </div>

                <div className="flex gap-2">
                  <Link
                    href={`/registration?id=${id}`}
                    className="rounded-[8px] border border-[#E5E7EB] px-4 py-2 text-[14px]"
                  >
                    수정
                  </Link>

                  <button
                    type="button"
                    onClick={handleDeleteProduct}
                    className="rounded-[8px] border border-[#E5E7EB] px-4 py-2 text-[14px]"
                  >
                    삭제
                  </button>
                </div>
              </div>
            </div>

            <div className="border-b border-[#E5E7EB] py-6">
              <h2 className="mb-3 text-[16px] font-bold">상품 소개</h2>
              <p className="whitespace-pre-line text-[16px] leading-[26px] text-[#374151]">
                {product.description}
              </p>
            </div>

            <div className="border-b border-[#E5E7EB] py-6">
              <h2 className="mb-3 text-[16px] font-bold">상품 태그</h2>

              <div className="flex flex-wrap gap-2">
                {(product.tags || []).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#F3F4F6] px-3 py-2 text-[14px] text-[#374151]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={handleFavoriteClick}
              disabled={favoriteMutation.isPending}
              className="mt-6 flex h-[48px] w-full items-center justify-center gap-2 rounded-[40px] border border-[#E5E7EB] text-[16px] font-semibold disabled:opacity-60"
            >
              <img
                src={
                  isFavorite
                    ? "/images/icons/fv-active.png"
                    : "/images/icons/fv-inactive.png"
                }
                alt=""
                className="h-5 w-5"
              />
              {favoriteCount}
            </button>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="mb-3 text-[16px] font-bold">문의하기</h2>

          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="댓글을 입력해주세요."
            className="h-[104px] w-full resize-none rounded-[12px] bg-[#F3F4F6] p-4 outline-none"
          />

          <div className="mt-3 flex justify-end">
            <button
              type="button"
              onClick={handleCreateComment}
              disabled={!comment.trim() || createCommentMutation.isPending}
              className="h-[42px] w-[74px] rounded-[8px] bg-[#3692FF] text-white disabled:bg-[#9CA3AF]"
            >
              등록
            </button>
          </div>
        </section>

        <section className="mt-8">
          {commentsQuery.isLoading && (
            <p className="py-10 text-center text-[#9CA3AF]">
              댓글을 불러오는 중...
            </p>
          )}

          {!commentsQuery.isLoading && comments.length === 0 && (
            <p className="py-10 text-center text-[#9CA3AF]">
              아직 댓글이 없습니다.
            </p>
          )}

          {comments.map((item) => (
            <article key={item.id} className="border-b border-[#E5E7EB] py-5">
              {editingCommentId === item.id ? (
                <>
                  <textarea
                    value={editingContent}
                    onChange={(e) => setEditingContent(e.target.value)}
                    className="h-[80px] w-full resize-none rounded-[12px] bg-[#F3F4F6] p-4 outline-none"
                  />

                  <div className="mt-2 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setEditingCommentId(null);
                        setEditingContent("");
                      }}
                      className="text-[14px] text-[#6B7280]"
                    >
                      취소
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        updateCommentMutation.mutate({
                          commentId: item.id,
                          content: editingContent,
                        })
                      }
                      className="text-[14px] font-semibold text-[#3692FF]"
                    >
                      저장
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-[15px] leading-[24px] text-[#111827]">
                    {item.content}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-[13px] text-[#9CA3AF]">
                      {item.writer?.nickname ||
                        item.user?.nickname ||
                        "좋은판다"}
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          setEditingCommentId(item.id);
                          setEditingContent(item.content);
                        }}
                        className="text-[13px] text-[#6B7280]"
                      >
                        수정
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setDeleteTarget({
                            type: "comment",
                            commentId: item.id,
                          });
                        }}
                        className="text-[13px] text-[#6B7280]"
                      >
                        삭제
                      </button>
                    </div>
                  </div>
                </>
              )}
            </article>
          ))}
        </section>

        <div className="mt-10 flex justify-center">
          <Link
            href="/items"
            className="flex h-[48px] w-[240px] items-center justify-center rounded-[40px] bg-[#3692FF] font-semibold text-white"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </main>

      <CustomModal
        isOpen={Boolean(deleteTarget)}
        message={
          deleteTarget?.type === "product"
            ? "상품을 삭제하시겠습니까?"
            : "댓글을 삭제하시겠습니까?"
        }
        showCancel
        cancelText="취소"
        confirmText="확인"
        onCancel={() => setDeleteTarget(null)}
        onConfirm={handleConfirmDelete}
      />

      <Footer />
    </div>
  );
}
