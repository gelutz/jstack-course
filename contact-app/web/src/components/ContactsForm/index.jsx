import React, { useEffect, useState } from "react";
import { isValidEmail, maskPhone } from "../../utils/validation";

import { Button } from "../Button";
import { Form } from "./styles";
import FormGroup from "../FormGroup";
import { Input } from "../Input/styles";
import InputContainer from "../Input";
import PropTypes from "prop-types";
import { Select } from "../Select";
import { categoryService } from "../../services/CategoryService";
import { useErrors } from "../../hooks/useErrors";

const ContactForm = ({ buttonLabel = "Enviar", onSubmit }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [telefone, setTelefone] = useState("");
	const [categoryId, setCategoryId] = useState("");

	const [categories, setCategories] = useState([]);
	const [isLoadingCategories, setIsLoadingCategories] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const { addError, getErrorMessage } = useErrors();

	useEffect(() => {
		setIsLoadingCategories(true);
		categoryService
			.fetchCategories()
			.then((response) => {
				if (response.length > 0) {
					setCategories(response);
					setIsLoadingCategories(false);
				}
			})
			.catch(() => {}); // ignora o erro pq fodase se tiver ou não categoria
	}, []);

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
		setIsSubmitting(true);

		const formData = new FormData(event.target);
		validateForm(formData);

		onSubmit({
			name: formData.get("name"),
			email: formData.get("email"),
			telefone: maskPhone(formData.get("telefone")),
			categoryId: formData.get("categories"),
		}).finally(() => {
			setIsSubmitting(false);
		});
	};

	return (
		<Form onSubmit={handleSubmit}>
			<FormGroup>
				<InputContainer error={getErrorMessage("name")}>
					<Input
						disabled={isSubmitting}
						placeholder="Nome *"
						name="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</InputContainer>
				<InputContainer error={getErrorMessage("email")}>
					<Input
						disabled={isSubmitting}
						placeholder="Email *"
						type="email"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</InputContainer>
				<InputContainer error={getErrorMessage("telefone")}>
					<Input
						disabled={isSubmitting}
						placeholder="+55 (99) 99999-9999 *"
						name="telefone"
						value={telefone}
						maxLength="15"
						onChange={(e) => setTelefone(maskPhone(e.target.value))}
					/>
				</InputContainer>

				<InputContainer
					error={getErrorMessage("categories")}
					isloading={isLoadingCategories}
				>
					<Select
						disabled={isLoadingCategories || isSubmitting}
						name="categories"
						value={categoryId}
						onChange={(e) => setCategoryId(e.target.value)}
					>
						<option value="0">Sem categoria</option>
						{categories.map((category) => (
							<option key={category.id} value={category.id}>
								{category.name}
							</option>
						))}
					</Select>
				</InputContainer>
				<Button disabled={isSubmitting} type="submit" isloading={isSubmitting}>
					{buttonLabel}
				</Button>
			</FormGroup>
		</Form>
	);
};

ContactForm.propTypes = {
	buttonLabel: PropTypes.string,
	onSubmit: PropTypes.func.isRequired,
};

ContactForm.defaultProps = {
	buttonLabel: "Enviar",
	onSubmit: () => {
		throw new Error("onSubmit not implemented");
	},
};

export default ContactForm;
