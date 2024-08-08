import { Container } from "./styles";
import PropTypes from "prop-types";
import React from "react";

const FormGroup = ({ children }) => {
  return <Container>{children}</Container>;
};

FormGroup.propTypes = {
  children: PropTypes.node,
};

export default FormGroup;
