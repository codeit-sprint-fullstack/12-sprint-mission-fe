import { useMemo, useState } from "react";

function validateName(value) {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return "상품명을 입력해 주세요.";
  }

  if (trimmedValue.length > 10) {
    return "상품명은 10자 이내로 입력해 주세요.";
  }

  return "";
}

function validateDescription(value) {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return "상품 소개를 입력해 주세요.";
  }

  if (trimmedValue.length < 10 || trimmedValue.length > 100) {
    return "상품 소개는 10자 이상 100자 이내로 입력해 주세요.";
  }

  return "";
}

function validatePrice(value) {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return "판매 가격을 입력해 주세요.";
  }

  if (!/^\d+$/.test(trimmedValue)) {
    return "판매 가격은 숫자만 입력해 주세요.";
  }

  return "";
}

function validateTags(tags, tagInput) {
  if (tagInput.trim().length > 5) {
    return "태그는 5글자 이내로 입력해 주세요.";
  }

  if (tags.length === 0) {
    return "태그를 1개 이상 입력해 주세요.";
  }

  return "";
}

export default function useProductFormValidation() {
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
  });
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);
  const [touched, setTouched] = useState({
    name: false,
    description: false,
    price: false,
    tags: false,
  });

  const errors = useMemo(
    () => ({
      name: validateName(values.name),
      description: validateDescription(values.description),
      price: validatePrice(values.price),
      tags: validateTags(tags, tagInput),
    }),
    [tagInput, tags, values.description, values.name, values.price]
  );

  const isFormValid = Object.values(errors).every((error) => !error);
  const isSubmitDisabled =
    !values.name.trim() ||
    !values.description.trim() ||
    !values.price.trim() ||
    tags.length === 0 ||
    !isFormValid;

  const handleChange = (field) => (event) => {
    const nextValue = event.target.value;

    setValues((prevValues) => ({
      ...prevValues,
      [field]: nextValue,
    }));
  };

  const handleBlur = (field) => () => {
    setTouched((prevTouched) => ({
      ...prevTouched,
      [field]: true,
    }));
  };

  const handleTagInputChange = (event) => {
    setTagInput(event.target.value);
  };

  const handleTagKeyDown = (event) => {
    if (event.key !== "Enter") {
      return;
    }

    event.preventDefault();

    const nextTag = tagInput.trim();

    setTouched((prevTouched) => ({
      ...prevTouched,
      tags: true,
    }));

    if (!nextTag || nextTag.length > 5) {
      return;
    }

    setTags((prevTags) => [...prevTags, nextTag]);
    setTagInput("");
  };

  const removeTag = (targetIndex) => {
    setTouched((prevTouched) => ({
      ...prevTouched,
      tags: true,
    }));

    setTags((prevTags) =>
      prevTags.filter((_, currentIndex) => currentIndex !== targetIndex)
    );
  };

  const markAllTouched = () => {
    setTouched({
      name: true,
      description: true,
      price: true,
      tags: true,
    });
  };

  const resetForm = () => {
    setValues({
      name: "",
      description: "",
      price: "",
    });
    setTagInput("");
    setTags([]);
    setTouched({
      name: false,
      description: false,
      price: false,
      tags: false,
    });
  };

  return {
    values,
    tagInput,
    tags,
    errors,
    touched,
    isSubmitDisabled,
    handleChange,
    handleBlur,
    handleTagInputChange,
    handleTagKeyDown,
    removeTag,
    markAllTouched,
    resetForm,
  };
}
