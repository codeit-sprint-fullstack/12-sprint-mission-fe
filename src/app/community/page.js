import { getArticles } from "@/lib/api/posts";
import BestPostCard from "./_components/BestPostCard";

export const metadata = {
  title: "자유게시판",
};

export default async function CommunityPage() {
  const { data: posts } = await getArticles({ pageSize: 3 });

  return (
    <div className="flex flex-col gap-10 mt-6">
      <section className="flex flex-col gap-6">
        <h2 className="text-xl-bold">베스트 게시글</h2>
        <div className="flex gap-6">
          {posts.map((post) => (
            <BestPostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-xl-bold">게시글</h2>
      </section>
    </div>
  );
}
