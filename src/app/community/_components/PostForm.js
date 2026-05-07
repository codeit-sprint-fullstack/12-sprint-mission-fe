import Button from "@/components/ui/Button";

const TITLE_MAX_LENGTH = 100;

export default function PostForm({
  heading,
  submitLabel = "등록",
  title,
  onTitleChange,
  content,
  onContentChange,
  onSubmit,
  isSubmitting,
  isValid,
}) {
  return (
    <section className="flex flex-col gap-6 md:gap-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="text-xl-bold text-gray-800">{heading}</h2>
          <Button
            type="submit"
            disabled={!isValid || isSubmitting}
            className="px-[1.4375rem] h-[2.625rem] text-lg-semibold rounded-lg"
          >
            {isSubmitting ? `${submitLabel} 중...` : submitLabel}
          </Button>
        </div>

        <div className="mb-[0.75rem]">
          <label className="block text-2lg-bold text-gray-800">*제목</label>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="제목을 입력해주세요."
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            maxLength={TITLE_MAX_LENGTH}
            disabled={isSubmitting}
            className="
              w-full h-14 mb-4 md:mb-6 px-6 py-4 rounded-lg bg-gray-100
              placeholder:text-gray-400 focus:outline-none focus:border-primary
            "
          />
          <span className="absolute bottom-8 right-6 text-xs text-gray-400">
            {title.length}/{TITLE_MAX_LENGTH}
          </span>
        </div>

        <div className="mb-[0.75rem]">
          <label className="block text-2lg-bold text-gray-800">*내용</label>
        </div>
        <textarea
          value={content}
          placeholder="내용을 입력해주세요."
          onChange={(e) => onContentChange(e.target.value)}
          disabled={isSubmitting}
          className="
            w-full h-[17.625rem] px-6 py-4 rounded-lg bg-gray-100 resize-none
            placeholder:text-gray-400 focus:outline-none focus:border-primary
          "
        />
      </form>
    </section>
  );
}
