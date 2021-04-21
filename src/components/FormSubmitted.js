import React from "react";

const FormSubmitted = ({ grossSalary }) => {
  return (
    <div>
      <h1>Form submitted</h1>
      <h1>{grossSalary}</h1>
    </div>
  );
};

export default FormSubmitted;
