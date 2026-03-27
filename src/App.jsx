import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { getProductList } from "./api/products";
import ProductList from "./components/ProductList";
import Pagination from "./components/Pagination";

const App = () => {
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [sorting, setSorting] = useState("recent");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProductList(page, 10, sorting, keyword);
      setProducts(data.list);
      setTotalCount(data.totalCount);
    };

    fetchProducts();
  }, [page, sorting, keyword]);

  const handleToggleSortList = () => {
    setIsSortOpen((prev) => !prev);
  };

  const handleChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const handleChangeSorting = (sort) => {
    setSorting(sort);
    setIsSortOpen((prev) => !prev);
  };

  return (
    <div>
      <Header />

      <main id="wrapper">
        <div id="container">
          <section className="section">
            <div className="contents">
              <header className="section-header">
                <h2>베스트 상품</h2>
              </header>
            </div>
          </section>

          <section className="section">
            <div className="contents">
              <header className="section-header">
                <h2>판매 중인 상품</h2>

                <div className="list-control-bar">
                  <label htmlFor="searchKeyword" className="search-keyword">
                    <input
                      type="text"
                      id="searchKeyword"
                      value={keyword}
                      onChange={handleChangeKeyword}
                    />
                    {keyword ? <></> : <span>검색할 상품을 입력해주세요</span>}
                  </label>
                  <a
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      return false;
                    }}
                    className="btn-primary btn-sm"
                  >
                    상품 등록하기
                  </a>
                  <div className="sorting-ui">
                    <button
                      className={`current-sort${isSortOpen ? " open" : ""}`}
                      onClick={handleToggleSortList}
                    >
                      {sorting === "recent" ? "최신순" : "좋아요순"}
                    </button>
                    {isSortOpen && (
                      <ul className="sort-list">
                        <li>
                          <button
                            onClick={() => {
                              handleChangeSorting("recent");
                            }}
                          >
                            최신순
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              handleChangeSorting("favorite");
                            }}
                          >
                            좋아요순
                          </button>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </header>

              <ul className="product__list">
                {products.length ? (
                  products.map((product) => {
                    return (
                      <li key={product.id} className="product__item">
                        <div className="item--thumb">
                          {product.images.length > 0 &&
                          !product.images[0].includes("...") ? (
                            <img src={product.images[0]} />
                          ) : (
                            <span>No Image</span>
                          )}
                        </div>
                        <div className="item--info">
                          <p className="item--name">{product.name}</p>
                          <p className="item--price">
                            {product.price.toLocaleString()}원
                          </p>
                          <button className="item--favorites">
                            {product.favoriteCount}
                          </button>
                        </div>
                      </li>
                    );
                  })
                ) : (
                  <li className="empty-list">
                    {keyword ? `'${keyword}'로 검색` : "등록"}된 상품이
                    없습니다.
                  </li>
                )}
              </ul>

              <Pagination />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
