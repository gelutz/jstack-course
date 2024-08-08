import { Container, Footer, Overlay } from "./styles";

import { Button } from "../Button";
import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ danger }) => {
  return ReactDOM.createPortal(
    <>
      <Overlay>
        <Container danger={danger}>
          <h1>Modal</h1>
          <p>Corpo do modal</p>

          <Footer>
            <button className="cancel" type="button">
              <span>Cancelar</span>
            </button>
            <Button danger={danger} type="button">
              Deletar
            </Button>
          </Footer>
        </Container>
      </Overlay>
    </>,
    document.getElementById("modal-root")
  );
};

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};

export default Modal;
