import { Container } from "./styles";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import arrow from "../../assets/images/arrow.svg";

const PageHeader = ({ titulo }) => {
  return (
    <>
      <Container>
        <Link to="/">
          <img src={arrow} alt="arrow" />
          <span>Voltar</span>
        </Link>

        <h1>{titulo}</h1>
      </Container>
    </>
  );
};

PageHeader.propTypes = {
  titulo: PropTypes.string.isRequired,
};

export default PageHeader;
