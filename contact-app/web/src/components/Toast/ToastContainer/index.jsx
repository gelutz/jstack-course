import React, { useEffect, useState } from "react";

import { Container } from "./styles";
import ToastMessage from "../ToastMessage";

const ToastContainer = () => {
	const [messages, setMessages] = useState([]);
	useEffect(() => {
		const handleAddToast = (event) => {
			const newToast = {
				id: Math.random(),
				type: event.detail.type,
				message: event.detail.message,
			};
			setMessages((prev) => [...prev, newToast]);
		};

		document.addEventListener("addtoast", handleAddToast);

		return () => {
			document.removeEventListener("addtoast");
		};
	}, []);

	return (
		<Container>
			{messages.map((message) => (
				<ToastMessage key={message.id} type={message.type}>
					<strong>{message.message}</strong>
				</ToastMessage>
			))}
		</Container>
	);
};

export default ToastContainer;
