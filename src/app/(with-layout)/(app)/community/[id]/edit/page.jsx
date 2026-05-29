import { notFound } from "next/navigation";
import { getArticle } from "@/lib/api/posts";
import PostEditClient from "./_components/PostEditClient";

export async function generateMetadata({ params }) {
  const { id } = await params;

  try {
    const { data: post } = await getArticle(id);
    return {
      title: `${post.title} 수정`,
    };
  } catch {
    return {
      title: "게시글 수정",
    };
  }
}

export default async function PostEditPage({ params }) {
  const { id } = await params;

  try {
    const { data: post } = await getArticle(id);
    return <PostEditClient post={post} />;
  } catch (err) {
    if (err.status === 404) {
      notFound();
    }
    throw err;
  }
}
