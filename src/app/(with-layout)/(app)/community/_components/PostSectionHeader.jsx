"use client";

import usePostSectionHeader from "@/hooks/usePostSectionHeader";
import Button from "@/components/ui/Button";
import SearchBar from "@/components/ui/SearchBar";
import SortDropDown from "@/components/ui/SortDropDown";

export default function PostSectionHeader({ keyword, orderBy }) {
  const { inputValue, setInputValue, handleOrderByChange } =
    usePostSectionHeader({ keyword, orderBy });

  return (
    <>
      <div className="flex justify-between items-center w-full mb-4 md:mb-12 lg:mb-6">
        <h2 className="text-xl font-bold">게시글</h2>
        <Button href="/community/write">글쓰기</Button>
      </div>
      <div className="flex items-center w-full mb-4 gap-[0.8rem] md:mb-10 md:gap-[0.3rem] lg:mb-6 lg:gap-[1rem]">
        <SearchBar value={inputValue} onChange={setInputValue} />
        <SortDropDown value={orderBy} onChange={handleOrderByChange} />
      </div>
    </>
  );
}
