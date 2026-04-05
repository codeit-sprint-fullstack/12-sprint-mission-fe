import { useEffect, useState } from "react";
import heart from "../assets/img/heart.png";
import "./SaleProduct.css";
import { Link } from "react-router-dom";
import search from "../assets/img/search.png";
import img_default from "../assets/img/img_default.png";

const SaleProduct = () => {
  const [product, setProduct] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState("recent");
  const [keyword, setKeyword] = useState("");

  const getPageSize = () => {
    if (window.innerWidth < 376) return 4;
    if (window.innerWidth < 745) return 6;
    return 10;
  };

  const [pageSize, setPageSize] = useState(getPageSize());
  const [layout, setLayout] = useState(window.innerWidth <= 375);

  async function getProduct() {
    try {
      const res = await fetch(
        `https://panda-market-api.vercel.app/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`,
      );
      const result = await res.json();
      console.log(result);
      setTotalCount(result.totalCount);
      setProduct(result.list);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      getProduct();
    }, 300);

    return () => clearTimeout(timer);
  }, [page, orderBy, keyword, pageSize]);

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
      setLayout(window.innerWidth <= 375);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const totalPages = Math.ceil(totalCount / pageSize);
  const PAGE_COUNT = 5;
  const startPage = Math.floor((page - 1) / PAGE_COUNT) * PAGE_COUNT + 1;
  const endPage = Math.min(startPage + PAGE_COUNT - 1, totalPages);
  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  return (
    <>
      <section className="title-container">
        {layout ? (
          <div className="filter">
            <div className="filter-top">
              <p className="sub-title">판매 중인 상품</p>
              <Link to="#" className="form-button">
                상품 등록하기
              </Link>
            </div>
            <div className="filter-container">
              <div className="form">
                <div className="form-wipper">
                  <img className="search-icon" src={search} />
                  <input
                    placeholder="검색할 상품을 입력해주세요"
                    onChange={(e) => {
                      setKeyword(e.target.value);
                    }}
                  />
                </div>
                <select
                  className="sort"
                  value={orderBy}
                  onChange={(e) => {
                    setOrderBy(e.target.value);
                    setPage(1);
                  }}
                >
                  <option value="recent">최신순</option>
                  <option value="favorite">좋아요순</option>
                </select>
              </div>
            </div>
          </div>
        ) : (
          <>
            <p className="sub-title">판매 중인 상품</p>
            <div className="filter-container">
              <div className="form">
                <Link to="#" className="form-button">
                  상품 등록하기
                </Link>
                <div className="form-wipper">
                  <img className="search-icon" src={search} />
                  <input
                    placeholder="검색할 상품을 입력해주세요"
                    onChange={(e) => {
                      setKeyword(e.target.value);
                    }}
                  />
                </div>
                <select
                  className="sort"
                  value={orderBy}
                  onChange={(e) => {
                    setOrderBy(e.target.value);
                    setPage(1);
                  }}
                >
                  <option value="recent">최신순</option>
                  <option value="favorite">좋아요순</option>
                </select>
              </div>
            </div>
          </>
        )}
      </section>
      <section className="sale-container">
        {product.map((t) => {
          return (
            <div className="sale-product-container" key={t.id}>
              <img
                className="sale-product-img"
                src={t.images?.[0] || img_default}
                alt="그냥 이미지"
              />
              <div className="sale-product-detail">
                <p className="sale-detail-title">{t.name}</p>
                <p className="sale-detail-price">{t.price}</p>
                <div className="sale-love-it">
                  <img src={heart} alt="좋아요" />
                  <p>{t.favoriteCount}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <section className="pagination">
        <button
          className="pagination-button"
          onClick={() => {
            if (page === 1) {
              return;
            }
            setPage(page - 1);
          }}
        >
          ‹
        </button>
        {pages.map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            className={`pagination-button ${page === num ? "active" : ""}`}
          >
            {num}
          </button>
        ))}
        <button
          className="pagination-button"
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          ›
        </button>
      </section>
    </>
  );
};

export default SaleProduct;
