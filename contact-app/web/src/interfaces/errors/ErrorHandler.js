import { ApiError } from "./ApiError";

export const handleError = (error) => {
  if (error instanceof ApiError) {
    console.log("Ocorreu um erro de API:", error.message);
    return;
  }

  if (error instanceof Error) {
    console.log("Ocorreu um erro inesperado:", error.message);
    return;
  }
};
