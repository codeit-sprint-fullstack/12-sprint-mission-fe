"use client";

import BestProductCard from "@/app/components/BestProductCard";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ProductsListPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_PANDAMARKET_API_URL}/products?page=1&pageSize=4&orderBy=favorite`,
      );
      const data = await res.json();

      setProducts(data.list);
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex grow flex-col w-full my-[24px] px-[16px]">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-[16px]">
        <h2 className="text-xl text-(--Secondary-900) font-bold">
          베스트 상품
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-[24px]">
          {products.map((product, index) => {
            let displayClass = "block";
            if (index === 1) displayClass = "hidden md:block";
            if (index >= 2) displayClass = "hidden lg:block";
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
      </div>
    </div>
  );
};

export default ProductsListPage;
