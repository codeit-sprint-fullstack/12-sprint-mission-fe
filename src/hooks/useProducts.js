import { useState, useEffect } from "react";

export const useProducts = (page, pageSize) => {
  const [products, setProducts] = useState([]);
  const [orderBy, setOrderBy] = useState("-createdAt");
  // use === "best" ? "favorite" : "-createdAt",
  const [keyword, setKeyword] = useState("");
  const [totalPage, setTotalPage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 상품 목록 조회 함수
    const getProducts = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`,
        );
        const data = await res.json();

        if (!res.ok) {
          throw new Error("데이터 로딩에 실패했습니다!");
        }

        setTotalPage(data.totalPages);
        setProducts(data.list);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, [page, pageSize, orderBy, keyword]);

  // 상품 정렬 토글(최신순 / 좋아요순)
  const handleSortToggle = (e) => {
    setOrderBy(e.target.value);
  };

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  return {
    products,
    totalPage,
    orderBy,
    keyword,
    isOpen,
    setOrderBy,
    setKeyword,
    handleSortToggle,
    handleDropdownToggle,
  };
};
