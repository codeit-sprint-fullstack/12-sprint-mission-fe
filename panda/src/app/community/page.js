"use client";

import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import BestArticleCard from "@/components/BestArticleCard/BestArticleCard";
import ArticleListItem from "@/components/ArticleListItem/ArticleListItem";
import useArticles from "@/hooks/useArticles";

export default function CommunityPage() {
  const { articles, loading, error, keyword, setKeyword, orderBy, setOrderBy } =
    useArticles();

  const bestArticles = articles.slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="mx-auto w-full max-w-[1200px] flex-1 px-0 pt-[32px] pb-[80px]">
        <section>
          <h1 className="mb-[20px] text-[18px] font-bold text-[#111827]">
            베스트 게시글
          </h1>

          <div className="grid grid-cols-3 gap-[14px]">
            {bestArticles.map((article) => (
              <BestArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        <section className="mt-[56px]">
          <div className="mb-[20px] flex items-center justify-between">
            <h2 className="text-[18px] font-bold text-[#111827]">게시글</h2>

            <Link
              href="/community/new"
              className="flex h-[40px] w-[74px] items-center justify-center rounded-[8px] bg-[#3692FF] text-[14px] font-semibold text-white"
            >
              글쓰기
            </Link>
          </div>

          <div className="mb-[20px] flex gap-[12px]">
            <div className="relative flex-1">
              <img
                src="/images/icons/ic_search.svg"
                alt=""
                className="absolute left-[16px] top-1/2 h-[18px] w-[18px] -translate-y-1/2"
              />

              <input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="검색할 상품을 입력해주세요"
                className="h-[42px] w-full rounded-[8px] bg-[#F3F4F6] pl-[44px] pr-[16px] text-[13px] outline-none placeholder:text-[#9CA3AF]"
              />
            </div>

            <select
              value={orderBy}
              onChange={(e) => setOrderBy(e.target.value)}
              className="h-[42px] w-[86px] rounded-[8px] border border-[#E5E7EB] bg-white px-[12px] text-[13px] outline-none"
            >
              <option value="recent">최신순</option>
              <option value="like">좋아요순</option>
            </select>
          </div>

          {loading && (
            <div className="py-[80px] text-center text-[13px] text-[#9CA3AF]">
              게시글을 불러오는 중...
            </div>
          )}

          {error && (
            <div className="py-[80px] text-center text-[13px] text-red-500">
              게시글을 불러오지 못했습니다.
            </div>
          )}

          {!loading && !error && articles.length === 0 && (
            <div className="py-[80px] text-center text-[13px] text-[#9CA3AF]">
              게시글이 없습니다.
            </div>
          )}

          {!loading && !error && articles.length > 0 && (
            <div>
              {articles.map((article) => (
                <ArticleListItem key={article.id} article={article} />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
