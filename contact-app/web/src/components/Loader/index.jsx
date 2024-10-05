import { Overlay } from "./styles";
import React from "react";
import ReactDOM from "react-dom";
import { Spinner } from "../Spinner";
import propTypes from "prop-types";

export const Loader = ({ isloading }) => {
	if (!isloading) return null;

	return ReactDOM.createPortal(
		<Overlay>
			<Spinner size={8} />
		</Overlay>,
		document.getElementById("loader-root"),
	);
};

Loader.propTypes = {
	isloading: propTypes.bool,
};
