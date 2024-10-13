import PropTypes from "prop-types";
import React from "react";
import { StyledSpinner } from "./styles";

export const Spinner = ({ size }) => {
	return <StyledSpinner $size={size} />;
};

Spinner.propTypes = {
	size: PropTypes.number.isRequired,
};

Spinner.defaultProps = {
	size: 1,
};
