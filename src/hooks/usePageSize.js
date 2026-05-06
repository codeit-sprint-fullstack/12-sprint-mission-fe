"use client";

import { useState, useEffect } from "react";

export const usePageSize = ({ mobile, tablet, desktop }) => {
  const [pageSize, setPageSize] = useState(desktop);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 743) setPageSize(mobile);
      else if (window.innerWidth <= 1279) setPageSize(tablet);
      else setPageSize(desktop);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobile, tablet, desktop]);

  return pageSize;
};
