"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getArticleList } from "../../lib/articleService";
import "../../styles/forum-page.css";
export default function ForumPage() {
  const [articles, setArticles] = useState([]);
  const [bestArticles, setBestArticles] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [orderBy, setOrderBy] = useState("recent");

  const loadArticles = async () => {
    setIsLoading(true);
    try {
      const articleList = await getArticleList(1, 20, keyword, orderBy);
      setArticles(articleList.list || articleList);
    } catch (error) {
      console.error("게시글을 불러오는 중 문제가 발생했습니다.", error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadBestArticles = async () => {
    try {
      const best = await getArticleList(1, 3, "", "like");
      setBestArticles(best);
    } catch (error) {
      console.error("베스트 게시글을 불러오는 중 문제가 발생했습니다.", error);
    }
  };

  useEffect(() => {
    loadBestArticles();
  }, []);

  useEffect(() => {
    loadArticles();
  }, [orderBy]);

  const handleSearch = (event) => {
    event.preventDefault();
    loadArticles();
  };

  return (
    <>
      <Header />
      <main className="page-content forum-page">
        {/* 베스트 */}
        <section className="forum-best">
          <h2 className="forum-section-title">베스트 게시글</h2>
          <div className="forum-best__grid">
            {bestArticles.map((article) => (
              <Link
                key={article.id}
                href={`/forum/${article.id}`}
                className="forum-best-card"
              >
                <span className="forum-best-card__badge">
                  <img src="/images/best_mark.png" alt="" />
                  Best
                </span>
                <div className="forum-best-card__body">
                  <p className="forum-best-card__title">{article.title}</p>
                  {article.image && (
                    <div className="forum-best-card__thumb-container">
                      <img
                        src={article.image}
                        alt=""
                        className="forum-best-card__thumb"
                      />
                    </div>
                  )}
                </div>
                <div className="forum-best-card__meta">
                  <span className="forum-best-card__author">
                    <span className="forum-best-card__avatar" />
                    {article.nickname || "총명한판다"}
                  </span>
                  <span className="forum-best-card__likes">
                    ♡{" "}
                    {article.likeCount >= 9999
                      ? "9999+"
                      : (article.likeCount ?? 0)}
                  </span>
                  <span className="forum-best-card__date">
                    {new Date(article.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="forum-list-section">
          <div className="forum-list-section__header">
            <h2 className="forum-section-title">게시글</h2>
            <Link href="/forum/new" className="forum-write-button">
              글쓰기
            </Link>
          </div>

          <div className="forum-toolbar">
            <form className="forum-search" onSubmit={handleSearch}>
              <img
                src="/images/ic_search.svg"
                alt="search"
                className="forum-search__icon"
              />
              <input
                type="text"
                placeholder="검색할 상품을 입력해주세요"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </form>
            <select
              className="forum-sort"
              value={orderBy}
              onChange={(e) => setOrderBy(e.target.value)}
            >
              <option value="recent">최신순</option>
              <option value="like">인기순</option>
            </select>
          </div>

          <div className="forum-article-list">
            {isLoading && (
              <p className="forum-loading">게시글을 불러오는 중입니다...</p>
            )}
            {!isLoading && articles.length === 0 && (
              <p className="forum-empty">
                게시글이 없습니다. 검색어를 바꿔보세요.
              </p>
            )}
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/forum/${article.id}`}
                className="forum-article-item"
              >
                <div className="forum-article-item__main">
                  <p className="forum-article-item__title">{article.title}</p>
                  {article.image && (
                    <div className="forum-article-item__thumb-container">
                      <img
                        src={article.image}
                        alt=""
                        className="forum-article-item__thumb"
                      />
                    </div>
                  )}
                </div>
                <div className="forum-article-item__meta">
                  <span className="forum-article-item__avatar">
                    <img src="/images/user_icon.png" alt="avatar" />
                  </span>
                  <span className="forum-article-item__author">
                    {article.nickname || "총명한 판다"}
                  </span>
                  <span className="forum-article-item__date">
                    {new Date(article.createdAt).toLocaleDateString()}
                  </span>
                  <span className="forum-article-item__likes">
                    ♡{" "}
                    {article.likeCount >= 9999
                      ? "9999+"
                      : (article.likeCount ?? 0)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
