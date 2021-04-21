const formatMoney = (number) => {
  if (typeof number !== "number") {
    return "Invalid input";
  } else {
    return number.toLocaleString("en-UK", {
      style: "currency",
      currency: "GBP"
    });
  }
};

module.exports = formatMoney;
