const takeHomePay = (salary) => {
  if (typeof salary !== "number" || salary < 0) {
    return "Invalid input";
  }
};

module.exports = takeHomePay;
