import React, { useEffect, useState } from "react";
import Productcard from "./Productcard";

const Productlist = ({
  currentPage,
  pageSize,
  sortType,
  setCurrentPage,
  setTotalCount,
  setPageSize,
}) => {
  const BASE_URL = "https://panda-market-api.vercel.app/products";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 744) setPageSize(4);
      else if (window.innerWidth < 1200) setPageSize(6);
      else setPageSize(10);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const productsData = async () => {
      try {
        const res = await fetch(
          `${BASE_URL}?sort=${sortType}&order=desc&page=${currentPage}&pageSize=${pageSize}`,
        );

        if (!res.ok) {
          throw new Error("서버 오류: " + res.status);
        }

        const data = await res.json();
        setProducts(data.list ?? []);
        setTotalCount(data.totalCount ?? 0);
      } catch (error) {
        alert("데이터를 가져오지 못했습니다.");
        setProducts([]);
      }
    };

    productsData();
  }, [sortType, currentPage, pageSize]);

  return (
    <ul className="product_list">
      {products.map((item) => (
        <Productcard
          key={item.id}
          name={item.name}
          price={item.price}
          imageUrl={item.images?.[0]}
          favoriteCount={item.favoriteCount}
        />
      ))}
    </ul>
  );
};

export default Productlist;
