import { useEffect, useState } from "react";

// 화면 크기 상태를 확인하는 커스텀 hook
export const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { windowWidth };
};
