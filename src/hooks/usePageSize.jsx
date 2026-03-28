import React, { useState, useEffect } from "react";

export const usePageSize = (breakpoints) => {
  const getPageSize = () => {
    if (window.innerWidth <= 743) return breakpoints.mobile;
    if (window.innerWidth <= 1199) return breakpoints.tablet;
    return breakpoints.desktop;
  };

  const [pageSize, setPageSize] = useState(getPageSize);

  useEffect(() => {
    const handleResize = () => setPageSize(getPageSize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return pageSize;
};
