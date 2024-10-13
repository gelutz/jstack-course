import { Container } from "./styles";
import PropTypes from "prop-types";
import React from "react";
import checkCircle from "../../../assets/images/check-circle.svg";
import xCircle from "../../../assets/images/x-circle.svg";

const ToastMessage = ({ children, type }) => {
	return (
		<Container $type={type}>
			{type === "error" && <img src={xCircle} alt="error" />}
			{type === "success" && <img src={checkCircle} alt="success" />}
			{children}
		</Container>
	);
};

ToastMessage.propTypes = {
	children: PropTypes.node,
	type: PropTypes.oneOf(["error", "success", "default"]),
};

ToastMessage.defaultProps = {
	type: "default",
};

export default ToastMessage;
