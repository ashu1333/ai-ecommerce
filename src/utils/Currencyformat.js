const formatter = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "INR",
});

const formatCurrency = (amount) => {
  return formatter.format(amount);
};
export default formatCurrency;
