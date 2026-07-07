import type { ImageUploaderProps } from "@/app/(with-layout)/(app)/_components/ImageUploader";

export type BaseFormProps = {
  heading: string;
  submitLabel?: string;
  onSubmit: () => void;
  isValid: boolean;
  isSubmitting: boolean;
};

export type BaseFormWithImagesProps = BaseFormProps &
  Omit<ImageUploaderProps, "label" | "isSubmitting">;

export type BaseFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
};
