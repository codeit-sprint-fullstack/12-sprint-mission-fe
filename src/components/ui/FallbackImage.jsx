"use client";

import Image from "next/image";
import { useState } from "react";

export default function FallbackImage({ src, fallbackSrc, alt, ...props }) {
  const [imgSrc, setImgSrc] = useState(src || fallbackSrc);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
}
