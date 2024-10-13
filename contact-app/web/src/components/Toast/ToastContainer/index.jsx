import { Container } from "./styles";
import React from "react";
import ToastMessage from "../ToastMessage";

const ToastContainer = () => {
	const [messages, setMessages] = React.useState([
		{
			id: Math.random(),
			type: "default",
			message: "Default toast",
		},
		{
			id: Math.random(),
			type: "success",
			message: "Success toast",
		},
		{
			id: Math.random(),
			type: "error",
			message: "Error toast",
		},
	]);

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
