"use client";

import { Button } from "@/common/components/ui/Button";
import { SearchBar } from "@/common/components/ui/SearchBar";
import { SortDropDown } from "@/common/components/ui/SortDropDown";
import { useListFilters } from "@/common/hooks/useListFilters";
import type { SectionHeaderProps, SortOption } from "@/common/types/list";

export function PostSectionHeader({ keyword, orderBy }: SectionHeaderProps) {
  const sortOptions: SortOption[] = [
    { label: "최신순", value: "recent" },
    { label: "좋아요순", value: "favorite" },
  ];

  const { inputValue, setInputValue, handleOrderByChange } = useListFilters({
    pathname: "/community",
    keyword,
    orderBy,
  });

  return (
    <>
      <div className="flex justify-between items-center w-full mb-4 md:mb-12 lg:mb-6">
        <h2 className="text-xl font-bold">게시글</h2>
        <Button href="/community/write">글쓰기</Button>
      </div>
      <div className="flex items-center w-full mb-4 gap-[0.8rem] md:mb-10 md:gap-[0.3rem] lg:mb-6 lg:gap-[1rem]">
        <SearchBar value={inputValue} onChange={setInputValue} />
        <SortDropDown
          value={orderBy}
          onChange={handleOrderByChange}
          options={sortOptions}
        />
      </div>
    </>
  );
}
