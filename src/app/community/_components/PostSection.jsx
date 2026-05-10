import { getArticles } from "@/lib/api/posts";
import PostSectionClient from "./PostSectionClient";

export default async function PostSection() {
  const { data } = await getArticles({
    keyword: "",
    orderBy: "recent",
  });

  return <PostSectionClient initialData={data} />;
}
