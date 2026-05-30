import React from "react";

const Pagination = ({ totalPages, page, setPage }) => {
  let startPage = Math.max(1, page - 2);
  let endPage = Math.min(totalPages, page + 2);

  if (endPage - startPage < 4) {
    if (startPage === 1) {
      endPage = Math.min(5, totalPages);
    } else if (endPage === totalPages) {
      startPage = Math.max(1, totalPages - 4);
    }
  }

  // 렌더링할 페이지 숫자 배열 생성
  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  // 데이터가 없어서 총 페이지가 0일 경우 렌더링하지 않음
  if (totalPages === 0) return null;

  return (
    <div className="flex items-center justify-center gap-[10px] mt-[40px] mb-[40px]">
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        className={`w-[40px] h-[40px] flex items-center justify-center rounded-full border transition-colors
          ${
            page === 1
              ? "border-gray-200 text-gray-300 cursor-not-allowed bg-gray-50"
              : "border-gray-200 text-gray-600 bg-white hover:bg-gray-100 cursor-pointer"
          }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      {pageNumbers.map((num) => (
        <button
          key={num}
          onClick={() => setPage(num)}
          className={`w-[40px] h-[40px] flex items-center justify-center rounded-full border text-lg transition-colors cursor-pointer
            ${
              page === num
                ? "bg-blue-500 text-white border-blue-500 font-semibold" // 활성화 상태 (사진의 파란색)
                : "bg-white text-gray-600 border-gray-200 hover:bg-gray-100" // 비활성화 상태
            }
          `}
        >
          {num}
        </button>
      ))}

      <button
        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={page === totalPages}
        className={`w-[40px] h-[40px] flex items-center justify-center rounded-full border transition-colors
          ${
            page === totalPages
              ? "border-gray-200 text-gray-300 cursor-not-allowed bg-gray-50"
              : "border-gray-200 text-gray-600 bg-white hover:bg-gray-100 cursor-pointer"
          }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
