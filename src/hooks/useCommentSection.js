import { useState } from "react";

export default function useCommentSection({ fetchComments, initialComments }) {
  const [comments, setComments] = useState(initialComments || []);
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = async () => {
    if (!fetchComments) return;
    setIsLoading(true);
    try {
      const { data } = await fetchComments();
      setComments(data || []);
    } finally {
      setIsLoading(false);
    }
  };

  return { comments, isLoading, handleRefresh };
}
