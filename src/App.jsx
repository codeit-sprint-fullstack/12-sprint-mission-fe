import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { getProductList } from "./api/products";
import ProductList from "./components/ProductList";
import Pagination from "./components/Pagination";
import usePageSize from "./hooks/usePageSize";
import Sorting from "./components/Sorting";

const App = () => {
  const [products, setProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [sorting, setSorting] = useState("recent");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const totalPageSize = usePageSize("total");
  const bestPageSize = usePageSize("best");

  // console.log("total p s => ", totalPageSize, "/// best p s => ", bestPageSize);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProductList(page, totalPageSize, sorting, keyword);
      const best = await getProductList(1, bestPageSize, "favorite");
      setProducts(data.list);
      setBestProducts(best.list);
      setTotalCount(data.totalCount);
    };

    fetchProducts();
  }, [page, sorting, keyword, totalPageSize, bestPageSize]);

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

  const handleClickPage = (target) => {
    if (target === "prev" && page > 1) setPage((prev) => prev - 1);
    if (target === "next" && page < Math.ceil(totalCount / totalPageSize) - 1)
      setPage((prev) => prev + 1);
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

              <ProductList lists={bestProducts} type="best" />
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
                      alert("준비중입니다");
                      return false;
                    }}
                    className="btn-primary btn-sm"
                  >
                    상품 등록하기
                  </a>

                  <Sorting
                    sorting={sorting}
                    isSortOpen={isSortOpen}
                    onToggle={handleToggleSortList}
                    onSorting={handleChangeSorting}
                  />
                </div>
              </header>

              <ProductList lists={products} type="total" />

              <div className="pagination">
                <button
                  onClick={() => {
                    handleClickPage("prev");
                  }}
                  className="btn-page btn-prev"
                >
                  <span className="sr-only">이전</span>
                </button>

                <button
                  onClick={() => {
                    setPage(1);
                  }}
                  className={`btn-page ${page === 1 ? "current" : ""}`}
                >
                  1
                </button>
                <button
                  onClick={() => {
                    setPage(2);
                  }}
                  className={`btn-page ${page === 2 ? "current" : ""}`}
                >
                  2
                </button>
                <button
                  onClick={() => {
                    setPage(3);
                  }}
                  className={`btn-page ${page === 3 ? "current" : ""}`}
                >
                  3
                </button>
                <button
                  onClick={() => {
                    setPage(4);
                  }}
                  className={`btn-page ${page === 4 ? "current" : ""}`}
                >
                  4
                </button>
                <button
                  onClick={() => {
                    setPage(5);
                  }}
                  className={`btn-page ${page === 5 ? "current" : ""}`}
                >
                  5
                </button>

                <button
                  onClick={() => {
                    handleClickPage("next");
                  }}
                  className="btn-page btn-next"
                >
                  <span className="sr-only">다음</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
