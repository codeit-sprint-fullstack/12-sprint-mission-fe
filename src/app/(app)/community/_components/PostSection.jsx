import { getArticles } from "@/lib/api/posts";
import PostSectionClient from "./PostSectionClient";

export default async function PostSection({ searchParams }) {
  const keyword = searchParams?.keyword ?? "";
  const orderBy = searchParams?.orderBy ?? "recent";

  const { data } = await getArticles({ keyword, orderBy });

  return (
    <PostSectionClient
      initialData={data}
      initialKeyword={keyword}
      initialOrderBy={orderBy}
    />
  );
}
