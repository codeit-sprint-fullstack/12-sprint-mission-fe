"use client";
import BestProductCard from "@/app/components/BestProductCard";
import { productService } from "@/lib/productService";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const BestProductsList = () => {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const res = await fetch(
  //       `${process.env.NEXT_PUBLIC_PANDAMARKET_API_URL}/products?page=1&pageSize=4&orderBy=favorite`,
  //     );
  //     const data = await res.json();

  //     setProducts(data.list);
  //   };

  //   fetchProducts();
  // }, []);
  const {
    data: products,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["bestItems"],
    queryFn: () => productService.getBestItems(),
  });

  console.log("products", products);

  if (isPending) {
    return <div className="py-10 text-center">로딩 중...</div>;
  }
  if (isError) {
    return (
      <div className="py-10 text-center text-red-500">에러가 발생했습니다.</div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[18px] xl:grid-cols-4 xl:gap-[24px]">
      {products?.list?.map((product, index) => {
        let displayClass = "block";
        if (index === 1) displayClass = "hidden md:block";
        if (index >= 2) displayClass = "hidden xl:block";
        return (
          <Link
            href={`/items/${product.id}`}
            key={product.id}
            className={displayClass}
          >
            <BestProductCard product={product} />
          </Link>
        );
      })}
    </div>
  );
};

export default BestProductsList;
