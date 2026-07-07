import type { Metadata } from "next";
import { Suspense } from "react";

import BestPostList from "../../../../features/article/components/BestPostList";
import BestPostListSkeleton from "../../../../features/article/components/BestPostListSkeleton";
import PostList from "../../../../features/article/components/PostList";
import PostListSkeleton from "../../../../features/article/components/PostListSkeleton";
import PostSectionHeader from "../../../../features/article/components/PostSectionHeader";

export const metadata: Metadata = {
  title: "자유게시판",
};

type CommunityPageSearchParams = {
  keyword?: string;
  orderBy?: string;
};

type CommunityPageProps = {
  searchParams: Promise<CommunityPageSearchParams>;
};

export default async function CommunityPage({
  searchParams,
}: CommunityPageProps) {
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
