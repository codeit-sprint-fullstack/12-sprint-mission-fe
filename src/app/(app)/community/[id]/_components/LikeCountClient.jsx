"use client";

import { useState } from "react";
import LikeCount from "@/components/ui/LikeCount";

export default function LikeCountClient({ initialCount }) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(initialCount);

  const handleToggle = () => {
    const next = !liked;
    setLiked(next);
    setCount((prev) => (next ? prev + 1 : prev - 1));
  };

  return <LikeCount liked={liked} count={count} onToggle={handleToggle} />;
}
