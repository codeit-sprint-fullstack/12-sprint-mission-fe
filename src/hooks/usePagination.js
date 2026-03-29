import { useState } from "react";

export const usePagination = (groupSize = 5) => {
  const [page, setPage] = useState(1);
  const [index, setIndex] = useState(0);

  // 전체 페이지 수를 받아 현재 화면에 보여줄 페이지 번호 배열을 반환하는 함수
  const getPageGroup = (totalPage) => {
    const pagesData = [];
    if (totalPage <= 0) {
      pagesData.push(1);
    } else {
      for (let i = 1; i <= totalPage; i++) {
        pagesData.push(i);
      }
    }
    return pagesData.slice(index, index + groupSize);
  };

  // 이전 / 다음 페이지 버튼 및 검색시 페이지 초기화 핸들러
  const handlePageChange = (action) => {
    if (action === "prev") {
      if (index <= 0) return;
      const newIndex = index - groupSize;
      setIndex(newIndex);
      setPage(newIndex + 1);
    } else if (action === "next") {
      const newIndex = index + groupSize;
      setIndex(newIndex);
      setPage(newIndex + 1);
    } else {
      setIndex(0);
      setPage(1);
    }
  };

  // 현재 페이지 클릭 핸들러
  const handleCurrentPage = (pageNumber) => {
    setPage(pageNumber);
  };

  return {
    page,
    getPageGroup,
    handlePageChange,
    handleCurrentPage,
  };
};
