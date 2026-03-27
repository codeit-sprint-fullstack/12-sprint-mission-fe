import React, { useState, useEffect } from "react";
import { getProductList } from "./api/products.js";
import usePageSize from "./hooks/usePageSize.js";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import SearchForm from "./components/SearchForm";
import Pagination from "./components/Pagination";
import Sorting from "./components/Sorting";

const App = () => {
  const [products, setProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [sorting, setSorting] = useState("recent");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const totalLimit = usePageSize("total");
  const bestLimit = usePageSize("best");
  const totalPages = Math.ceil(totalCount / totalLimit);

  // console.log("total p s => ", totalLimit, "/// best p s => ", bestLimit);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProductList(page, totalLimit, sorting, keyword);
      const best = await getProductList(1, bestLimit, "favorite");
      setProducts(data.list);
      setBestProducts(best.list);
      setTotalCount(data.totalCount);
    };

    fetchProducts();
  }, [page, sorting, keyword, totalLimit, bestLimit]);

  const handleToggleSortList = () => {
    setIsSortOpen((prev) => !prev);
  };

  const handleChangeKeyword = (e) => {
    setKeyword(e.target.value);
    setPage(1);
  };

  const handleChangeSorting = (sort) => {
    setSorting(sort);
    setIsSortOpen((prev) => !prev);
  };

  const handlePrevPage = () => {
    setPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
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
                  <SearchForm
                    keyword={keyword}
                    onChangeKeyword={handleChangeKeyword}
                  />

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

              <Pagination
                page={page}
                totalPages={totalPages}
                onPrev={handlePrevPage}
                onNext={handleNextPage}
                onChangePage={setPage}
              />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
