import React from "react";
import styles from "./Pagination.module.css";

export const Pagination = ({ page, onPageChange, totalPages }) => {
  const GROUP_SIZE = 5;
  const startPage = Math.floor((page - 1) / GROUP_SIZE) * GROUP_SIZE + 1;
  const endPage = Math.min(startPage + GROUP_SIZE - 1, totalPages);

  return (
    <nav className={styles.pagination}>
      <button
        className={`${styles.circle} ${styles.pageBtn} ${styles.prev}`}
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        aria-label="이전 페이지"
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

      <ul>
        {Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => startPage + i,
        ).map((num) => {
          const isCurrent = page === num;

          return (
            <li key={num} className={styles.pageItem}>
              <button
                className={`${styles.circle} ${isCurrent ? styles.currentPage : styles.link}`}
                onClick={() => onPageChange(num)}
                aria-current={isCurrent ? "page" : undefined}
              >
                {num}
              </button>
            </li>
          );
        })}
      </ul>

      <button
        className={`${styles.circle} ${styles.pageBtn} ${styles.next}`}
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        aria-label="다음 페이지"
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
    </nav>
  );
};
