"use client";

import { useEffect, useState } from "react";
import { getArticleList } from "@/lib/ArticleService";

export default function useArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [keyword, setKeyword] = useState("");
  const [debouncedKeyword, setDebouncedKeyword] = useState("");

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedKeyword(keyword);
      setPage(1);
    }, 300);

    return () => clearTimeout(timer);
  }, [keyword]);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await getArticleList(page, pageSize, debouncedKeyword);

        setArticles(res.list || []);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [page, pageSize, debouncedKeyword]);

  return {
    articles,
    loading,
    error,
    keyword,
    setKeyword,
    page,
    setPage,
    pageSize,
  };
}
