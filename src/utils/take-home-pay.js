const takeHomePay = (salary) => {
  if (typeof salary !== "number" || salary < 0) {
    return "Invalid input";
  } else {
    return { tax: 0, ni: 0, pay: 0 };
  }
};

module.exports = takeHomePay;
