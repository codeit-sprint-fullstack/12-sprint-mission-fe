export const formatDate = (date) => {
  const dateString = date.toISOString().split("T")[0];
  const [year, month, day] = dateString.split("-");

  return `${year}. ${month}. ${day}`;
};
