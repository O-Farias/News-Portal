import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #282c34;
  color: white;
  text-align: center;
  padding: 1rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Portal de Notícias</h1>
    </HeaderContainer>
  );
};

export default Header;
