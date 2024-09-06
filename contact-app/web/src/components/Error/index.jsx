import { Button } from "../Button";
import { Container } from "./styles";
import React from "react";
import propTypes from "prop-types";
import sad from "../../assets/images/sad.svg";

export const Error = ({ retryFunction }) => {
  return (
    <Container>
      <img src={sad} alt="sad face" />
      <div className="details">
        <p>Ocorreu um erro ao carregar os contatos</p>
        <Button onClick={retryFunction}>Tentar novamente</Button>
      </div>
    </Container>
  );
};

Error.propTypes = {
  retryFunction: propTypes.func,
};
