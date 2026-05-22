"use client";

import usePostSection from "@/hooks/usePostSection";
import Button from "@/components/ui/Button";
import SearchBar from "@/components/ui/SearchBar";
import SortDropDown from "@/components/ui/SortDropDown";
import PostCard from "./PostCard";
import PostSectionSkeleton from "./PostSectionSkeleton";

export default function PostSectionClient({
  initialData,
  initialKeyword,
  initialOrderBy,
  initialHasMore,
}) {
  const {
    keyword,
    setKeyword,
    orderBy,
    posts,
    isLoading,
    hasMore,
    debouncedKeyword,
    handleOrderByChange,
    loadMore,
  } = usePostSection({
    initialData,
    initialKeyword,
    initialOrderBy,
    initialHasMore,
  });

  return (
    <div>
      <div className="flex items-center w-full mb-4 gap-[0.8rem] md:mb-10 md:gap-[0.3rem] lg:mb-6 lg:gap-[1rem]">
        <SearchBar value={keyword} onChange={setKeyword} />
        <SortDropDown value={orderBy} onChange={handleOrderByChange} />
      </div>

      {isLoading && page === 1 ? (
        <PostSectionSkeleton />
      ) : posts.length === 0 ? (
        <p className="text-center text-gray-500 py-10">
          {debouncedKeyword ? "검색 결과가 없습니다." : "게시글이 없습니다."}
        </p>
      ) : (
        <>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <PostCard post={post} />
              </li>
            ))}
          </ul>

          {isLoading && page > 1 && <PostSectionSkeleton />}

          {hasMore && (
            <div className="flex justify-center mt-8">
              <Button
                variant="outlinedBlue"
                size="lg"
                rounded="full"
                className="w-[15rem]"
                onClick={loadMore}
                disabled={isLoading}
              >
                더보기
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
