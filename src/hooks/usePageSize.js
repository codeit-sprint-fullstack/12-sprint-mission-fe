import { useEffect, useState } from "react";

const PAGE_SIZE = {
  best: { desktop: 4, tablet: 2, mobile: 1 },
  total: { desktop: 10, tablet: 6, mobile: 4 },
};

const usePageSize = (type) => {
  //   const [pageSize, setPageSize] = useState(PAGE_SIZE[type].desktop);
  const [pageSize, setPageSize] = useState(() => {
    // 초기값 재설정
    if (window.innerWidth < 769) return PAGE_SIZE[type].mobile;
    if (window.innerWidth < 1025) return PAGE_SIZE[type].tablet;
    return PAGE_SIZE[type].desktop;
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 769) {
        setPageSize(PAGE_SIZE[type].mobile);
      } else if (window.innerWidth < 1025) {
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
