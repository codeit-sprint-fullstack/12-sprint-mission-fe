import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-hot-toast";

type LikeMutationContext = {
  prevLiked: boolean;
  prevCount: number;
};

type UseLikeCountParams = {
  initialCount: number;
  initialLiked?: boolean;
  mutateFn: (nextLiked: boolean) => Promise<unknown>;
  onSuccess?: () => void;
};

export default function useLikeCount({
  initialCount,
  initialLiked = false,
  mutateFn,
  onSuccess,
}: UseLikeCountParams) {
  const [liked, setLiked] = useState(initialLiked);
  const [count, setCount] = useState(initialCount);

  const { mutate, isPending } = useMutation<
    unknown,
    Error,
    boolean,
    LikeMutationContext
  >({
    mutationFn: (nextLiked) => mutateFn(nextLiked),

    onMutate: async (nextLiked) => {
      const prevLiked = liked;
      const prevCount = count;

      setLiked(nextLiked);
      setCount((c) => (nextLiked ? c + 1 : c - 1));

      return { prevLiked, prevCount };
    },

    onSuccess: () => {
      onSuccess?.();
    },

    onError: (err, _nextLiked, context) => {
      if (context) {
        setLiked(context.prevLiked);
        setCount(context.prevCount);
      }
      toast.error(err.message || "좋아요 반영에 실패했습니다.");
    },
  });

  const handleToggle = () => {
    if (isPending) {
      return;
    }
    mutate(!liked);
  };

  return { liked, count, handleToggle, isPending };
}
