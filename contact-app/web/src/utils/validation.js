export const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(String(email).toLowerCase());
};

export const validatePhone = (phone) => {
  const phoneRegex = /^\+?[1-9]\d{11,14}$/;
  return phoneRegex.test(phone);
};
