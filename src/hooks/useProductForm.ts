import { useState } from "react";

import type { Product } from "@/types/product";

type UseProductFormOptions = {
  initialProduct?: Product;
};

export function useProductForm({ initialProduct }: UseProductFormOptions = {}) {
  const [name, setName] = useState(initialProduct?.name ?? "");
  const [description, setDescription] = useState(
    initialProduct?.description ?? "",
  );
  const [price, setPrice] = useState(
    initialProduct ? String(initialProduct.price) : "",
  );
  const [tags, setTags] = useState<string[]>(initialProduct?.tags ?? []);
  const [tagInput, setTagInput] = useState("");

  const [existingImageUrls, setExistingImageUrls] = useState<string[]>(
    initialProduct?.imageUrls ?? [],
  );
  const [images, setImages] = useState<File[]>([]);

  const handleAddTag = () => {
    const value = tagInput.trim();
    if (!value) return;

    setTags((prev) => (prev.includes(value) ? prev : [...prev, value]));
    setTagInput("");
  };

  const handleRemoveTag = (tag: string) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };

  const handleRemoveExistingImage = (url: string) => {
    setExistingImageUrls((prev) => prev.filter((u) => u !== url));
  };

  const isValid = name.trim().length > 0 && description.trim().length >= 10;

  return {
    values: {
      name,
      description,
      price,
      tags,
      tagInput,
      images,
      existingImageUrls,
    },
    setters: { setName, setDescription, setPrice, setTagInput, setImages },
    handlers: { handleAddTag, handleRemoveTag, handleRemoveExistingImage },
    isValid,
  };
}
