import addZero from "./addZero";
const formatDate = (date: Date) => {
  const newDate = new Date(date);

  return `${addZero(newDate.getHours())}:${addZero(
    newDate.getMinutes()
  )} - ${addZero(newDate.getDay())}/${addZero(newDate.getMonth())}/${addZero(
    newDate.getFullYear()
  )}`;
};
export default formatDate;
