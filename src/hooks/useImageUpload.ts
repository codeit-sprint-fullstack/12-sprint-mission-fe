import { useState } from "react";

export function useImageUpload(initialUrls: string[] = []) {
  const [images, setImages] = useState<File[]>([]);
  const [existingImageUrls, setExistingImageUrls] =
    useState<string[]>(initialUrls);

  const handleRemoveExistingImage = (url: string) => {
    setExistingImageUrls((prev) => prev.filter((u) => u !== url));
  };

  return {
    images,
    setImages,
    existingImageUrls,
    setExistingImageUrls,
    handleRemoveExistingImage,
  };
}
