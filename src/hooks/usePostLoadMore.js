import { useState } from "react";
import { toast } from "react-hot-toast";
import { getArticles } from "@/lib/api/posts";

export default function usePostLoadMore({
  keyword,
  orderBy,
  initialPage,
  totalPages,
}) {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(initialPage);
  const [isLoading, setIsLoading] = useState(false);
  const hasMore = page < totalPages;

  const loadMore = async () => {
    const nextPage = page + 1;
    setIsLoading(true);
    try {
      const { data } = await getArticles({ keyword, orderBy, page: nextPage });
      setPosts((prev) => [...prev, ...data]);
      setPage(nextPage);
    } catch (err) {
      toast.error(err.message || "게시글을 불러오는 데 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return { posts, isLoading, hasMore, loadMore };
}
