import { useState } from "react";

export const useRegistration = () => {
  const initReg = {
    name: "",
    description: "",
    price: "",
    tags: [],
  };
  const [reg, setReg] = useState(initReg);
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");

  const handleOnChange = (e) => {
    const { value, name } = e.target;

    if (name === "tags") {
      setTag(value);
    } else {
      setReg({ ...reg, [name]: value });
    }
  };

  // 엔터 키 입력을 가로채는 함수
  const handleKeyDown = (e) => {
    // 한글 입력 시 엔터키가 두 번 작동하는 오류 방지용 코드
    if (e.nativeEvent.isComposing) return;

    if (e.key === "Enter") {
      e.preventDefault();

      const trimmedTag = tag.trim();

      // 빈 값이 아닐 때만 태그 배열에 추가
      if (trimmedTag !== "") {
        const validTag = tags.find((t) => t === trimmedTag);
        if (validTag) {
          alert("중복되지 않는 태그를 입력해주세요");
          return;
        }
        const addTag = [...tags, trimmedTag];
        setTags(addTag);
        setReg({ ...reg, tags: addTag });
        setTag("");
      }
    }
  };

  const handleTagDelete = (key) => {
    const deletedTags = tags.filter((t) => t !== key);
    setTags(deletedTags);
    setReg({ ...reg, tags: deletedTags });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reg),
      });
      const data = res.json();

      setTags([]);
      setTag("");
      setReg(initReg);

      console.log("상품 등록 완료! => ", data);
    } catch (error) {
      console.error(error);
    }
  };

  // Debouncing 추가해보기

  return {
    reg,
    tag,
    tags,
    handleOnChange,
    handleOnSubmit,
    handleKeyDown,
    handleTagDelete,
  };
};
