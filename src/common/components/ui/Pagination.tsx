"use client";

import Image from "next/image";

import { usePagination } from "@/common/hooks/usePagination";

type PaginationProps = {
  page: number;
  totalPages: number;
  keyword?: string;
  orderBy?: string;
};

export function Pagination({
  page,
  totalPages,
  keyword,
  orderBy,
}: PaginationProps) {
  const { getPageGroup, movePage, GROUP_SIZE } = usePagination({
    pathname: "/items",
    keyword,
    orderBy,
  });

  const startPage = getPageGroup(page);
  const endPage = Math.min(startPage + GROUP_SIZE - 1, totalPages);

  const baseButtonClass = `
    flex items-center justify-center w-10 h-10
    rounded-full border border-gray-200 cursor-pointer
    disabled:text-gray-400 disabled:cursor-not-allowed
  `;

  return (
    <nav className="flex items-center justify-center gap-1 mt-10">
      <button
        disabled={page === 1}
        onClick={() => movePage(page - 1)}
        aria-label="이전 페이지"
        className={baseButtonClass}
      >
        <Image
          src="/icons/ic-arrow-left.svg"
          width={16}
          height={16}
          alt=""
          aria-hidden="true"
        />
      </button>

      <ul className="flex gap-1">
        {Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => startPage + i,
        ).map((num) => {
          const isCurrent = page === num;
          return (
            <li key={num}>
              <button
                onClick={() => movePage(num)}
                aria-label={`${num}페이지`}
                aria-current={isCurrent ? "page" : undefined}
                className={`
                  ${baseButtonClass}
                  text-lg font-semibold
                  ${isCurrent ? "bg-primary text-white border-primary" : "bg-white text-gray-500"}
                `}
              >
                {num}
              </button>
            </li>
          );
        })}
      </ul>

      <button
        disabled={page === totalPages}
        onClick={() => movePage(page + 1)}
        aria-label="다음 페이지"
        className={baseButtonClass}
      >
        <Image
          src="/icons/ic-arrow-right.svg"
          width={16}
          height={16}
          alt=""
          aria-hidden="true"
        />
      </button>
    </nav>
  );
}
