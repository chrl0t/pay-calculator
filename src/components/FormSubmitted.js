import React from "react";
import takeHomePay from "../utils/take-home-pay";

const FormSubmitted = ({ grossSalary }) => {
  const newGrossSalary = parseInt(grossSalary);
  const payslip = takeHomePay(newGrossSalary);
  const tax = payslip.tax;
  const ni = payslip.ni;
  const pay = payslip.pay;
  return (
    <div>
      <h1>Form submitted</h1>
      <h1>tax: {tax}</h1>
      <h1>ni: {ni}</h1>
      <h1>pay: {pay}</h1>
    </div>
  );
};

export default FormSubmitted;
