"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { getProductList } from "../../api/ProductService";
import Pagination from "../Pagination";
import { BoardShell } from "./Layout";
import defaultImage from "../../assets/Items/product_default.png";

function normalizeList(data) {
  if (Array.isArray(data)) return { list: data, totalCount: data.length };
  return {
    list: data?.list || data?.products || data?.data || [],
    totalCount: data?.totalCount || data?.total || 0,
  };
}

function ProductCard({ product }) {
  const image = product.images?.[0] || product.image || defaultImage.src;
  const price = Number(product.price || 0).toLocaleString("ko-KR");

  return (
    <article className="product-card">
      <img src={image} alt={product.name || "상품 이미지"} />
      <div>
        <h3>{product.name || "상품명 없음"}</h3>
        <strong>{price}원</strong>
        <p>♡ {product.favoriteCount || 0}</p>
      </div>
    </article>
  );
}

export default function MarketPage() {
  const [bestProducts, setBestProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [orderBy, setOrderBy] = useState("recent");
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [error, setError] = useState("");
  const pageSize = 10;

  useEffect(() => {
    let ignore = false;

    async function loadBest() {
      try {
        const result = normalizeList(
          await getProductList(1, 4, "", "favorite")
        );
        if (!ignore) setBestProducts(result.list);
      } catch {
        if (!ignore) setBestProducts([]);
      }
    }

    loadBest();

    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    let ignore = false;

    async function loadProducts() {
      setError("");
      try {
        const result = normalizeList(
          await getProductList(page, pageSize, keyword, orderBy)
        );
        if (!ignore) {
          setProducts(result.list);
          setTotalCount(result.totalCount);
        }
      } catch {
        if (!ignore) setError("상품 목록을 불러오지 못했습니다.");
      }
    }

    loadProducts();

    return () => {
      ignore = true;
    };
  }, [keyword, orderBy, page]);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(totalCount / pageSize)),
    [totalCount]
  );

  return (
    <BoardShell>
      <section className="market-section">
        <h2>베스트 상품</h2>
        <div className="product-grid best-product-grid-next">
          {bestProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="market-section">
        <div className="section-title-row">
          <h2>판매 중인 상품</h2>
          <Link href="/registration" className="primary-button">
            상품 등록하기
          </Link>
        </div>

        <div className="board-controls market-controls">
          <label className="search-field">
            <span aria-hidden="true">⌕</span>
            <input
              value={keyword}
              onChange={(event) => {
                setKeyword(event.target.value);
                setPage(1);
              }}
              placeholder="검색할 상품명을 입력해주세요"
            />
          </label>
          <select
            value={orderBy}
            onChange={(event) => {
              setOrderBy(event.target.value);
              setPage(1);
            }}
            aria-label="상품 정렬"
          >
            <option value="recent">최신순</option>
            <option value="favorite">좋아요순</option>
          </select>
        </div>

        {error ? <p className="status-text">{error}</p> : null}

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <Pagination currPage={page} totalPages={totalPages} onPageChange={setPage} />
      </section>
    </BoardShell>
  );
}
