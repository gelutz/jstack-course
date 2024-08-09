import React, { useState } from "react";

import { Button } from "../Button";
import { Form } from "./styles";
import FormGroup from "../FormGroup";
import { Input } from "../Input/styles";
import InputContainer from "../Input";
import PropTypes from "prop-types";
import { Select } from "../Select";

const ContactForm = ({ buttonLabel = "Enviar" }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [socials, setSocials] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputContainer>
          <Input
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <Input
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <Select value={socials} onChange={(e) => setSocials(e.target.value)}>
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
            <option value="whatsapp">Whatsapp</option>
          </Select>
        </InputContainer>
        <Button type="submit">{buttonLabel}</Button>
      </FormGroup>
    </Form>
  );
};

ContactForm.propTypes = {
  buttonLabel: PropTypes.string,
};

export default ContactForm;
