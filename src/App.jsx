import { useEffect, useMemo, useState } from "react";
import "../css/reset.css";
import "./App.css";

function App() {
  const [bestProducts, setBestProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [deviceType, setDeviceType] = useState(getDeviceType());

  const pageGroupSize = 5;

  function getDeviceType() {
    const width = window.innerWidth;

    if (width <= 743) return "mobile";
    if (width <= 1199) return "tablet";
    return "desktop";
  }

  function getPageSize(type) {
    if (type === "mobile") return 8; // 2열 x 4줄
    if (type === "tablet") return 9; // 3열 x 3줄
    return 10; // 5열 x 2줄
  }

  function getBestSize(type) {
    if (type === "mobile") return 1;
    if (type === "tablet") return 2;
    return 4;
  }

  const pageSize = getPageSize(deviceType);
  const bestSize = getBestSize(deviceType);

  useEffect(() => {
    const handleResize = () => {
      const nextType = getDeviceType();
      setDeviceType((prev) => (prev !== nextType ? nextType : prev));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [deviceType]);

  useEffect(() => {
    const fetchBestProducts = async () => {
      try {
        const params = new URLSearchParams({
          page: "1",
          pageSize: String(bestSize),
          orderBy: "favorite",
        });

        const res = await fetch(
          `https://panda-market-api.vercel.app/products?${params.toString()}`,
        );
        const data = await res.json();
        setBestProducts(data.list ?? []);
      } catch (error) {
        console.error("베스트 상품 조회 실패:", error);
      }
    };

    fetchBestProducts();
  }, [bestSize]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const params = new URLSearchParams({
          page: String(currentPage),
          pageSize: String(pageSize),
        });

        const res = await fetch(
          `https://panda-market-api.vercel.app/products?${params.toString()}`,
        );
        const data = await res.json();

        setProducts(data.list ?? []);
        setTotalCount(data.totalCount ?? 0);
      } catch (error) {
        console.error("전체 상품 조회 실패:", error);
      }
    };

    fetchProducts();
  }, [currentPage, pageSize]);

  const totalPages = Math.ceil(totalCount / pageSize);

  const startPage =
    Math.floor((currentPage - 1) / pageGroupSize) * pageGroupSize + 1;

  const endPage = Math.min(startPage + pageGroupSize - 1, totalPages);

  const pageNumbers = useMemo(() => {
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i,
    );
  }, [startPage, endPage]);

  return (
    <>
      {/* header */}
      <header className="header">
        <div className="header-inner">
          <div className="header-main">
            <a href="./index.html">
              <img
                className="header-main-img"
                src="/img/Group 19@2x.png"
                alt="판다마켓 로고"
              />
            </a>

            <nav className="header-nav">
              <a className="header-nav-text" href="#">
                자유게시판
              </a>
              <a className="header-nav-text" href="#">
                중고마켓
              </a>
            </nav>
          </div>

          <div className="header-main-login">
            <a className="header-main-login-text" href="./login.html">
              로그인
            </a>
          </div>
        </div>
      </header>

      {/* main */}
      <main className="products-page">
        <div className="products-page-inner">
          {/* best products */}
          <section className="best-section">
            <h2 className="section-title">베스트 상품</h2>
            <div className="best-products">
              {bestProducts.map((product) => (
                <article key={product.id} className="best-product-card">
                  <img
                    src={product.images?.[0]}
                    alt={product.name}
                    className="best-product-image"
                  />
                  <div className="best-product-text">
                    <p className="best-product-name">{product.name}</p>
                    <p className="best-product-price">{product.price}원</p>
                    <div className="best-product-favorite">
                      <img src="/img/ic_heart.svg" alt="좋아요" />
                      <span className="best-product-heart">
                        {product.favoriteCount ?? 0}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* selling products */}
          <section className="products-page2">
            <div className="celling-products">
              <span className="celling-product">판매 중인 상품</span>
            </div>

            <div className="celling-products-list">
              {products.map((product) => (
                <article key={product.id} className="selling-product-card">
                  <img
                    src={product.images?.[0]}
                    alt={product.name}
                    className="selling-product-image"
                  />
                  <div className="selling-product-text">
                    <p className="selling-product-name">{product.name}</p>
                    <p className="selling-product-price">{product.price}원</p>
                    <div className="selling-product-favorite">
                      <img src="/img/ic_heart.svg" alt="좋아요" />
                      <span className="selling-product-heart">
                        {product.favoriteCount ?? 0}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* pagination */}
            <div className="pagination">
              <button
                type="button"
                className="pagination-arrow"
                onClick={() => setCurrentPage(startPage - 1)}
                disabled={startPage === 1}
              >
                ‹
              </button>

              {pageNumbers.map((page) => (
                <button
                  type="button"
                  key={page}
                  className={`pagination-number ${
                    currentPage === page ? "active-page" : ""
                  }`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}

              <button
                type="button"
                className="pagination-arrow"
                onClick={() => setCurrentPage(endPage + 1)}
                disabled={endPage >= totalPages}
              >
                ›
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-left">
            <p>©codeit - 2023</p>
          </div>

          <div className="footer-center">
            <a
              className="footer-center-text"
              href="./privacy.html"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>
            <a
              className="footer-center-text"
              href="./faq.html"
              target="_blank"
              rel="noreferrer"
            >
              FAQ
            </a>
          </div>

          <div className="footer-right">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img src="/img/ic_facebook.png" alt="facebook" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <img src="/img/ic_twitter.png" alt="twitter" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <img src="/img/ic_youtube.png" alt="youtube" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/ic_instagram.png" alt="instagram" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
