import { Container } from "./styles";
import React from "react";
import emptyBox from "../../assets/images/empty-box.svg";

export const NoContactsRegistered = () => {
  return (
    <Container>
      <img src={emptyBox} alt="Caixa vazia" />
      <p>Você ainda não tem nenhum contato cadastrado!</p>
      <p>
        Clique no botão <strong>”Novo contato”</strong> à cima para cadastrar o
        seu primeiro!
      </p>
    </Container>
  );
};
