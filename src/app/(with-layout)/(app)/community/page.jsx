import { Suspense } from "react";
import BestPostList from "./_components/BestPostList";
import BestPostListSkeleton from "./_components/BestPostListSkeleton";
import PostSectionHeader from "./_components/PostSectionHeader";
import PostList from "./_components/PostList";
import PostListSkeleton from "./_components/PostListSkeleton";

export const metadata = {
  title: "자유게시판",
};

export default async function CommunityPage({ searchParams }) {
  const { keyword = "", orderBy = "recent" } = await searchParams;

  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-6 mb-6 lg:mb-10">
        <h2 className="text-xl font-bold">베스트 게시글</h2>
        <Suspense fallback={<BestPostListSkeleton />}>
          <BestPostList />
        </Suspense>
      </section>

      <section>
        <PostSectionHeader keyword={keyword} orderBy={orderBy} />
        <Suspense fallback={<PostListSkeleton />}>
          <PostList keyword={keyword} orderBy={orderBy} />
        </Suspense>{" "}
      </section>
    </div>
  );
}
