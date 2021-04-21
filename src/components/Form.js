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
        <div>
          <form className='form' onSubmit={handleSubmit}>
            <div className='label'>
              <label>Enter your pay:</label>
            </div>
            <input
              type='number'
              required
              onChange={(e) => setGrossSalary(e.target.value)}
              className='input'
            />
            <br></br>
            <input className='button' type='submit' value='Submit' />
          </form>
        </div>
      </FormStyled>
    );
  }
};

export default Form;
