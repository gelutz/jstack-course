import PropTypes from "prop-types";
import React from "react";
import { StyledSpinner } from "./styles";

export const Spinner = ({ size = 4 }) => {
  return <StyledSpinner $size={size}></StyledSpinner>;
};

Spinner.propTypes = {
  size: PropTypes.number,
};
