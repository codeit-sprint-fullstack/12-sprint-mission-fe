import { useState, useMemo } from "react";

export default function usePagination({
  totalCount,
  pageSize,
  maxPageButtons = 5,
}) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(totalCount / pageSize) || 1;

  // 화면에 표시할 페이지 번호 배열 계산
  const pageNumbers = useMemo(() => {
    let startPage = Math.max(page - Math.floor(maxPageButtons / 2), 1);
    let endPage = startPage + maxPageButtons - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(endPage - maxPageButtons + 1, 1);
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i,
    );
  }, [page, totalPages, maxPageButtons]);

  const nextPage = () => setPage((p) => Math.min(p + 1, totalPages));
  const prevPage = () => setPage((p) => Math.max(p - 1, 1));

  return { page, setPage, totalPages, pageNumbers, nextPage, prevPage };
}
