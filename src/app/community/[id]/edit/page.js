import { getArticle } from "@/lib/api/posts";
import PostEditClient from "./_components/PostEditClient";

export default async function PostEditPage({ params }) {
  const { id } = await params;
  const { data: post } = await getArticle(id);

  return <PostEditClient post={post} />;
}
