const ContactsRepository = require("../repositories/ContactsRepository");
const { isValidUUID } = require("../utils/isValidUUID");

class ContactController {
	async index(request, response) {
		// Listar todos os registros
		const { orderBy } = request.query;
		const contacts = await ContactsRepository.findAll(orderBy);
		return response.status(200).json(contacts);
	}

	async show(request, response) {
		// Obter UM registro
		const { id } = request.params;

		if (!isValidUUID(id)) {
			return response.status(400).json({ error: "Invalid UUID" });
		}

		const contact = await ContactsRepository.findById(id);

		if (!contact) {
			return response.status(404).json({ error: "User not found" });
		}

		response.json(contact);
	}

	async store(request, response) {
		// Criar novo registro
		const { name, email, phone, categoryId } = request.body;

		if (!name || !email) {
			return response
				.status(400)
				.json({ error: "Name and E-mail are required" });
		}

		if (categoryId && !isValidUUID(categoryId)) {
			return response.status(400).json({ error: "Invalid UUID" });
		}

		const contactExists = await ContactsRepository.findByEmail(email);
		if (contactExists) {
			return response
				.status(400)
				.json({ error: "This e-mail is already in use" });
		}

		const contact = await ContactsRepository.create({
			name,
			email: email || null,
			phone,
			category_id: categoryId || null,
			// validações com o "|| null" não permitem tentar cadastrar com string vazia
		});

		response.json(contact);
	}

	async update(request, response) {
		// Editar um registro
		const { id } = request.params;
		const { name, email, phone, categoryId } = request.body;

		if (!isValidUUID(id) || (categoryId && !isValidUUID(categoryId))) {
			return response.status(400).json({ error: "Invalid UUID" });
		}

		const contactExists = await ContactsRepository.findById(id);
		if (!contactExists) {
			return response.status(400).json({ error: "User not found" });
		}

		if (!name) {
			return response.status(400).json({ error: "Name is required" });
		}

		const contactByEmail = await ContactsRepository.findByEmail(email);
		if (contactByEmail && contactByEmail.id !== id) {
			return response
				.status(400)
				.json({ error: "This e-mail is already in use" });
		}

		const contact = await ContactsRepository.update(id, {
			name,
			email: email || null,
			phone,
			category_id: categoryId || null,
		});

		response.json(contact);
	}

	async delete(request, response) {
		// Deletar um registro
		const { id } = request.params;

		await ContactsRepository.delete(id);
		// 204: No Content
		response.sendStatus(204);
	}
}

// Singleton
module.exports = new ContactController();
