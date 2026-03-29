import React, { useEffect, useState } from "react";
import Productcard from "./Productcard";

const Bestproduct = () => {
  const BASE_URL = "https://panda-market-api.vercel.app/products";

  const [bestProducts, setBestProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 744) setPageSize(1);
      else if (window.innerWidth < 1200) setPageSize(2);
      else setPageSize(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const bestData = async () => {
      try {
        const res = await fetch(
          `${BASE_URL}?sort=favorite&order=desc&page=${currentPage}&pageSize=${pageSize}`,
        );
        if (!res.ok) {
          throw new Error("서버 오류: " + res.status);
        }
        const data = await res.json();
        setBestProducts(data.list ?? []);
      } catch (error) {
        alert("데이터를 가져오지 못했습니다.");
        setBestProducts([]);
      }
    };
    bestData();
  }, [currentPage, pageSize]);
  return (
    <ul className="best_product">
      {bestProducts.map((item) => (
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

export default Bestproduct;
