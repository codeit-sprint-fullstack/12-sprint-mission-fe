"use client";

import { useState, useEffect, useRef } from "react";
import { getArticles } from "@/lib/api/posts";
import useDebounce from "@/hooks/useDebounce";
import SearchBar from "@/components/ui/SearchBar";
import SortDropDown from "@/components/ui/SortDropDown";
import PostCard from "./PostCard";
import PostSectionSkeleton from "./PostSectionSkeleton";

export default function PostSectionClient({ initialData }) {
  const [keyword, setKeyword] = useState("");
  const [orderBy, setOrderBy] = useState("recent");
  const [posts, setPosts] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedKeyword = useDebounce(keyword, 300);
  const isFirstRender = useRef(true);

  const fetchPosts = async (params) => {
    setIsLoading(true);
    const { data } = await getArticles(params);
    setPosts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    fetchPosts({
      keyword: debouncedKeyword,
      orderBy,
    });
  }, [debouncedKeyword, orderBy]);

  return (
    <div>
      <div className="flex items-center w-full mb-4 gap-[0.8rem] md:mb-10 md:gap-[0.3rem] lg:mb-6 lg:gap-[1rem]">
        <SearchBar value={keyword} onChange={setKeyword} />
        <SortDropDown value={orderBy} onChange={setOrderBy} />
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
