import { Container } from "./styles";
import PropTypes from "prop-types";
import React from "react";

const InputContainer = ({ error, children }) => {
  console.log(error);
  return (
    <Container>
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
