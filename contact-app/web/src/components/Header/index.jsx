import { Container } from "./styles";
import React from "react";
import logo from "../../assets/images/logo.svg";

export const Header = () => {
  return (
    <Container>
      <img src={logo} alt="logo" width={201} />
    </Container>
  );
};
