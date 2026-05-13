import { getArticles } from "@/lib/api/posts";
import PostSectionClient from "./PostSectionClient";

export default async function PostSection({ searchParams }) {
  const resolvedParams = await searchParams;

  const keyword = resolvedParams?.keyword ?? "";
  const orderBy = resolvedParams?.orderBy ?? "recent";

  const { data, meta } = await getArticles({ keyword, orderBy });

  return (
    <PostSectionClient
      initialData={data}
      initialKeyword={keyword}
      initialOrderBy={orderBy}
      initialHasMore={1 < meta.totalPages}
    />
  );
}
