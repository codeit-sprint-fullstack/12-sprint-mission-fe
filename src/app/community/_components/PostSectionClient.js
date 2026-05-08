"use client";

import { useState } from "react";
import { getArticles } from "@/lib/api/posts";
import SearchBar from "@/components/ui/SearchBar";
import SortDropDown from "@/components/ui/SortDropDown";
import PostCard from "./PostCard";
import PostSectionSkeleton from "./PostSectionSkeleton";

export default function PostSectionClient({ initialData }) {
  const [keyword, setKeyword] = useState("");
  const [orderBy, setOrderBy] = useState("recent");
  const [posts, setPosts] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = async (params) => {
    setIsLoading(true);
    const { data } = await getArticles(params);
    setPosts(data);
    setIsLoading(false);
  };

  const handleSearch = (value) => {
    setKeyword(value);
    fetchPosts({ keyword: value, orderBy });
  };

  const handleSort = (value) => {
    setOrderBy(value);
    fetchPosts({ keyword, orderBy: value });
  };

  return (
    <div>
      <div className="flex items-center w-full mb-4 gap-[0.8rem] md:mb-10 md:gap-[0.3rem] lg:mb-6 lg:gap-[1rem]">
        <SearchBar value={keyword} onChange={handleSearch} />
        <SortDropDown value={orderBy} onChange={handleSort} />
      </div>

      {isLoading ? (
        <PostSectionSkeleton />
      ) : (
        <div>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
