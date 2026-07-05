import Button from "@/components/ui/Button";

const TITLE_MAX_LENGTH = 100;

type PostFormProps = {
  heading: string;
  submitLabel?: string;
  title: string;
  onTitleChange: (value: string) => void;
  content: string;
  onContentChange: (value: string) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
  isValid: boolean;
};

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
}: PostFormProps) {
  return (
    <section className="flex flex-col gap-6 md:gap-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="text-xl font-bold text-gray-800">{heading}</h2>
          <Button
            type="submit"
            disabled={!isValid || isSubmitting}
            loading={isSubmitting}
          >
            {submitLabel}
          </Button>
        </div>

        <div className="mb-[0.75rem]">
          <label
            htmlFor="title"
            className="block text-2lg font-bold text-gray-800"
          >
            *제목
          </label>
        </div>
        <div className="relative">
          <input
            type="text"
            id="title"
            placeholder="제목을 입력해주세요."
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            maxLength={TITLE_MAX_LENGTH}
            disabled={isSubmitting}
            className="
              w-full h-14 mb-4 md:mb-6 px-6 py-4 rounded-lg bg-gray-100
              placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-primary focus:ring-2
            "
          />
          <span className="absolute bottom-8 right-6 text-xs text-gray-400">
            {title.length}/{TITLE_MAX_LENGTH}
          </span>
        </div>

        <div className="mb-[0.75rem]">
          <label
            htmlFor="content"
            className="block text-2lg font-bold text-gray-800"
          >
            *내용
          </label>
        </div>
        <textarea
          id="content"
          value={content}
          placeholder="내용을 입력해주세요."
          onChange={(e) => onContentChange(e.target.value)}
          disabled={isSubmitting}
          className="
            w-full h-[17.625rem] px-6 py-4 rounded-lg bg-gray-100 resize-none
            placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-primary focus:ring-2
          "
        />
      </form>
    </section>
  );
}
