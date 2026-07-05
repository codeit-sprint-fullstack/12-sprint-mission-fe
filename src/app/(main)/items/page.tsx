import React from "react";
import BestProductsList from "./_components/BestProductsList";
import SellingProductsList from "./_components/SellingProductsList";

const ProductsListPage = () => {
  return (
    <div className="flex grow flex-col w-full my-[24px] px-[16px] gap-[40px]">
      <section className="w-full max-w-[1200px] mx-auto flex flex-col gap-[16px]">
        <h2 className="text-xl text-(--Secondary-900) font-bold">
          베스트 상품
        </h2>
        <BestProductsList />
      </section>
      <SellingProductsList />
    </div>
  );
};

export default ProductsListPage;
