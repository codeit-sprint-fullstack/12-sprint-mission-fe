import { useQuery } from "@tanstack/react-query";

export default function useCommentSection({
  queryKey,
  fetchComments,
  initialComments,
}) {
  const { data, isLoading, refetch } = useQuery({
    queryKey: queryKey,
    queryFn: async () => {
      const response = await fetchComments();
      return response.data || [];
    },
    initialData: initialComments,
  });

  return {
    comments: data,
    isLoading,
    handleRefresh: refetch,
  };
}
