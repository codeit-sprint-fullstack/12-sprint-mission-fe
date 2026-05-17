"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { createArticle } from "@/lib/ArticleService";

export default function NewArticlePage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const isValid = title.trim().length > 0 && content.trim().length > 0;

  async function handleSubmit(e) {
    e.preventDefault();

    if (!isValid || isSubmitting) return;

    try {
      setIsSubmitting(true);
      setSubmitError("");

      const createdArticle = await createArticle({
        title: title.trim(),
        content: content.trim(),
        image: null,
      });

      router.push(`/community/${createdArticle.id}`);
    } catch (error) {
      console.error(error);
      setSubmitError("게시글 등록에 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="mx-auto w-full max-w-[1200px] flex-1 pt-[32px] pb-[80px]">
        <form onSubmit={handleSubmit}>
          <div className="mb-[24px] flex items-center justify-between">
            <h1 className="text-[20px] font-bold leading-[28px] text-[#111827]">
              게시글 쓰기
            </h1>

            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="flex h-[42px] w-[74px] items-center justify-center rounded-[8px] bg-[#3692FF] text-[14px] font-semibold text-white disabled:bg-[#9CA3AF]"
            >
              {isSubmitting ? "등록 중" : "등록"}
            </button>
          </div>

          <div className="mb-[24px]">
            <label
              htmlFor="title"
              className="mb-[12px] block text-[16px] font-bold leading-[24px] text-[#111827]"
            >
              *제목
            </label>

            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력해주세요"
              className="h-[56px] w-full rounded-[12px] bg-[#F3F4F6] px-[24px] text-[16px] text-[#111827] outline-none placeholder:text-[#9CA3AF]"
            />
          </div>

          <div>
            <label
              htmlFor="content"
              className="mb-[12px] block text-[16px] font-bold leading-[24px] text-[#111827]"
            >
              *내용
            </label>

            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용을 입력해주세요"
              className="h-[282px] w-full resize-none rounded-[12px] bg-[#F3F4F6] p-[16px_24px] text-[16px] leading-[24px] text-[#111827] outline-none placeholder:text-[#9CA3AF]"
            />
          </div>

          {submitError && (
            <p className="mt-[12px] text-[14px] text-red-500">{submitError}</p>
          )}
        </form>
      </main>

      <Footer />
    </div>
  );
}
