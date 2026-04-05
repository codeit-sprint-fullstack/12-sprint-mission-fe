import React from "react";
import styles from "./FormField.module.css";

export const FormField = ({
  type = "text",
  label,
  id,
  name,
  value,
  placeholder,
  required = true,
  autoComplete = "off",
  onChange,
  onBlur,
  onKeyDown,
  error,
}) => {
  const isTextarea = type === "textarea";

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={`text-2lg-bold ${styles.label}`}>
        {label}
      </label>

      {isTextarea ? (
        <textarea
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          onChange={onChange}
          onBlur={onBlur}
          className={`${styles.formControl} ${styles.textarea} ${error ? styles.error : ""}`}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          onChange={onChange}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          className={`${styles.formControl} ${styles.input} ${error ? styles.error : ""}`}
        />
      )}

      {error && (
        <span className={`text-lg-semibold ${styles.errorMsg}`}>{error}</span>
      )}
    </div>
  );
};
