import { useState } from "react";

const useProductValidation = () => {
  const [nameError, setNameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [tagInputError, setTagInputError] = useState("");

  const validateName = (value) => {
    if (value.length < 1 || value.length > 10) {
      setNameError("10자 이내로 입력해주세요");
    } else {
      setNameError("");
    }
  };

  const validateDescription = (value) => {
    if (value.length < 10) {
      setDescriptionError("10자 이상 입력해주세요");
    } else if (value.length > 100) {
      setDescriptionError("100자 이내로 입력해주세요");
    } else {
      setDescriptionError("");
    }
  };

  const validatePrice = (value) => {
    if (isNaN(value) || value === "") {
      setPriceError("숫자로 입력해주세요");
    } else {
      setPriceError("");
    }
  };

  const validateTagInput = (value) => {
    if (value.length > 5) {
      setTagInputError("5글자 이내로 입력해주세요");
    } else {
      setTagInputError("");
    }
  };

  return {
    nameError,
    descriptionError,
    priceError,
    tagInputError,
    validateName,
    validateDescription,
    validatePrice,
    validateTagInput,
  };
};

export default useProductValidation;
