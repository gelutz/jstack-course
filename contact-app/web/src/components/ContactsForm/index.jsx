import { Button } from "../Button";
import { Form } from "./styles";
import FormGroup from "../FormGroup";
import Input from "../Input";
import PropTypes from "prop-types";
import React from "react";
import { Select } from "../Select";

const ContactForm = ({ buttonLabel = "Enviar" }) => {
  return (
    <Form>
      <FormGroup>
        <Input error="Campo obrigatório" />
        <Input />
        <Input />

        <Select>
          <option value="1">Facebook</option>
          <option value="2">Instagram</option>
          <option value="3">Whatsapp</option>
        </Select>
        <Button>{buttonLabel}</Button>
      </FormGroup>
    </Form>
  );
};

ContactForm.propTypes = {
  buttonLabel: PropTypes.string,
};

export default ContactForm;
