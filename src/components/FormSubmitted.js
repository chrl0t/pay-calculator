import React from "react";
import takeHomePay from "../utils/take-home-pay";
import { FormSubmittedStyled } from "../styles";

const FormSubmitted = ({ grossSalary }) => {
  const newGrossSalary = parseInt(grossSalary);
  const payslip = takeHomePay(newGrossSalary);
  const tax = payslip.tax;
  const ni = payslip.ni;
  const pay = payslip.pay;
  return (
    <FormSubmittedStyled>
      <table>
        <tr>
          <th>Tax due</th>
          <th>NI Due</th>
          <th>Net Pay</th>
        </tr>
        <td>{tax}</td>
        <td>{ni}</td>
        <td>{pay}</td>
      </table>
    </FormSubmittedStyled>
  );
};

export default FormSubmitted;
