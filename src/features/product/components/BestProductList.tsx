import { getProducts } from "@/features/product/api";

import { ProductCard } from "./ProductCard";

export async function BestProductList() {
  const { data } = await getProducts({ pageSize: 4, orderBy: "favorite" });
  const [first, second, third, fourth] = data;

  return (
    <ul className="flex gap-4 md:gap-6">
      {first && (
        <li className="flex-1 min-w-0">
          <ProductCard product={first} />
        </li>
      )}

      {second && (
        <li className="hidden md:block flex-1 min-w-0">
          <ProductCard product={second} />
        </li>
      )}

      {third && (
        <li className="hidden xl:block flex-1 min-w-0">
          <ProductCard product={third} />
        </li>
      )}

      {fourth && (
        <li className="hidden xl:block flex-1 min-w-0">
          <ProductCard product={fourth} />
        </li>
      )}
    </ul>
  );
}
