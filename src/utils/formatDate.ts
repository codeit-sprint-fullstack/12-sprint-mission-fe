export const formatDate = (date: Date): string => {
  if (!date || isNaN(date.getTime())) {
    return "날짜 없음";
  }

  const dateString = date.toISOString().split("T")[0];
  const [year, month, day] = dateString!.split("-");

  return `${year}. ${month}. ${day}`;
};

export const getRelativeTime = (dateString: Date): string => {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";
  const now = new Date();

  const diff = now.getTime() - date.getTime();

  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = day * 365;

  // 조건에 따라 상대 시간 반환
  if (diff < minute) {
    return "방금 전";
  } else if (diff < hour) {
    return Math.floor(diff / minute) + "분 전";
  } else if (diff < day) {
    return Math.floor(diff / hour) + "시간 전";
  } else if (diff < month) {
    return Math.floor(diff / day) + "일 전";
  } else if (diff < year) {
    return Math.floor(diff / month) + "달 전";
  } else {
    return Math.floor(diff / year) + "년 전";
  }
};
