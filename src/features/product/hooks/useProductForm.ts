import { useState } from "react";

import type { Product } from "@/features/product/type";

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

  const handleAddTag = () => {
    const value = tagInput.trim();
    if (!value) return;

    setTags((prev) => (prev.includes(value) ? prev : [...prev, value]));
    setTagInput("");
  };

  const handleRemoveTag = (tag: string) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };

  const isValid = name.trim().length > 0 && description.trim().length >= 10;

  return {
    values: {
      name,
      description,
      price,
      tags,
      tagInput,
    },
    setters: { setName, setDescription, setPrice, setTagInput },
    handlers: { handleAddTag, handleRemoveTag },
    isValid,
  };
}
