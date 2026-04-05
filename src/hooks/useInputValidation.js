const useInputValidation = ({ name, description, price, tag, touched }) => {
  const errors = {
    name: "",
    description: "",
    price: "",
    tags: "",
  };

  // 상품명 유효성 검사
  if (touched.name) {
    if (name.trim().length < 1) {
      errors.name = "1자 이상 입력해주세요";
    } else if (name.length > 10) {
      errors.name = "10자 이내로 입력해주세요";
    }
  }

  // 상품 소개 유효성 검사
  if (touched.description) {
    if (description.trim().length < 10) {
      errors.description = "10자 이상 입력해주세요";
    } else if (description.length > 100) {
      errors.description = "100자 이내로 입력해주세요";
    }
  }

  // 판매 가격 유효성 검사
  if (touched.price) {
    if (price.trim().length < 1) {
      errors.price = "1자 이상 입력해주세요";
    } else if (!/^\d+$/.test(price.trim())) {
      errors.price = "숫자로 입력해주세요";
    }
  }

  // 태그 유효성 검사
  if (touched.tags) {
    if (tag.length > 5) {
      errors.tags = "5글자 이내로 입력해주세요";
    }
  }

  // 모든 조건이 만족하는지 여부
  const isInputsValid =
    name.trim().length >= 1 &&
    name.length <= 10 &&
    description.trim().length >= 10 &&
    description.length <= 100 &&
    price.trim().length >= 1 &&
    /^\d+$/.test(price.trim()) &&
    tag.length <= 5;

  return { errors, isInputsValid };
};

export default useInputValidation;
