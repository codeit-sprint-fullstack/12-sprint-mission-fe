"use client";

import { useState, useEffect, useRef } from "react";
import { getArticles } from "@/lib/api/posts";
import useDebounce from "@/hooks/useDebounce";
import Button from "@/components/ui/Button";
import SearchBar from "@/components/ui/SearchBar";
import SortDropDown from "@/components/ui/SortDropDown";
import PostCard from "./PostCard";
import PostSectionSkeleton from "./PostSectionSkeleton";

export default function PostSectionClient({ initialData }) {
  const [keyword, setKeyword] = useState("");
  const [orderBy, setOrderBy] = useState("recent");
  const [posts, setPosts] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const debouncedKeyword = useDebounce(keyword, 300);
  const isFirstRender = useRef(true);

  const fetchPosts = async (params, reset = false) => {
    setIsLoading(true);

    const { data, meta } = await getArticles(params);

    setPosts((prev) => (reset ? data : [...prev, ...data]));

    setHasMore(params.page < meta.totalPages);
    setIsLoading(false);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setPage(1);

    fetchPosts(
      {
        keyword: debouncedKeyword,
        orderBy,
        page: 1,
      },
      true,
    );
  }, [debouncedKeyword, orderBy]);

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);

    fetchPosts({
      keyword: debouncedKeyword,
      orderBy,
      page: nextPage,
    });
  };

  return (
    <div>
      <div className="flex items-center w-full mb-4 gap-[0.8rem] md:mb-10 md:gap-[0.3rem] lg:mb-6 lg:gap-[1rem]">
        <SearchBar value={keyword} onChange={setKeyword} />
        <SortDropDown value={orderBy} onChange={setOrderBy} />
      </div>

      {isLoading && page === 1 ? (
        <PostSectionSkeleton />
      ) : (
        <>
          <div>
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

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
