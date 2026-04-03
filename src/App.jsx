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
import ProductWrap from "./components/ProductWrap.jsx";

const App = () => {
  const [products, setProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [sorting, setSorting] = useState("recent");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [debouncedKeyword, setDebouncedKeyword] = useState("");
  const totalLimit = usePageSize("total");
  const bestLimit = usePageSize("best");
  const totalPages = Math.ceil(totalCount / totalLimit);

  // console.log("total p s => ", totalLimit, "/// best p s => ", bestLimit);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedKeyword(keyword);
    }, 300);

    return () => clearTimeout(timer);
  }, [keyword]);

  /* 베스트 상품 목록 조회 */
  useEffect(() => {
    const fetchBest = async () => {
      const best = await getProductList(1, bestLimit, "favorite");

      setBestProducts(best.list ?? []);
    };

    fetchBest();
  }, [bestLimit]);

  /* 전체 상품 목록 조회 */
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProductList(
        page,
        totalLimit,
        sorting,
        debouncedKeyword,
      );
      setProducts(data.list ?? []);
      setTotalCount(data.totalCount ?? 0);
    };

    fetchProducts();
  }, [page, sorting, debouncedKeyword, totalLimit]);

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
          <ProductWrap title="베스트 상품">
            <ProductList lists={bestProducts} type="best" />
          </ProductWrap>

          <ProductWrap
            title="판매 중인 상품"
            header={
              <>
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
              </>
            }
          >
            <ProductList lists={products} type="total" />
            <Pagination
              page={page}
              totalPages={totalPages}
              onPrev={handlePrevPage}
              onNext={handleNextPage}
              onChangePage={setPage}
            />
          </ProductWrap>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
