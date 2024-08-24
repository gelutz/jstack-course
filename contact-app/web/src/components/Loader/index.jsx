import { Overlay } from "./styles";
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

export const Loader = ({ isLoading }) => {
  if (!isLoading) return null;

  return ReactDOM.createPortal(
    <Overlay>
      <div className="loader"></div>
    </Overlay>,
    document.getElementById("loader-root")
  );
};

Loader.propTypes = {
  isLoading: propTypes.bool,
};
