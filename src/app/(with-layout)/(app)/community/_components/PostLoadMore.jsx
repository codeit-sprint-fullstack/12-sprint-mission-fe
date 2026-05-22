"use client";

import usePostLoadMore from "@/hooks/usePostLoadMore";
import Button from "@/components/ui/Button";

export default function PostLoadMore({
  keyword,
  orderBy,
  initialPage,
  totalPages,
}) {
  const { posts, isLoading, hasMore, loadMore } = usePostLoadMore({
    keyword,
    orderBy,
    initialPage,
    totalPages,
  });

  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
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
  );
}
