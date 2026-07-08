"use client";

import Link from "next/link";
import React from "react";
import type { Product } from "../../../../types";
import { useGetBestProducts } from "../../../../hooks/useProducts";
import BestProductCard from "../../../components/BestProductCard";

const BestProductsList = () => {
  const { data: products, isPending, isError } = useGetBestProducts();

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
      {products?.list?.map((product: Product, index: number) => {
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
