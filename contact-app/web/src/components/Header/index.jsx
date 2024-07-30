import { Container, InputSearchContainer } from "./styles";

import React from "react";
import logo from "../../assets/images/logo.svg";

export const Header = () => {
  return (
    <Container>
      <img src={logo} alt="logo" width={201} />

      <InputSearchContainer>
        <input type="text" name="" id="" placeholder="Pesquise pelo nome" />
      </InputSearchContainer>
    </Container>
  );
};
