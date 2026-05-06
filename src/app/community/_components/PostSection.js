"use client";

import { useState, useEffect } from "react";
import { getArticles } from "@/lib/api/posts";
import SearchBar from "@/components/ui/SearchBar";
import SortDropDown from "@/components/ui/SortDropDown";
import PostCard from "./PostCard";

export default function PostSection() {
  const [keyword, setKeyword] = useState("");
  const [orderBy, setOrderBy] = useState("recent");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await getArticles({ keyword, orderBy });
      setPosts(data);
    };

    fetchPosts();
  }, [keyword, orderBy]);

  return (
    <div>
      <div className="flex items-center w-full mb-4 gap-[0.8rem] md:mb-10 md:gap-[0.3rem] lg:mb-6 lg:gap-[1rem]">
        <SearchBar value={keyword} onChange={setKeyword} />
        <SortDropDown value={orderBy} onChange={setOrderBy} />
      </div>

      <div>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
