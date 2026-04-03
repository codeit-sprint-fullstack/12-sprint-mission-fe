import React, { useEffect, useState } from "react";
import { getProducts } from "../api/productApi";
import ProductCard from "../components/ProductCard";
import SearchIcon from "../components/SearchIcon";
import Footer from "../components/Footer";
import { useDebounce } from "../hooks/useDebounce";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTitle, setSearchTitle] = useState("");
  const [orderBy, setOrderBy] = useState("recent");
  const [totalCount, setTotalCount] = useState(0);
  const [pageCount, setPageCount] = useState(10);

  // 한 페이지에 몇개 보여줄지
  const pageSize = 10;

  // 총 게시물개수 / 한 페이지에 보여줄 개수
  const totalPage = Math.ceil(totalCount / pageSize);

  // 현재 페이지 에서 부터 어디까지까 한 그룹인지 0 일경우 0임.
  const pageGroup = Math.floor((page - 1) / pageCount);
  // 0번째 그룹의 첫 페이지는 1페이지
  const startPage = pageGroup * pageCount + 1;
  // 0번째 그룹의 마지막 페이지는 첫번째 페이지 + 9 즉 10페이지
  const endPage = Math.min(startPage + pageCount - 1, totalPage);

  const debouncedSearchTitle = useDebounce(searchTitle, 500);

  const handleSearchTitle = (e) => {
    setSearchTitle(e.target.value);
  };

  const handleSearchOrder = (e) => {
    setOrderBy(e.target.value);
  };

  useEffect(() => {
    setPage(1);
  }, [debouncedSearchTitle]);

  useEffect(() => {
    const fetchData = async () => {
      const best = await getProducts(1, 4, "favorite");
      const all = await getProducts(
        page,
        pageSize,
        orderBy,
        debouncedSearchTitle,
      );

      setBestProducts(best.list || []);
      setProducts(all.list || []);
      setTotalCount(all.totalCount || 0);
    };

    fetchData();
  }, [page, debouncedSearchTitle, orderBy]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setPageCount(5);
      } else if (window.innerWidth < 900) {
        setPageCount(7);
      } else {
        setPageCount(10);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <main className="main-area">
        {/* 베스트 상품 */}
        <section>
          <h2>베스트 상품</h2>
          <div className="grid best">
            {bestProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
        {/*  판매중인 상품 */}
        <section>
          <div className="search-area">
            <h2>판매 중인 상품</h2>
            <div className="search-box">
              <div className="search-input-wrapper">
                <input
                  value={searchTitle}
                  onChange={handleSearchTitle}
                  className="search-input"
                  type="text"
                  placeholder="검색할 상품을 입력해주세요."
                />
                <SearchIcon />
              </div>

              <button className="search-btn">상품 등록하기</button>
              <select className="search-select" onChange={handleSearchOrder}>
                <option value="recent">최신순</option>
                <option value="favorite">좋아요순</option>
              </select>
            </div>
          </div>
          {products.length === 0 ? (
            <div className="empty-box">
              <div className="empty-icon">🔍</div>
              <p className="empty-title">조건에 맞는 상품이 없어요</p>
              <p className="empty-desc">
                다른 검색어를 입력하거나 필터를 변경해보세요
              </p>
            </div>
          ) : (
            <div className="grid normal">
              {products.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          )}
        </section>
        {/* 페이지네이션 */}
        <section className="pagination">
          <button
            disabled={startPage === 1}
            onClick={() => setPage(startPage - 1)}
          >
            «
          </button>
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            {"<"}
          </button>

          {Array.from(
            { length: endPage - startPage + 1 },
            (_, i) => startPage + i,
          ).map((num) => (
            <button
              key={num}
              className={page === num ? "active" : ""}
              onClick={() => setPage(num)}
            >
              {num}
            </button>
          ))}

          <button
            disabled={page === totalPage}
            onClick={() => setPage(page + 1)}
          >
            {">"}
          </button>
          <button
            disabled={endPage === totalPage}
            onClick={() => setPage(endPage + 1)}
          >
            »
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductList;
