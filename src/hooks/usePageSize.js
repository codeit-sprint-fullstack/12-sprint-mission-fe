import { useEffect, useState } from "react";

const PAGE_SIZE = {
  best: { desktop: 4, tablet: 2, mobile: 1 },
  total: { desktop: 10, tablet: 6, mobile: 4 },
};

const usePageSize = (type) => {
  const [pageSize, setPageSize] = useState(PAGE_SIZE[type].desktop);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPageSize(PAGE_SIZE[type].mobile);
      } else if (window.innerWidth < 1024) {
        setPageSize(PAGE_SIZE[type].tablet);
      } else {
        setPageSize(PAGE_SIZE[type].desktop);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
  }, [type]);

  return pageSize;
};

export default usePageSize;
