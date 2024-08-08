import ContactForm from "../../../components/ContactsForm";
import PageHeader from "../../../components/PageHeader";
import React from "react";

const NewContact = () => {
  return (
    <>
      <PageHeader titulo="Novo Contato" />

      <ContactForm buttonLabel="Cadastrar" />
    </>
  );
};

export default NewContact;
