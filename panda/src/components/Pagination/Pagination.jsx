"use client";

export default function Pagination({
  page,
  setPage,
  totalCount,
  pageSize,
  maxButtons = 5,
}) {
  const totalPages = Math.ceil(totalCount / pageSize) || 1;

  let startPage = Math.max(1, page - Math.floor(maxButtons / 2));
  let endPage = Math.min(totalPages, startPage + maxButtons - 1);

  if (endPage - startPage + 1 < maxButtons) {
    startPage = Math.max(1, endPage - maxButtons + 1);
  }

  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  return (
    <div className="pagination">
      <button
        className="page-arrow"
        onClick={() => setPage(Math.max(page - 1, 1))}
        disabled={page === 1}
      >
        &lt;
      </button>

      {pageNumbers.map((num) => (
        <button
          key={num}
          className={`page-number ${page === num ? "active" : ""}`}
          onClick={() => setPage(num)}
        >
          {num}
        </button>
      ))}

      <button
        className="page-arrow"
        onClick={() => setPage(Math.min(page + 1, totalPages))}
        disabled={page === totalPages}
      >
        &gt;
      </button>
    </div>
  );
}
