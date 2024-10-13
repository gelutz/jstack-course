export const toast = (type, message) => {
	const event = new CustomEvent("addtoast", {
		detail: {
			type,
			message,
		},
	});
	document.dispatchEvent(event);
};
