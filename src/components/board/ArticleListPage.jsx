"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { getArticleList } from "../../api/boardService";
import { BoardShell } from "./Layout";
import defaultImage from "../../assets/Items/product_default.png";
import medalIcon from "../../assets/Items/ic_medal.svg";

const DISPLAY_NAME = "총명한 판다";
const LIKE_COUNT = "9999+";
const FALLBACK_TITLE =
  "맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?";

function normalizeList(data) {
  if (Array.isArray(data)) return data;
  return data?.list || data?.articles || data?.data || [];
}

function formatDate(value) {
  if (!value) return "2024. 04. 16";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "2024. 04. 16";

  return date
    .toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\.$/, "");
}

function BestArticleCard({ article }) {
  const id = article.id || article._id;
  const title = article.title || FALLBACK_TITLE;

  return (
    <Link href={`/freeboard/${id}`} className="best-card">
      <span className="best-badge">
        <img src={medalIcon.src || medalIcon} alt="" aria-hidden="true" />
        Best
      </span>

      <div className="best-card-body">
        <h3>{title}</h3>
        <img src={defaultImage.src} alt="" className="best-image" />
      </div>

      <div className="best-meta">
        <span>{DISPLAY_NAME}</span>
        <span className="heart-text">♡ {LIKE_COUNT}</span>
        <span>{formatDate(article.createdAt || article.updatedAt)}</span>
      </div>
    </Link>
  );
}

function ArticleRow({ article }) {
  const id = article.id || article._id;
  const title = article.title || FALLBACK_TITLE;

  return (
    <Link href={`/freeboard/${id}`} className="article-row">
      <div className="article-copy">
        <h3>{title}</h3>
        <div className="article-meta">
          <span className="avatar" aria-hidden="true" />
          <span>{DISPLAY_NAME}</span>
          <span>{formatDate(article.createdAt || article.updatedAt)}</span>
        </div>
      </div>

      <div className="article-side">
        <img src={defaultImage.src} alt="" className="article-image" />
        <div className="article-like">
          <span>♡</span>
          <span>{LIKE_COUNT}</span>
        </div>
      </div>
    </Link>
  );
}

export default function ArticleListPage() {
  const [articles, setArticles] = useState([]);
  const [bestArticles, setBestArticles] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [orderBy, setOrderBy] = useState("recent");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    async function loadArticles() {
      setIsLoading(true);
      setError("");

      try {
        const [listResponse, bestResponse] = await Promise.all([
          getArticleList({ page: 1, pageSize: 8, keyword, orderBy }),
          getArticleList({ page: 1, pageSize: 3, orderBy: "recent" }),
        ]);

        if (!ignore) {
          setArticles(normalizeList(listResponse));
          setBestArticles(normalizeList(bestResponse).slice(0, 3));
        }
      } catch {
        if (!ignore) {
          setError("게시글을 불러오지 못했습니다.");
        }
      } finally {
        if (!ignore) setIsLoading(false);
      }
    }

    loadArticles();

    return () => {
      ignore = true;
    };
  }, [keyword, orderBy]);

  const visibleArticles = useMemo(() => {
    if (!keyword) return articles;
    return articles.filter((article) =>
      String(article.title || "").toLowerCase().includes(keyword.toLowerCase())
    );
  }, [articles, keyword]);

  return (
    <BoardShell>
      <section className="board-section best-section">
        <h2>베스트 게시글</h2>
        <div className="best-grid">
          {bestArticles.map((article) => (
            <BestArticleCard key={article.id || article._id} article={article} />
          ))}
        </div>
      </section>

      <section className="board-section board-list-section">
        <div className="section-title-row">
          <h2>게시글</h2>
          <Link href="/freeboard/new" className="primary-button write-button">
            글쓰기
          </Link>
        </div>

        <div className="board-controls">
          <label className="search-field">
            <span aria-hidden="true" className="search-icon" />
            <input
              type="search"
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              placeholder="검색할 상품을 입력해주세요"
            />
          </label>

          <select
            value={orderBy}
            onChange={(event) => setOrderBy(event.target.value)}
            aria-label="게시글 정렬"
          >
            <option value="recent">최신순</option>
          </select>
        </div>

        {error ? <p className="status-text">{error}</p> : null}
        {isLoading ? <p className="status-text">게시글을 불러오는 중입니다.</p> : null}
        {!isLoading && visibleArticles.length === 0 ? (
          <p className="status-text">검색 결과가 없습니다.</p>
        ) : null}

        <div className="article-list">
          {visibleArticles.map((article) => (
            <ArticleRow key={article.id || article._id} article={article} />
          ))}
        </div>
      </section>
    </BoardShell>
  );
}
