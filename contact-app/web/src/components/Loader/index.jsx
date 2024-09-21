import { Overlay } from "./styles";
import React from "react";
import ReactDOM from "react-dom";
import Spinner from "../Spinner";
import propTypes from "prop-types";

export const Loader = ({ isLoading }) => {
  if (!isLoading) return null;

  return ReactDOM.createPortal(
    <Overlay>
      <Spinner />
    </Overlay>,
    document.getElementById("loader-root")
  );
};

Loader.propTypes = {
  isLoading: propTypes.bool,
};
