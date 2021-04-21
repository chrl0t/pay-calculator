import styled from "styled-components";

export const HeaderStyled = styled.div`
  background-color: #6facde;
  border-radius: 5px;

  .logo-container {
    flex-direction: row;
    align-items: center;
    padding-left: 10px;
  }
`;

export const FormStyled = styled.div`
  .form {
    margin: auto;
    margin-top: 100px;
    width: 60%;
    border: 2px solid #6facde;
    padding: 10px;
    font-family: PT Sans, Arial, Helvetica, Sans-Serif;
    border-radius: 5px;
    text-align: center;
  }

  .label {
    margin: 10px;
    font-size: 35px;
    color: #6facde;
  }

  .input {
    margin-bottom: 10px;
    border: 2px solid #6facde;
    border-radius: 5px;
    height: 20px;
  }

  .button {
    background-color: #6facde;
    color: white;
    font-family: PT Sans, Arial, Helvetica, Sans-Serif;
    font-size: 25px;
    border: none;
    border-radius: 5px;
    font-weight: 100;
    padding: 5px;
  }
`;
