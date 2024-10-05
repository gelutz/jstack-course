import ContactForm from "../../../components/ContactsForm";
import PageHeader from "../../../components/PageHeader";
import React from "react";
import { contactService } from "../../../services/ContactService";

const NewContact = () => {
	const createContact = async (contact) => {
		await contactService.create(contact);

		window.location.href = "/";
	};

	return (
		<>
			<PageHeader titulo="Novo Contato" />

			<ContactForm buttonLabel="Cadastrar" onSubmit={createContact} />
		</>
	);
};

export default NewContact;
