export const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(String(email).toLowerCase());
};

export const maskPhone = (phone) => {
  return phone
    .replace(/\D/g, "")
    .replace(/^(\d{2})\B/, "($1) ")
    .replace(/(\d{1})?(\d{4})(\d{4})$/, "$1$2-$3");
};
