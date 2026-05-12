const MAX_LENGTH = 200;

export default function CommentTextarea({
  value,
  onChange,
  placeholder = "댓글을 입력해주세요.",
}) {
  return (
    <div className="relative">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={MAX_LENGTH}
        className="w-full h-[6.5rem] px-6 py-4 rounded-xl bg-gray-100 resize-none"
      />
      <span className="absolute bottom-4 right-6 text-xs text-gray-400">
        {value.length}/{MAX_LENGTH}
      </span>
    </div>
  );
}
