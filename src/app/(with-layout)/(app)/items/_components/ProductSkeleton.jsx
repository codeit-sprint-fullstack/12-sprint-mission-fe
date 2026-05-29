function ProductCardSkeleton() {
  return (
    <div className="flex flex-col gap-[0.62rem] lg:gap-4">
      <div className="relative w-full aspect-square overflow-hidden rounded-[1.03675rem] bg-gray-200 animate-pulse" />

      <div className="flex flex-col gap-[0.38rem] w-full">
        <div className="h-5 w-3/4 rounded bg-gray-200 animate-pulse" />
        <div className="h-6 w-1/2 rounded bg-gray-200 animate-pulse" />

        <div className="flex items-center gap-[0.25rem] mt-1">
          <div className="w-4 h-4 rounded-full bg-gray-200 animate-pulse" />
          <div className="h-4 w-8 rounded bg-gray-200 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export function BestProductListSkeleton() {
  return (
    <ul className="flex gap-4 md:gap-6">
      <li className="flex-1 min-w-0">
        <ProductCardSkeleton />
      </li>

      <li className="hidden md:block flex-1 min-w-0">
        <ProductCardSkeleton />
      </li>

      <li className="hidden xl:block flex-1 min-w-0">
        <ProductCardSkeleton />
      </li>

      <li className="hidden xl:block flex-1 min-w-0">
        <ProductCardSkeleton />
      </li>
    </ul>
  );
}

export function PostListSkeleton() {
  return (
    <ul
      className="
        grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5
        gap-x-2 md:gap-x-4 lg:gap-x-6 gap-y-8 md:gap-y-10
      "
    >
      {Array.from({ length: 10 }).map((_, index) => (
        <li
          key={index}
          className={[
            index >= 4 && "hidden md:block",
            index >= 6 && "md:hidden xl:block",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <ProductCardSkeleton />
        </li>
      ))}
    </ul>
  );
}
