import { useState } from "react";

export const useErrors = () => {
  const [errors, setErrors] = useState([]);

  const addError = ({ field, message }) => {
    console.log(errors);

    const errorExists = errors.filter((error) => error.field === field);

    if (errorExists.length > 0) {
      return;
    }
    setErrors((prevState) => [...prevState, { field, message }]);
  };

  const getErrorMessage = (field) => {
    return errors.find((error) => error.field === field)?.message;
  };

  return {
    errors,
    addError,
    getErrorMessage,
  };
};
