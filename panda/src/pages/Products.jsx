import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Bestproduct from "../components/Bestproduct";
import Productlist from "../components/Productlist";
import "./Products.css";

const Products = () => {
  const [sortType, setSortType] = useState("createdAt");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalCount, setTotalCount] = useState(0);

  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <div>
      <Header />
      <main className="product">
        <section className="best">
          <h2 className="title">베스트 상품</h2>
          <Bestproduct />
        </section>
        <section>
          <div className="search">
            <h2 className="title">판매 중인 상품</h2>
            <div className="search-left">
              <div>
                <input
                  className="search-input"
                  type="text"
                  placeholder="검색할 상품을 입력해주세요"
                />
                <div></div>
              </div>
              <button className="listing">상품 등록하기</button>
              <select
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
                className="sort"
              >
                <option value="createdAt">최신순</option>
                <option value="favorite">좋아요순</option>
              </select>
            </div>
          </div>
          <section>
            <Productlist
              currentPage={currentPage}
              pageSize={pageSize}
              setPageSize={setPageSize}
              sortType={sortType}
              setCurrentPage={setCurrentPage}
              setTotalCount={setTotalCount}
            />
          </section>
        </section>
        <section className="page_btn">
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {(() => {
            const pageGroup = Math.ceil(currentPage / 5);
            const startPage = (pageGroup - 1) * 5 + 1;
            const endPage = Math.min(startPage + 4, totalPages);
            return Array.from(
              { length: endPage - startPage + 1 },
              (_, i) => startPage + i,
            ).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={currentPage === page ? "active" : ""}
              >
                {" "}
                {page}{" "}
              </button>
            ));
          })()}
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
