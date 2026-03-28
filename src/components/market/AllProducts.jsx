import { useEffect } from "react";
import ProductCard from "./ProductCard";
import SortDropdown from "./SortDropdown";
import Pagination from "./Pagination";
import { useProducts } from "../../hooks/useProducts";
import { useProductPageSize } from "../../hooks/useResponsive";
import styles from "./AllProducts.module.css";

export default function AllProducts() {
  const pageSize = useProductPageSize();

  const {
    products,
    totalPages,
    page,
    setPage,
    orderBy,
    handleOrderByChange,
    searchInput,
    setSearchInput,
    handleSearch,
    handleSearchKeyDown,
    loading,
    error,
  } = useProducts({ pageSize });

  // pageSize 변경시 1페이지로 리셋
  useEffect(() => {
    setPage(1);
  }, [pageSize, setPage]);

  return (
    <section className={styles.section}>
      {/* 상단 컨트롤 */}
      <div className={styles.controls}>
        <h2 className={styles.title}>판매 중인 상품</h2>

        <div className={styles.searchWrap}>
          <img
            src="/icons/ic_search.svg"
            alt=""
            width={24}
            height={24}
            className={styles.searchIcon}
          />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="검색할 상품을 입력해주세요"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleSearchKeyDown}
          />
        </div>

        <button className={styles.addBtn}>상품 등록하기</button>

        <SortDropdown value={orderBy} onChange={handleOrderByChange} />
      </div>

      {error && <p className={styles.error}>오류: {error}</p>}

      {/* 상품 그리드 */}
      <div className={styles.grid}>
        {loading && <p>로딩중...</p>}

        {!loading &&
          products.length > 0 &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

        {!loading && products.length === 0 && (
          <p className={styles.empty}>검색 결과가 없습니다.</p>
        )}
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </section>
  );
}
