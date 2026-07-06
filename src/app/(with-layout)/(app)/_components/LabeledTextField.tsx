"use client";

import type { BaseFieldProps } from "@/types/form-field";

type LabeledTextFieldProps = BaseFieldProps & {
  maxLength?: number;
  disabled?: boolean;
  as?: "input" | "textarea";
  type?: string;
  required?: boolean;
};

export function LabeledTextField({
  id,
  label,
  value,
  onChange,
  placeholder,
  maxLength,
  disabled,
  as = "input",
  type = "text",
  error,
  required = true,
}: LabeledTextFieldProps) {
  const showCount = maxLength !== undefined;
  const sharedClassName = `
    w-full px-6 py-4 rounded-lg bg-gray-100
    placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-primary focus:ring-2
  `;

  return (
    <div className="mb-4 lg:mb-6">
      <div className="mb-[0.75rem]">
        <label htmlFor={id} className="block text-2lg font-bold text-gray-800">
          {required && "*"}
          {label}
        </label>
      </div>
      <div className="relative">
        {as === "textarea" ? (
          <textarea
            id={id}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            aria-invalid={!!error}
            className={`${sharedClassName} h-[17.625rem] resize-none`}
          />
        ) : (
          <input
            id={id}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            maxLength={maxLength}
            disabled={disabled}
            className={`${sharedClassName} h-14`}
          />
        )}
        {showCount && (
          <span className="absolute bottom-8 right-6 text-xs text-gray-400">
            {value.length}/{maxLength}
          </span>
        )}
      </div>
      {error && <p className="mt-2 text-sm text-error">{error}</p>}
    </div>
  );
}
