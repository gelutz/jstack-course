import { Container } from "./styles";
import PropTypes from "prop-types";
import React from "react";

const InputContainer = ({ error, children }) => {
  return (
    <Container $error={error}>
      {children}
      {error && <small>{error}</small>}
    </Container>
  );
};

InputContainer.propTypes = {
  error: PropTypes.string,
  children: PropTypes.node,
};

export default InputContainer;
