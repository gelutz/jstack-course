import { Container } from "./styles";
import PropTypes from "prop-types";
import React from "react";
import { Spinner } from "../Spinner";

const InputContainer = ({ error, children, isLoading }) => {
  return (
    <Container $error={error} isLoading={isLoading}>
      <div className="form-item">
        {children}
        {isLoading && (
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
  isLoading: PropTypes.bool,
};

InputContainer.defaultProps = {
  isLoading: false,
};

export default InputContainer;
