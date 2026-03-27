import React from "react";
import styles from "./Pagination.module.css";

function Pagination({ page, totalCount, pageSize, setPage }) {
  const totalPages = Math.ceil(totalCount / pageSize);

  const pageGroup = Math.ceil(page / 5);
  const startPage = (pageGroup - 1) * 5 + 1;
  const endPage = Math.min(startPage + 4, totalPages);

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  function handlePrev() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function handleNext() {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }

  return (
    <>
      <div className={styles.btnWrap}>
        <button
          className={styles.btn}
          onClick={handlePrev}
          disabled={page === 1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M9.5 4.66669L6 8.16669L9.5 11.6667"
              stroke="#4B5563"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {pages.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`${styles.btn} ${page === pageNumber ? styles.btnPage : ""}`}
            onClick={() => setPage(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}

        <button
          className={styles.btn}
          onClick={handleNext}
          disabled={page === totalPages}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 4.66656L9.5 8.16656L6 11.6666"
              stroke="#4B5563"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default Pagination;
