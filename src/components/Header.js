import React from "react";
import { HeaderStyled } from "../styles";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <HeaderStyled>
      <div className='logo-container'>
        <img src={logo} alt='logo' className='logo' />
      </div>
    </HeaderStyled>
  );
};

export default Header;
