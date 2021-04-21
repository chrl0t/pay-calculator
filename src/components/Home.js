import React from "react";
import Form from "./Form";
import { HomeStyled } from "../styles";

const Home = () => {
  return (
    <HomeStyled>
      <h1>Pay Calculator</h1>
      <Form />
    </HomeStyled>
  );
};

export default Home;
