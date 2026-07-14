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

export type ImageUploaderProps = {
  label?: string;
  images: File[];
  onImagesChange: (files: File[]) => void;
  existingImageUrls?: string[];
  onRemoveExistingImage?: (url: string) => void;
  isSubmitting: boolean;
};
