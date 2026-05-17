"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { getArticle, patchArticle } from "@/lib/ArticleService";

export default function EditArticlePage() {
  const { id } = useParams();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValid = title.trim().length > 0 && content.trim().length > 0;

  useEffect(() => {
    async function loadArticle() {
      try {
        const data = await getArticle(id);
        setTitle(data.title || "");
        setContent(data.content || "");
      } catch (error) {
        console.error(error);
        alert("게시글을 불러오지 못했습니다.");
        router.push("/community");
      } finally {
        setLoading(false);
      }
    }

    if (id) loadArticle();
  }, [id, router]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!isValid || isSubmitting) return;

    try {
      setIsSubmitting(true);

      await patchArticle(id, {
        title: title.trim(),
        content: content.trim(),
        image: null,
      });

      router.push(`/community/${id}`);
    } catch (error) {
      console.error(error);
      alert("게시글 수정에 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
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

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="mx-auto w-full max-w-[1200px] flex-1 pt-[32px] pb-[80px]">
        <form onSubmit={handleSubmit}>
          <div className="mb-[24px] flex items-center justify-between">
            <h1 className="text-[20px] font-bold leading-[28px] text-[#111827]">
              게시글 수정하기
            </h1>

            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="flex h-[42px] w-[74px] items-center justify-center rounded-[8px] bg-[#3692FF] text-[14px] font-semibold text-white disabled:bg-[#9CA3AF]"
            >
              {isSubmitting ? "수정 중" : "수정"}
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
        </form>
      </main>

      <Footer />
    </div>
  );
}
