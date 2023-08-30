const addZero = (a: number) => {
  if (a.toString().length <= 1) {
    return `0${a}`;
  }
  return a;
};

const formatDate = (date: Date) => {
  const newDate = new Date(date);

  return `${addZero(newDate.getHours())}:${addZero(
    newDate.getMinutes()
  )} - ${addZero(newDate.getDay())}/${addZero(newDate.getMonth())}/${addZero(
    newDate.getFullYear()
  )}`;
};
export default formatDate;
