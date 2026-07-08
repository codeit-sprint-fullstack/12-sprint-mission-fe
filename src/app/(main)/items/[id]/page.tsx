"use client";

import React from "react";
import ProductComment from "./_components/ProductComment";
import { useParams } from "next/navigation";
import ItemDetail from "../../../components/ItemDetail";

const ProductDetailPage = () => {
  const { id } = useParams();
  return (
    <div className="w-full max-w-[1200px] h-full px-[16px] mt-[16px] mx-auto">
      <ItemDetail id={String(id)} />
      <ProductComment />
    </div>
  );
};

export default ProductDetailPage;
