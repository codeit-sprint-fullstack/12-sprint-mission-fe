"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

type FallbackImageProps = Omit<ImageProps, "src"> & {
  src?: ImageProps["src"];
  fallbackSrc: ImageProps["src"];
};

export default function FallbackImage({
  src,
  fallbackSrc,
  alt,
  ...props
}: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState<ImageProps["src"]>(src ?? fallbackSrc);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
}
