"use client";

import { useState, useEffect } from "react";
import { getArticles } from "@/lib/api/posts";
import { usePageSize } from "@/hooks/usePageSize";
import BestPostCard from "./BestPostCard";

export default function BestPostSection() {
  const [posts, setPosts] = useState([]);

  const pageSize = usePageSize({ mobile: 1, tablet: 2, desktop: 3 });

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await getArticles({ pageSize: 3 });
      setPosts(data);
    };

    fetchPosts();
  }, [pageSize]);

  return (
    <div className="flex gap-4 md:gap-6">
      {posts.slice(0, pageSize).map((post) => (
        <BestPostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
