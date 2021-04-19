const takeHomePay = (salary) => {
  let paySlip = { tax: 0, ni: 0, pay: 0 };
  if (typeof salary !== "number" || salary < 0) {
    return "Invalid input";
  } else {
    if (salary <= 15000) {
      paySlip.pay = salary;
    }
  }
  return paySlip;
};

module.exports = takeHomePay;
