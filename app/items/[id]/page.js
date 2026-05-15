"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { getProductById } from "../../../lib/productService";

export default function ItemDetailPage({ params }) {
  const { id } = use(params);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      setIsLoading(true);
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        setError("상품을 불러오는 중 오류가 발생했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      loadProduct();
    }
  }, [id]);

  return (
    <>
      <Header />
      <main className="page-content item-detail-page">
        <div className="item-detail__container">
          <Link href="/items" className="item-detail__back-link">
            ← 상품 목록으로 돌아가기
          </Link>

          {isLoading && <p>상품 정보를 불러오는 중입니다...</p>}
          {error && <p className="error-message">{error}</p>}

          {product && (
            <section className="item-detail">
              <div className="item-detail__media">
                <img
                  src={product.images?.[0] || "/images/mini_logo.png"}
                  alt={product.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/images/mini_logo.png";
                  }}
                />
              </div>

              <div className="item-detail__info">
                <h1>{product.name}</h1>
                <p className="item-detail__price">
                  {product.price > 0
                    ? `${product.price.toLocaleString()}원`
                    : "0원"}
                </p>
                <p className="item-detail__description">
                  {product.description || "상품 설명이 없습니다."}
                </p>
                <div className="item-detail__meta">
                  <span>좋아요 {product.favoriteCount || 0}개</span>
                  <span>
                    등록일 {new Date(product.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
