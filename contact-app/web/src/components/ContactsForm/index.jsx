import React, { useState } from "react";
import { isValidEmail, maskPhone } from "../../utils/validation";

import { Button } from "../Button";
import { Form } from "./styles";
import FormGroup from "../FormGroup";
import { Input } from "../Input/styles";
import InputContainer from "../Input";
import PropTypes from "prop-types";
import { Select } from "../Select";
import { useErrors } from "../../hooks/useErrors";

const ContactForm = ({ buttonLabel = "Enviar" }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [socials, setSocials] = useState("");
  const { addError, getErrorMessage } = useErrors();

  const validateForm = (data) => {
    if (data.get("name") === "") {
      addError({ field: "name", message: "Nome é obrigatório" });
    }

    const emailInput = data.get("email");
    if (emailInput && !isValidEmail(emailInput)) {
      addError({ field: "email", message: "Email é inválido" });
    }

    const telefoneInput = data.get("telefone");
    if (!telefoneInput) {
      addError({ field: "telefone", message: "Telefone é obrigatório" });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    validateForm(formData);
    // para enviar o telefone sem os caracteres extras
    // usar essa regex: /^(\D)/g
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputContainer error={getErrorMessage("name")}>
          <Input
            placeholder="Nome *"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputContainer>
        <InputContainer error={getErrorMessage("email")}>
          <Input
            placeholder="Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputContainer>
        <InputContainer error={getErrorMessage("telefone")}>
          <Input
            placeholder="+55 (99) 99999-9999 *"
            name="telefone"
            value={telefone}
            maxLength="15"
            onChange={(e) => setTelefone(maskPhone(e.target.value))}
          />
        </InputContainer>

        <InputContainer error={getErrorMessage("socials")}>
          <Select
            name="socials"
            value={socials}
            onChange={(e) => setSocials(e.target.value)}
          >
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
