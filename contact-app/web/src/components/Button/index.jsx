import PropTypes from "prop-types";
import React from "react";
import { Spinner } from "../Spinner";
import { StyledButton } from "./styles";

export const Button = ({ type, disabled, isloading, children }) => {
	return (
		<StyledButton type={type} disabled={disabled || isloading}>
			{!isloading && children}
			{isloading && <Spinner />}
		</StyledButton>
	);
};

Button.propTypes = {
	type: PropTypes.string,
	isloading: PropTypes.bool,
	disabled: PropTypes.bool,
	children: PropTypes.node.isRequired,
};

Button.defaultProps = {
	type: "button",
	isloading: false,
	disabled: false,
};
