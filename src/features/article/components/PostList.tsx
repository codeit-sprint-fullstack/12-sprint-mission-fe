import { getArticles } from "@/features/article/api";
import { PostCard } from "@/features/article/components/PostCard";

import PostLoadMore from "./PostLoadMore";

type PostListProps = {
  keyword: string;
  orderBy: string;
};

export async function PostList({ keyword, orderBy }: PostListProps) {
  const { data, meta } = await getArticles({ keyword, orderBy });

  if (data.length === 0) {
    return (
      <p className="text-center text-gray-500 py-10">
        {keyword ? "검색 결과가 없습니다." : "게시글이 없습니다."}
      </p>
    );
  }

  return (
    <>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
      {meta.totalPages > 1 && (
        <PostLoadMore
          keyword={keyword}
          orderBy={orderBy}
          initialPage={1}
          totalPages={meta.totalPages}
        />
      )}
    </>
  );
}
