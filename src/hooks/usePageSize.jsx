import React, { useState, useEffect } from "react";

export const usePageSize = ({ mobile, tablet, desktop }) => {
  const [pageSize, setPageSize] = useState(() => {
    if (window.innerWidth <= 743) return mobile;
    if (window.innerWidth <= 1199) return tablet;
    return desktop;
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 743) setPageSize(mobile);
      else if (window.innerWidth <= 1199) setPageSize(tablet);
      else setPageSize(desktop);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobile, tablet, desktop]);

  return pageSize;
};
