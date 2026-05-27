"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getProductList } from "../../lib/productService";
import "../../styles/item.css";

export default function ItemsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [orderBy, setOrderBy] = useState("recent");
  const router = useRouter();

  const { data: bestData } = useQuery({
    queryKey: ["bestProducts"],
    queryFn: () => getProductList(1, 4, "", "favorite"),
    staleTime: 1000 * 60,
    refetchInterval: 1000 * 60, // 1분마다 자동 갱신
  });

  const { data, isLoading } = useQuery({
    queryKey: ["products", currentPage, keyword, orderBy],
    queryFn: () => getProductList(currentPage, 10, keyword, orderBy),
    staleTime: 1000 * 30,
    refetchInterval: 1000 * 30, // 30초마다 자동 갱신
  });

  const bestProducts = bestData?.list || [];
  const products = data?.list || [];
  const totalPages = Math.max(1, Math.ceil((data?.totalCount || 0) / 10));

  const WINDOW_SIZE = 5;
  const currentGroup = Math.ceil(currentPage / WINDOW_SIZE);
  const startPageNumber = (currentGroup - 1) * WINDOW_SIZE + 1;
  const pages = Array.from(
    { length: WINDOW_SIZE },
    (_, i) => startPageNumber + i,
  ).filter((p) => p <= totalPages);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setKeyword(searchInput);
      setCurrentPage(1);
    }
  };

  return (
    <>
      <Header />
      <main className="market">
        <div className="product-list__inner">
          <section className="product-list product-list--best">
            <h2 className="product-list__title">베스트 상품</h2>
            <div className="product-grid best">
              {bestProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/items/${product.id}`}
                  className="product-card best"
                >
                  <div className="product-card__img-box">
                    <img
                      src={product.images?.[0] || "/images/mini_logo.png"}
                      alt={product.name}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "/images/mini_logo.png";
                      }}
                    />
                  </div>
                  <div className="product-card__info">
                    <h3 className="name">{product.name}</h3>
                    <p className="price">
                      {product.price > 0
                        ? `${product.price.toLocaleString()}원`
                        : "0원"}
                    </p>
                    <div className="favorite">
                      <img
                        src="/images/ic_heart.svg"
                        alt="좋아요"
                        className="ic-heart"
                      />
                      <span>{product.favoriteCount || 0}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="product-list">
            <div className="product-list__header">
              <h2 className="product-list__title">판매 중인 상품</h2>

              <div className="product-controls">
                <div className="product-controls__search-bar">
                  <img
                    src="/images/ic_search.svg"
                    alt="검색"
                    className="product-controls__search-icon"
                  />
                  <input
                    type="text"
                    placeholder="검색어를 입력해주세요"
                    value={keyword}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="product-controls__search-input"
                  />
                </div>
                <div className="product-controls__actions">
                  <button
                    className="product-controls__btn-add"
                    onClick={() => router.push("/registration")}
                  >
                    상품 등록하기
                  </button>
                  <select
                    className="product-controls__select"
                    value={orderBy}
                    onChange={(e) => setOrderBy(e.target.value)}
                  >
                    <option value="recent">최신순</option>
                    <option value="favorite">좋아요순</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="product-grid normal">
              {isLoading && <p>로딩 중...</p>}
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/items/${product.id}`}
                  className="product-card"
                >
                  <div className="product-card__img-box">
                    <img
                      src={product.images?.[0] || "/images/mini_logo.png"}
                      alt={product.name}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "/images/mini_logo.png";
                      }}
                    />
                  </div>
                  <div className="product-card__info">
                    <h3 className="name">{product.name}</h3>
                    <p className="price">
                      {product.price > 0
                        ? `${product.price.toLocaleString()}원`
                        : "0원"}
                    </p>
                    <div className="favorite">
                      <img
                        src="/images/ic_heart.svg"
                        alt="좋아요"
                        className="ic-heart"
                      />
                      <span>{product.favoriteCount || 0}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="pagination">
              <button
                className="arrow"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                &lt;
              </button>
              {pages.map((page) => (
                <button
                  key={page}
                  className={page === currentPage ? "active" : ""}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
              <button
                className="arrow"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                &gt;
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
