import { Container } from "./styles";
import { Input } from "../../../components/Input";
import PageHeader from "../../../components/PageHeader";
import React from "react";
import { Select } from "../../../components/Select";

const NewContact = () => {
  return (
    <Container>
      <PageHeader titulo="Novo Contato" />

      <Input />
      <Input />
      <Input />

      <Select>
        <option value="1">Facebook</option>
        <option value="2">Instagram</option>
        <option value="3">Whatsapp</option>
      </Select>
    </Container>
  );
};

export default NewContact;
