import { useState, useEffect } from "react";

const BREAKPOINTS = {
  mobile: 767, // <= 767px
  tablet: 1199, // 768px ~ 1199px
  // desktop: >= 1200px
};

function getViewport(width) {
  if (width <= BREAKPOINTS.mobile) return "mobile";
  if (width <= BREAKPOINTS.tablet) return "tablet";
  return "desktop";
}

/**
 * 현재 뷰포트 크기를 반환하는 커스텀 훅
 * @returns {'mobile' | 'tablet' | 'desktop'}
 */
export function useResponsive() {
  const [viewport, setViewport] = useState(() =>
    getViewport(window.innerWidth),
  );

  useEffect(() => {
    const handler = () => setViewport(getViewport(window.innerWidth));
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return viewport;
}

/**
 * 뷰포트에 따른 베스트 상품 pageSize 반환
 * Desktop: 4, Tablet: 2, Mobile: 1
 */
export function useBestPageSize() {
  const viewport = useResponsive();
  const sizeMap = { desktop: 4, tablet: 2, mobile: 1 };
  return sizeMap[viewport];
}

/**
 * 뷰포트에 따른 전체 상품 pageSize 반환
 * Desktop: 10, Tablet: 6, Mobile: 4
 * (각각 2행 기준: Desktop 5*2, Tablet 3*2, Mobile 2*2)
 */
export function useProductPageSize() {
  const viewport = useResponsive();
  const sizeMap = { desktop: 10, tablet: 6, mobile: 4 };
  return sizeMap[viewport];
}
