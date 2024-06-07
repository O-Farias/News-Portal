import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
`;

const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  font-size: 1.1rem;

  &:hover {
    text-decoration: underline;
    color: #007bff;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/technology">Tecnologia</NavbarLink>
      <NavbarLink to="/sports">Esportes</NavbarLink>
      <NavbarLink to="/business">Negócios</NavbarLink>
      <NavbarLink to="/health">Saúde</NavbarLink>
      <NavbarLink to="/entertainment">Entretenimento</NavbarLink>
      <NavbarLink to="/fashion">Moda</NavbarLink>
    </NavbarContainer>
  );
};

export default Navbar;
