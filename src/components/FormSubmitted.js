import React from "react";
import takeHomePay from "../utils/take-home-pay";
import formatMoney from "../utils/format-money";
import { FormSubmittedStyled } from "../styles";

const FormSubmitted = ({ grossSalary }) => {
  const newGrossSalary = parseInt(grossSalary);
  const payslip = takeHomePay(newGrossSalary);
  const tax = formatMoney(payslip.tax);
  const ni = formatMoney(payslip.ni);
  const pay = formatMoney(payslip.pay);
  return (
    <FormSubmittedStyled>
      <table>
        <tbody>
          <tr>
            <th>Tax due</th>
            <th>NI Due</th>
            <th>Net Pay</th>
          </tr>
          <tr>
            <td>{tax}</td>
            <td>{ni}</td>
            <td>{pay}</td>
          </tr>
        </tbody>
      </table>
    </FormSubmittedStyled>
  );
};

export default FormSubmitted;
