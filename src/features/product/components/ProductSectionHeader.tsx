"use client";

import Button from "@/components/ui/Button";
import SearchBar from "@/components/ui/SearchBar";
import SortDropDown from "@/components/ui/SortDropDown";
import { useListFilters } from "@/common/hooks/useListFilters";
import type { SectionHeaderProps, SortOption } from "@/types/sort";

export function ProductSectionHeader({ keyword, orderBy }: SectionHeaderProps) {
  const sortOptions: SortOption[] = [
    { label: "최신순", value: "recent" },
    { label: "좋아요순", value: "favorite" },
  ];

  const { inputValue, setInputValue, handleOrderByChange } = useListFilters({
    pathname: "/items",
    keyword,
    orderBy,
  });

  return (
    <div className="mb-4 md:mb-6">
      {/* 모바일 */}
      <div className="md:hidden">
        <div className="flex justify-between items-center w-full mb-2">
          <h2 className="text-xl font-bold">판매 중인 상품</h2>
          <Button href="/items/new">상품 등록하기</Button>
        </div>

        <div className="flex items-center w-full gap-[0.8rem]">
          <SearchBar value={inputValue} onChange={setInputValue} />
          <SortDropDown
            value={orderBy}
            onChange={handleOrderByChange}
            options={sortOptions}
          />
        </div>
      </div>

      {/* 태블릿 / PC */}
      <div className="hidden md:flex items-center">
        <h2 className="text-xl font-bold">판매 중인 상품</h2>

        <div className="ml-auto flex items-center gap-[0.75rem]">
          <SearchBar value={inputValue} onChange={setInputValue} />
          <Button href="/items/new">상품 등록하기</Button>
          <SortDropDown
            value={orderBy}
            onChange={handleOrderByChange}
            options={sortOptions}
          />
        </div>
      </div>
    </div>
  );
}
