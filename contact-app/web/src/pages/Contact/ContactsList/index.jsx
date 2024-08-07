import { Card, Container, Header, ListContainer } from "./styles";

import React from "react";
import arrow from "../../../assets/images/arrow.svg";
import edit from "../../../assets/images/edit.svg";
import trash from "../../../assets/images/trash.svg";

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
          <div className="info">
            <div className="contact-name">
              <strong>Gabriel Lutz</strong>
              <small>Instagram</small>
            </div>
            <span>gabriel.lutz@gmail.com</span>
            <span>+55 (11) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="edit" />
            </a>
            <button type="button">
              <img src={trash} alt="trash" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Gabriel Lutz</strong>
              <small>Instagram</small>
            </div>
            <span>gabriel.lutz@gmail.com</span>
            <span>+55 (11) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="edit" />
            </a>
            <button type="button">
              <img src={trash} alt="trash" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Gabriel Lutz</strong>
              <small>Instagram</small>
            </div>
            <span>gabriel.lutz@gmail.com</span>
            <span>+55 (11) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="edit" />
            </a>
            <button type="button">
              <img src={trash} alt="trash" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
