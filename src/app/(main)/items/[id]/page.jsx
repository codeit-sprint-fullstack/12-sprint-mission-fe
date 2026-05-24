"use client";

import ItemDetail from "@/app/components/ItemDetail";
import React from "react";
import ProductComment from "./_components/ProductComment";
import { useParams } from "next/navigation";

const ProductDetailPage = () => {
  const { id } = useParams();
  return (
    <div className="w-full max-w-[1200px] h-full px-[16px] mt-[16px] mx-auto">
      <ItemDetail id={id} />
      <ProductComment />
    </div>
  );
};

export default ProductDetailPage;
