import { type QueryKey, useQuery } from "@tanstack/react-query";

type UseCommentSectionParams<T> = {
  queryKey: QueryKey;
  fetchComments: () => Promise<{ data: T[] }>;
  initialComments: T[];
};

export default function useCommentSection<T>({
  queryKey,
  fetchComments,
  initialComments,
}: UseCommentSectionParams<T>) {
  const { data, isLoading, refetch } = useQuery({
    queryKey,
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
