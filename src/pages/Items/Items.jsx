import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";
import useProducts from "../../hooks/useProducts";
import Pagination from "../../components/Pagination/Pagination";
import "./items.css";

function Items() {
  const {
    products,
    totalCount,
    loading,
    error,
    orderBy,
    setOrderBy,
    keyword,
    setKeyword,
    page,
    setPage,
    pageSize,
  } = useProducts();

  return (
    <div className="item-container">
      <Header />

      <main className="item-main">
        <section className="market-section">
          <div className="market-header">
            <h2 className="section-title">판매 중인 상품</h2>
            <div className="controls">
              <input
                type="text"
                placeholder="검색어를 입력하세요"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <Link to="/registration" className="add-product-btn">
                상품 등록하기
              </Link>

              <select
                value={orderBy}
                onChange={(e) => setOrderBy(e.target.value)}
              >
                <option value="recent">최신순</option>
              </select>
            </div>
          </div>

          {loading && <p>상품을 불러오는 중...</p>}
          {error && <p>상품 불러오기 실패 → 네트워크 오류입니다</p>}

          <div className="product-grid">
            {products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>

          <Pagination
            page={page}
            setPage={setPage}
            totalCount={totalCount}
            pageSize={pageSize}
            maxButtons={5}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Items;
