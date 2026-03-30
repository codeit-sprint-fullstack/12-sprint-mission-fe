import React, { useMemo } from "react";
import BestProducts from "../components/BestProducts.jsx";
import styles from "../styles/UsedMarket.module.css";
import SellingProducts from "../components/SellingProducts.jsx";
import { usePagination } from "../hooks/usePagination.js";
import { useProducts } from "../hooks/useProducts.js";

const UsedMarket = ({ isMobile, isTablet }) => {
  const pageSize = useMemo(() => {
    if (isMobile) return 4; // 모바일 (2열 * 2줄)
    if (isTablet) return 6; // 태블릿 (3열 * 2줄)
    return 10; // 데스크탑
  }, [isMobile, isTablet]);

  // 페이지네이션 커스텀 hook
  const { page, getPageGroup, handlePageChange, handleCurrentPage } =
    usePagination(5);

  // 상품 커스텀 hook
  const {
    products,
    totalPage,
    keyword,
    isOpen,
    orderBy,
    setKeyword,
    handleSortToggle,
    handleDropdownToggle,
  } = useProducts(page, pageSize);

  const listRow = pageSize / 2;

  // 페이지 버튼 그룹 계산 (최대 5개 까지)
  const pageGroup = getPageGroup(totalPage);

  return (
    <main className={styles.usedMarketMain}>
      <div className={styles.wrapper}>
        {/* <BestProducts isMobile={isMobile} isTablet={isTablet} /> */}
        <SellingProducts
          products={products}
          onSortToggle={handleSortToggle}
          page={page}
          keyword={keyword}
          setKeyword={setKeyword}
          totalPage={totalPage}
          listRow={listRow}
          isOpen={isOpen}
          orderBy={orderBy}
          onPageChange={handlePageChange}
          onCurrentPage={handleCurrentPage}
          onDropdownToggle={handleDropdownToggle}
          pageGroup={pageGroup}
          isMobile={isMobile}
          isTablet={isTablet}
        />
      </div>
    </main>
  );
};

export default UsedMarket;
