"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { getArticles } from "@/lib/api/posts";
import useDebounce from "@/hooks/useDebounce";
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
  const router = useRouter();
  const searchParams = useSearchParams();

  const [keyword, setKeyword] = useState(initialKeyword);
  const [orderBy, setOrderBy] = useState(initialOrderBy);
  const [posts, setPosts] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(initialHasMore);

  const debouncedKeyword = useDebounce(keyword, 300);

  // initialData 바뀌면 (서버 리렌더 후) posts 동기화
  useEffect(() => {
    setPosts(initialData);
    setPage(1);
    setHasMore(initialHasMore);
  }, [initialData, initialHasMore]);

  const updateURL = (nextKeyword, nextOrderBy, method = "replace") => {
    const params = new URLSearchParams(searchParams.toString());

    if (nextKeyword) {
      params.set("keyword", nextKeyword);
    } else {
      params.delete("keyword");
    }

    if (nextOrderBy !== "recent") {
      params.set("orderBy", nextOrderBy);
    } else {
      params.delete("orderBy");
    }

    const query = params.toString();
    router[method](`/community${query ? `?${query}` : ""}`);
  };

  const handleOrderByChange = (value) => {
    setOrderBy(value);
    updateURL(keyword, value, "push");
  };

  // 정렬/검색어 변경 시 URL 업데이트
  useEffect(() => {
    const isInitialState =
      debouncedKeyword === initialKeyword && orderBy === initialOrderBy;

    if (isInitialState) return;

    updateURL(debouncedKeyword, orderBy);
  }, [debouncedKeyword, orderBy]);

  // 더보기만 클라이언트에서 fetch
  const loadMore = async () => {
    const nextPage = page + 1;
    setIsLoading(true);

    try {
      const { data, meta } = await getArticles({
        keyword: debouncedKeyword,
        orderBy,
        page: nextPage,
      });
      setPosts((prev) => (reset ? data : [...prev, ...data]));
      setPage(nextPage);
      setHasMore(params.page < meta.totalPages);
    } catch (err) {
      toast.error(err.message || "게시글을 불러오는 데 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

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
