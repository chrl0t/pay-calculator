import React, { useState } from "react";
import { FormStyled } from "../styles";
import FormSubmitted from "./FormSubmitted";

const Form = () => {
  const [grossSalary, setGrossSalary] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <FormSubmitted grossSalary={grossSalary} />;
  } else {
    return (
      <FormStyled>
        <form onSubmit={handleSubmit}>
          <label>Enter your pay:</label>
          <input
            type='number'
            required
            onChange={(e) => setGrossSalary(e.target.value)}
          />
          <input type='submit' value='Submit' />
        </form>
      </FormStyled>
    );
  }
};

export default Form;
