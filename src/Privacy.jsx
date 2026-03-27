import React from "react";
import { useEffect } from "react";

const Privacy = () => {
  useEffect(() => {
    document.title = "판다마켓 | Privacy";
  }, []);
  return (
    <div>
      <h1>Privacy 페이지입니다.</h1>
    </div>
  );
};

export default Privacy;
