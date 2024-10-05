import { Container } from "./styles";
import PropTypes from "prop-types";
import React from "react";
import { Spinner } from "../Spinner";

const InputContainer = ({ error, children, isloading }) => {
	return (
		<Container $error={error} $isloading={isloading}>
			<div className="form-item">
				{children}
				{isloading && (
					<div className="loader">
						<Spinner size={1} />
					</div>
				)}
			</div>
			{error && <small>{error}</small>}
		</Container>
	);
};

InputContainer.propTypes = {
	error: PropTypes.string,
	children: PropTypes.node,
	isloading: PropTypes.bool,
};

InputContainer.defaultProps = {
	isloading: false,
};

export default InputContainer;
