import { Suspense } from "react";
import BestProductList from "./_components/BestProductList";
import ProductSectionHeader from "./_components/ProductSectionHeader";
import ProductList from "./_components/ProductList";
import {
  BestProductListSkeleton,
  PostListSkeleton,
} from "./_components/ProductSkeleton";

export const metadata = {
  title: "중고마켓",
};

export default async function MarketPage({ searchParams }) {
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
        <Suspense fallback={<PostListSkeleton />}>
          <ProductList keyword={keyword} orderBy={orderBy} page={page} />
        </Suspense>
      </section>
    </div>
  );
}
