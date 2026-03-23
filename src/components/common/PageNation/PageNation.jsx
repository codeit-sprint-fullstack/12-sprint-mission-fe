import React from "react";
import styles from "./PageNation.module.css";

export const PageNation = ({ page, onPageChange, totalPages }) => {
  const GROUP_SIZE = 5;
  const startPage = Math.floor((page - 1) / GROUP_SIZE) * GROUP_SIZE + 1;
  const endPage = Math.min(startPage + GROUP_SIZE - 1, totalPages);

  return (
    <div className={styles.pageNation}>
      <button
        className={`${styles.circle} ${styles.pageBtn} ${styles.prev}`}
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M9.5 4.6665L6 8.1665L9.5 11.6665"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i,
      ).map((num) => (
        <button
          key={num}
          className={`${styles.circle} ${page === num ? styles.currentPage : styles.link}`}
          onClick={() => onPageChange(num)}
        >
          {num}
        </button>
      ))}

      <button
        className={`${styles.circle} ${styles.pageBtn} ${styles.next}`}
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M6 4.6665L9.5 8.1665L6 11.6665"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};
