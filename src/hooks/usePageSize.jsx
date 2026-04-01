import React, { useState, useEffect } from "react";

export const usePageSize = ({ mobile, tablet, desktop }) => {
  const [pageSize, setPageSize] = useState(null);

  useEffect(() => {
    const getPageSize = () => {
      if (window.innerWidth <= 743) return mobile;
      if (window.innerWidth <= 1199) return tablet;
      return desktop;
    };

    const handleResize = () => setPageSize(getPageSize());

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobile, tablet, desktop]);

  return pageSize;
};
