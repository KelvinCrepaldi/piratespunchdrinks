const addZero = (a: number) => {
  if (a.toString().length <= 1) {
    return `0${a}`;
  }
  return a;
};

export default addZero;
