import React from "react";
import styled from "styled-components";
import { FaReact } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: #282c34;
  color: white;
  text-align: center;
  padding: 1rem;
`;

const FooterText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const Icon = styled.span`
  margin: 0 0.5rem;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Portal de Notícias</p>
      <FooterText>
        Feito com{" "}
        <Icon>
          <FaReact />
        </Icon>{" "}
        e{" "}
        <Icon>
          <FaCoffee />
        </Icon>{" "}
        por Mateus Farias.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
