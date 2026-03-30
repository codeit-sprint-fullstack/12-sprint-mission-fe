import React from "react";
import "../style/Pagination.css";

const Pagination = ({ currPage, totalPages, onPageChange }) => {
  const PAGE_GROUP_SIZE = 5;
  const currentGroup = Math.floor((currPage - 1) / PAGE_GROUP_SIZE);
  const startPage = currentGroup * PAGE_GROUP_SIZE + 1;
  const endPage = Math.min(startPage + PAGE_GROUP_SIZE - 1, totalPages);
  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  return (
    <div className="pagination">
      <button
        type="button"
        onClick={() => onPageChange(startPage - 1)}
        disabled={startPage === 1}
      >
        {"<"}
      </button>
      {pages.map((page) => (
        <button
          key={page}
          type="button"
          className={currPage === page ? "active" : ""}
          onClick={() => onPageChange(page)}
          disabled={currPage === page}
        >
          {page}
        </button>
      ))}
      <button
        type="button"
        onClick={() => onPageChange(endPage + 1)}
        disabled={endPage === totalPages || totalPages === 0}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
