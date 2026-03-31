import { useEffect, useState } from "react";

const MOBILE_MAX_WIDTH = 743;
const TABLET_MAX_WIDTH = 1199;

// width 받아서 기기 종류를 반환함
function getViewport(width) {
  if (width <= MOBILE_MAX_WIDTH) {
    return "mobile";
  }

  if (width <= TABLET_MAX_WIDTH) {
    return "tablet";
  }

  return "desktop";
}

// 커스텀 훅 : 브라우저의 resize 이벤트를 등록함 
export default function useResponsivePageSize() {
  const [viewport, setViewport] = useState(() => {

    return getViewport(window.innerWidth); //화면 초기값 넘겨줌 받아온 문자열이 viewport로 들어감
  });

  //이벤트 듣고있는애
  useEffect(() => {
    function handleResize() { 
      setViewport(getViewport(window.innerWidth));  // 바뀌면 setViewport 실행 -> 리렌더링 
    }

    window.addEventListener("resize", handleResize); //창 바뀌면 핸들러 함수 호출 

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const pageSizesByViewport = {
    desktop: {
      best: 4,
      general: 10,
    },
    tablet: {
      best: 2,
      general: 6,
    },
    mobile: {
      best: 1,
      general: 4,
    },
  };

  return {
    viewport,
    bestPageSize: pageSizesByViewport[viewport].best,
    generalPageSize: pageSizesByViewport[viewport].general,
  };
}
