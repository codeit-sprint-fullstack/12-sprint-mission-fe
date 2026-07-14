"use client";

import Image from "next/image";

export type TagInputProps = {
  tags: string[];
  tagInput: string;
  onTagInputChange: (value: string) => void;
  onAddTag: () => void;
  onRemoveTag: (tag: string) => void;
  isSubmitting: boolean;
};

export function TagInput({
  tags,
  tagInput,
  onTagInputChange,
  onAddTag,
  onRemoveTag,
  isSubmitting,
}: TagInputProps) {
  return (
    <>
      <div className="mb-[0.75rem]">
        <label
          htmlFor="tags"
          className="block text-2lg font-bold text-gray-800"
        >
          태그
        </label>
      </div>
      <input
        type="text"
        id="tags"
        placeholder="태그를 입력한 후 엔터를 눌러주세요."
        value={tagInput}
        onChange={(e) => onTagInputChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            onAddTag();
          }
        }}
        disabled={isSubmitting}
        className="
                  w-full h-14mb-4 lg:mb-6 px-6 py-4 rounded-lg bg-gray-100
                  placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-primary focus:ring-2
                "
      />
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <div
            key={tag}
            className="flex items-center text-lg gap-2 py-1 px-3 text-gray-800 bg-gray-100 rounded-full"
          >
            <span>#{tag}</span>

            <button type="button" onClick={() => onRemoveTag(tag)}>
              <Image
                src="/icons/ic-tag-remove.svg"
                width={20}
                height={22}
                alt="태그 삭제"
              />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
