import { Container, StyledInput } from "./styles";

import PropTypes from "prop-types";
import React from "react";

const Input = ({ error }) => {
  return (
    <Container>
      <StyledInput error={!!error} />
      {error && <small>{error}</small>}
    </Container>
  );
};

Input.propTypes = {
  error: PropTypes.string,
};

export default Input;
