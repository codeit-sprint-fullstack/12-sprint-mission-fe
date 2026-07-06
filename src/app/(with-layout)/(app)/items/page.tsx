import type { Metadata } from "next";
import { Suspense } from "react";

import { BestProductList } from "@/app/(with-layout)/(app)/items/_components/BestProductList";
import { ProductList } from "@/app/(with-layout)/(app)/items/_components/ProductList";
import { ProductSectionHeader } from "@/app/(with-layout)/(app)/items/_components/ProductSectionHeader";
import {
  BestProductListSkeleton,
  ProductCardSkeleton,
} from "@/app/(with-layout)/(app)/items/_components/ProductSkeleton";

export const metadata: Metadata = {
  title: "중고마켓",
};

type MarketPageSearchParams = {
  keyword?: string;
  orderBy?: string;
  page?: string;
};

type MarketPageProps = {
  searchParams: Promise<MarketPageSearchParams>;
};

export default async function MarketPage({ searchParams }: MarketPageProps) {
  const {
    keyword = "",
    orderBy = "recent",
    page: pageParam = "1",
  } = await searchParams;

  const page = Number(pageParam);

  return (
    <div className="flex flex-col gap-6 lg:gap-10">
      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">베스트 상품</h2>
        <Suspense fallback={<BestProductListSkeleton />}>
          <BestProductList />
        </Suspense>
      </section>

      <section>
        <ProductSectionHeader keyword={keyword} orderBy={orderBy} />
        <Suspense fallback={<ProductCardSkeleton />}>
          <ProductList keyword={keyword} orderBy={orderBy} page={page} />
        </Suspense>
      </section>
    </div>
  );
}
