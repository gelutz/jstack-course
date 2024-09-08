import { Container } from "./styles";
import PropTypes from "prop-types";
import React from "react";
import magnifier from "../../assets/images/magnifier-question.svg";

export const NoFilteredContactsFound = ({ filtro }) => {
  return (
    <>
      <Container>
        <img src={magnifier} alt="Magnifier" />
        <p>
          Nenhum contato com o nome de <strong>{`"${filtro}"`}</strong>{" "}
          encontrado!
        </p>
      </Container>
    </>
  );
};

NoFilteredContactsFound.propTypes = {
  filtro: PropTypes.string,
};
