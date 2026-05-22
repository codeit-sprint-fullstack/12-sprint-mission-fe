import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { getArticles } from "@/lib/api/posts";
import useDebounce from "@/hooks/useDebounce";

export default function usePostSection({
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

  return {
    keyword,
    setKeyword,
    orderBy,
    posts,
    isLoading,
    hasMore,
    debouncedKeyword,
    handleOrderByChange,
    loadMore,
  };
}
