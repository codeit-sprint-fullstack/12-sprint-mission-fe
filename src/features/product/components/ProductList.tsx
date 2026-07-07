import { Pagination } from "@/components/ui/Pagination";
import { getProducts } from "@/features/product/api";

import { ProductCard } from "./ProductCard";

type ProductListProps = {
  keyword: string;
  orderBy: string;
  page: number;
};

export async function ProductList({
  keyword,
  orderBy,
  page,
}: ProductListProps) {
  const pageSize = 10;

  const { data, meta } = await getProducts({
    keyword,
    orderBy,
    page,
    pageSize,
  });

  const totalPages = Math.ceil(meta.totalCount / pageSize);

  if (meta.totalCount === 0) {
    return (
      <p className="text-center text-gray-500 py-10">
        {keyword ? "검색 결과가 없습니다." : "상품이 없습니다."}
      </p>
    );
  }

  return (
    <>
      <ul
        className="
          grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5   
          gap-x-2 md:gap-x-4 lg:gap-x-6 gap-y-8 md:gap-y-10
        "
      >
        {data.map((product, index) => (
          <li
            key={product.id}
            className={[
              index >= 4 && "hidden md:block",
              index >= 6 && "md:hidden xl:block",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <ProductCard product={product} />
          </li>
        ))}
      </ul>

      {totalPages > 1 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          keyword={keyword}
          orderBy={orderBy}
        />
      )}
    </>
  );
}
