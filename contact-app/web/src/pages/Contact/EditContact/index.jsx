import ContactForm from "../../../components/ContactsForm";
import PageHeader from "../../../components/PageHeader";
import React from "react";

const EditContact = () => {
	return (
		<>
			<>
				<PageHeader titulo="Editar contato" />

				<ContactForm buttonLabel="Salvar alterações" />
			</>
		</>
	);
};

export default EditContact;
