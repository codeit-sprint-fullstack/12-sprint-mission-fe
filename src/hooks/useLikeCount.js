import { useState } from "react";

export default function useLikeCount({ initialCount }) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(initialCount);

  const handleToggle = () => {
    const next = !liked;
    setLiked(next);
    setCount((prev) => (next ? prev + 1 : prev - 1));
  };

  return { liked, count, handleToggle };
}
