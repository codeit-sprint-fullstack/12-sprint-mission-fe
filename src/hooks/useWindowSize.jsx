import React, { useEffect, useState } from "react";

const useWindowSize = () => {
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 1200) {
      setIsTablet(false);
      setIsMobile(false);
      return;
    }

    if (744 <= window.innerWidth < 1200) {
      setIsTablet(true);
    } else {
      setIsTablet(false);
    }

    if (window.innerWidth < 744) {
      setIsMobile(true);
      setIsTablet(false);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isTablet,
    isMobile,
  };
};

export default useWindowSize;
