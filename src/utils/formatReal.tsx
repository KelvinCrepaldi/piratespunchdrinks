const formatReal = (value: number): string => {
  const formatedValue = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return formatedValue;
};

export default formatReal;
