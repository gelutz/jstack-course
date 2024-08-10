import React, { useState } from "react";
import { validateEmail, validatePhone } from "../../utils/validation";

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

  const validateForm = (data) => {
    const errorsObject = {};

    if (data.get("name") === "") {
      errorsObject.name = "Nome é obrigatório";
    }

    const emailInput = data.get("email");
    if (emailInput && !validateEmail(emailInput)) {
      errorsObject.email = "Email é inválido";
    }

    const telefoneInput = data.get("telefone");
    if (!telefoneInput) {
      errorsObject.telefone = "Telefone é obrigatório";
    } else if (!validatePhone(telefoneInput)) {
      errorsObject.telefone = "Telefone é inválido";
    }

    return errorsObject;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    setErrors(validateForm(formData));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputContainer error={errors.name}>
          <Input
            placeholder="Nome"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputContainer>
        <InputContainer error={errors.email}>
          <Input
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputContainer>
        <InputContainer error={errors.telefone}>
          <Input
            placeholder="Telefone"
            name="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </InputContainer>

        <InputContainer error={errors.socials}>
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
