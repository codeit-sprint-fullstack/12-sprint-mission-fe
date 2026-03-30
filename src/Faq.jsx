import React from "react";
import { useEffect } from "react";

const Faq = () => {
  useEffect(() => {
    document.title = "판다마켓 | FAQ";
  }, []);
  return (
    <div>
      <h1>FAQ 페이지입니다.</h1>
    </div>
  );
};

export default Faq;
