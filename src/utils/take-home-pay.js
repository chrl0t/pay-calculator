const takeHomePay = (salary) => {
  let paySlip = { tax: 0, ni: 0, pay: 0 };
  if (typeof salary !== "number" || salary < 0) {
    return "Invalid input";
  } else {
    if (salary <= 15000) {
      paySlip.pay = salary;
    } else if (salary <= 50000) {
      const tax = (salary - 15000) * 0.2;
      const ni = (salary - 15000) * 0.12;
      const pay = salary - tax - ni;
      paySlip.tax = tax;
      paySlip.ni = ni;
      paySlip.pay = pay;
    } else {
      const tax = (50000 - 15000) * 0.2 + (salary - 50000) * 0.4;
      const ni = (50000 - 15000) * 0.12 + (salary - 50000) * 0.02;
      const pay = salary - tax - ni;
      paySlip.tax = tax;
      paySlip.ni = ni;
      paySlip.pay = pay;
    }
  }
  return paySlip;
};

module.exports = takeHomePay;
