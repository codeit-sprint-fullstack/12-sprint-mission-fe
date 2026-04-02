import React from "react";
import arrowLeftActive from "../assets/arrow_left_active.png";
import arrowRightActive from "../assets/arrow_right_active.png";
import arrowLeftInactive from "../assets/arrow_left_inactive.png";
import arrowRightInactive from "../assets/arrow_right_inactive.png";
import styles from "../styles/UsedMarket.module.css";

const Pagination = ({
  page,
  totalPage,
  pageGroup,
  onPageChange,
  onCurrentPage,
}) => {
  return (
    <div className={styles.pageBtnContainer}>
      <button
        className={`${styles.pageBtn} text-lg semibold`}
        disabled={pageGroup[0] === 1}
        onClick={() => {
          onPageChange("prev");
        }}
      >
        <img src={pageGroup[0] === 1 ? arrowLeftInactive : arrowLeftActive} />
      </button>
      {pageGroup.map((p) => {
        return (
          <button
            value={p}
            className={`${styles.pageBtn} text-lg semibold ${page === p ? styles.active : ""}`}
            onClick={function () {
              onCurrentPage(p);
            }}
            key={p}
          >
            {p}
          </button>
        );
      })}
      <button
        className={`${styles.pageBtn} text-lg semibold`}
        onClick={() => {
          onPageChange("next");
        }}
        disabled={pageGroup.at(-1) >= totalPage}
      >
        <img
          src={
            pageGroup.at(-1) >= totalPage
              ? arrowRightInactive
              : arrowRightActive
          }
        />
      </button>
    </div>
  );
};

export default Pagination;
