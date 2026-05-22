import { useState } from "react";
import { getArticleComments } from "@/lib/api/posts";

export default function useCommentSection({ postId, initialComments }) {
  const [comments, setComments] = useState(initialComments);
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = async () => {
    setIsLoading(true);
    try {
      const { data } = await getArticleComments({ articleId: postId });
      setComments(data);
    } finally {
      setIsLoading(false);
    }
  };

  return { comments, isLoading, handleRefresh };
}
