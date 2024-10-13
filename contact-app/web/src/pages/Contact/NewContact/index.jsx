import ContactForm from "../../../components/ContactsForm";
import PageHeader from "../../../components/PageHeader";
import React from "react";
import { contactService } from "../../../services/ContactService";
import { toast } from "../../../utils/toast";

const NewContact = () => {
	const createContact = async (contact) => {
		try {
			const contactFields = {
				name: contact.name,
				email: contact.email,
				phone: contact.phone,
				categoryId: contact.categoryId,
			};

			await contactService.create(contactFields);
			toast("success", "Contato cadastrado com sucesso");
		} catch (error) {
			console.log(error);
			toast("error", "Ocorreu um erro ao cadastrar o contato");
		}
	};

	return (
		<>
			<PageHeader titulo="Novo Contato" />

			<ContactForm buttonLabel="Cadastrar" onSubmit={createContact} />
		</>
	);
};

export default NewContact;
