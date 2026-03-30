import React, { useState, useEffect } from "react";
import ItemHeader from "./headers/ItemHeader.jsx";
import Footer from "./footers/Footer.jsx";
import * as imgAssets from "./imgs/imgController.js";
import { getProductList } from "./api/ProductService.js";
import "./css/Item.css";

const Item = () => {
  const [products, setProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [orderBy, setOrderBy] = useState("recent");

  const loadProducts = async (page) => {
    try {
      setIsLoading(true);

      const bestData = await getProductList(1, 4, "", "favorite");
      setBestProducts(bestData.list || []);

      const data = await getProductList(page, 10, keyword, orderBy);
      setProducts(data.list || []);

      const totalCount = data.totalCount || 0;
      setTotalPages(Math.ceil(totalCount / 10) || 1);
    } catch (err) {
      console.error("데이터 로딩 실패:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const WINDOW_SIZE = 5;

  const currentGroup = Math.ceil(currentPage / WINDOW_SIZE);
  const startPageNumber = (currentGroup - 1) * WINDOW_SIZE + 1;

  const pages = Array.from(
    { length: WINDOW_SIZE },
    (_, i) => startPageNumber + i
  ).filter((p) => p <= totalPages);

  const handleSearch = (e) => {
    setKeyword(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setCurrentPage(1);
      loadProducts(1);
    }
  };

  useEffect(() => {
    document.title = "판다마켓 | 상품페이지";
    loadProducts(currentPage);
  }, [currentPage, orderBy]);

  return (
    <main className="market">
      <ItemHeader />

      <div className="product-list__inner">
        <section className="product-list product-list--best">
          <h2 className="product-list__title">베스트 상품</h2>
          <div className="product-grid best">
            {bestProducts.map((product) => (
              <div key={product.id} className="product-card best">
                <div className="product-card__img-box">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = imgAssets.defaultImg;
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
                      src={imgAssets.ic_heart}
                      alt="좋아요"
                      className="ic-heart"
                    />
                    <span>{product.favoriteCount || 0}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="product-list">
          <div className="product-list__header">
            <h2 className="product-list__title">판매 중인 상품</h2>

            <div className="product-controls">
              <div className="product-controls__search-bar">
                <img
                  src={imgAssets.ic_search}
                  alt="검색"
                  className="product-controls__search-icon"
                />
                <input
                  type="text"
                  placeholder="검색어를 입력해주세요"
                  value={keyword}
                  onChange={handleSearch}
                  onKeyDown={handleKeyDown}
                  className="product-controls__search-input"
                />
              </div>
              <div className="product-controls__actions">
                <button className="product-controls__btn-add">
                  상품 등록하기
                </button>
                <select className="product-controls__select">
                  <option value="recent">최신순</option>
                  <option value="favorite">좋아요순</option>
                </select>
              </div>
            </div>
          </div>

          <div className="product-grid normal">
            {isLoading && <p>로딩 중...</p>}
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-card__img-box">
                  <img
                    src={product.images?.[0] || imgAssets.defaultImg}
                    alt={product.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = imgAssets.defaultImg;
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
                      src={imgAssets.ic_heart}
                      alt="좋아요"
                      className="ic-heart"
                    />
                    <span>{product.favoriteCount || 0}</span>
                  </div>
                </div>
              </div>
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

      <Footer />
    </main>
  );
};

export default Item;
