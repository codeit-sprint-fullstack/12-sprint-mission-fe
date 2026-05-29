import { getProducts } from "@/lib/api/products";
import Pagination from "@/components/ui/Pagination";
import PostCard from "./ProductCard";

export default async function PostList({ keyword, orderBy, page }) {
  const pageSize = 10;

  const { totalCount, list } = await getProducts({
    keyword,
    orderBy,
    page,
    pageSize,
  });

  const totalPages = Math.ceil(totalCount / pageSize);

  if (totalCount === 0) {
    return (
      <p className="text-center text-gray-500 py-10">
        {keyword ? "검색 결과가 없습니다." : "게시글이 없습니다."}
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
        {list.map((product, index) => (
          <li
            key={product.id}
            className={[
              index >= 4 && "hidden md:block",
              index >= 6 && "md:hidden xl:block",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <PostCard product={product} />
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
