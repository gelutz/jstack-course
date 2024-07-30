import { Card, Container, Header, ListContainer } from "./styles";

import React from "react";
import arrow from "../../assets/images/arrow.svg";

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <h3>3 Contatos</h3>
        <a href="#">Novo Contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </header>

        <Card>
          <div className="info"></div>
        </Card>
        <Card></Card>
        <Card></Card>
      </ListContainer>
    </Container>
  );
}
