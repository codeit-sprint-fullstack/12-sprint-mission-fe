import React from "react";
import styles from "../styles/UsedMarket.module.css";
import icSearch from "../assets/ic_search.png";
import mobileSortBtn from "../assets/btn_sort.png";
import icArrowDown from "../assets/ic_arrow_down.png";

import CardGeneral from "./CardGeneral";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

const SellingProducts = ({
  products,
  onSortToggle,
  page,
  keyword,
  setKeyword,
  totalPage,
  listRow,
  isOpen,
  orderBy,
  onPageChange,
  onCurrentPage,
  onDropdownToggle,
  pageGroup,
  isMobile,
  isTablet,
}) => {
  // 검색 결과가 없을 시
  const noSearch = () => {
    return (
      <p
        className={`${styles.noSearch} ${isMobile ? "text-2xl" : "text-3xl"} bold`}
      >
        검색된 목록이 없습니다..
      </p>
    );
  };

  // 정렬 드롭다운
  const sortDropdownList = () => {
    return (
      <div className={styles.sortList}>
        <option
          className={"text-lg regular"}
          value="recent"
          onClick={onSortToggle}
        >
          최신순
        </option>
        <option
          className={"text-lg regular"}
          value="favorite"
          onClick={onSortToggle}
        >
          좋아요순
        </option>
      </div>
    );
  };

  // 모바일 (windowWidth < 768) 상태에서 폼 변환
  const mobileHeader = () => {
    return (
      <>
        <div className={styles.mobileHeaderContainer}>
          <h2 className="text-xl bold">판매 중인 상품</h2>
          <button className={`${styles.addProductBtn} text-lg semibold`}>
            상품 등록하기
          </button>
        </div>
        <div className={styles.searchContainer}>
          <input
            type="text"
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
              onPageChange();
            }}
            placeholder="검색할 상품을 입력해주세요"
            className={`${styles.searchInput} text-md regular`}
          />
          <img src={icSearch} alt="돋보기 아이콘" className={styles.icSearch} />
          <div className={styles.sortDropdownContainer}>
            <img
              src={mobileSortBtn}
              alt="정렬 버튼(모바일ver)"
              onClick={onDropdownToggle}
            />
            {isOpen ? sortDropdownList() : <></>}
          </div>
        </div>
      </>
    );
  };

  return (
    <section className={styles.sellListContainer}>
      <div className={styles.sellingHeader}>
        {isMobile ? (
          mobileHeader()
        ) : (
          <>
            <h2 className="text-xl bold">판매 중인 상품</h2>
            <div className={styles.searchContainer}>
              <input
                type="text"
                value={keyword}
                onChange={(e) => {
                  setKeyword(e.target.value);
                  onPageChange();
                }}
                placeholder="검색할 상품을 입력해주세요"
                className={`${styles.searchInput} ${isTablet ? "text-md" : "text-lg"} regular`}
              />
              <img
                src={icSearch}
                alt="돋보기 아이콘"
                className={styles.icSearch}
              />
              <Link to="/registration" style={{ textDecoration: "none" }}>
                <button className={`${styles.addProductBtn} text-lg semibold`}>
                  상품 등록하기
                </button>
              </Link>

              <div className={styles.sortDropdownContainer}>
                <button
                  className={`${styles.sortBtn} text-lg regular`}
                  onClick={onDropdownToggle}
                >
                  {orderBy === "recent" ? "최신순" : "좋아요순"}
                  <img src={icArrowDown} />
                </button>
                {isOpen ? sortDropdownList() : <></>}
              </div>
            </div>
          </>
        )}
      </div>

      <div className={styles.listContainer}>
        {products.length === 0 ? (
          noSearch()
        ) : (
          <>
            <ul className={styles.productsList}>
              {products.length === 0
                ? noSearch()
                : products.slice(0, listRow).map((item) => {
                    return <CardGeneral product={item} key={item.id} />;
                  })}
            </ul>
            <ul className={styles.productsList}>
              {products.slice(listRow).map((item) => {
                return <CardGeneral product={item} key={item.id} />;
              })}
            </ul>
          </>
        )}
      </div>

      <Pagination
        page={page}
        totalPage={totalPage}
        pageGroup={pageGroup}
        onPageChange={onPageChange}
        onCurrentPage={onCurrentPage}
      />
    </section>
  );
};

export default SellingProducts;
