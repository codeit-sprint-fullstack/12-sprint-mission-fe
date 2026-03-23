import React from "react";
import { SearchInput } from "../common/SearchInput";
import { SortSelect } from "../common/SortSelect";
import styles from "./OnSaleProductHeader.module.css";

export const OnSaleProductHeader = () => {
  return (
    <div className={styles.container}>
      <h2 className={`${styles.title} text-xl-bold`}>판매 중인 상품</h2>

      <div className={styles.controls}>
        <SearchInput />
        <a className={`btn-base text-lg-semibold ${styles.btn}`} href="/">
          상품 등록하기
        </a>
        <SortSelect />
      </div>
    </div>
  );
};
