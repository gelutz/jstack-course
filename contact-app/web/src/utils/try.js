import { handleError } from "../interfaces/errors/ErrorHandler";

// função tc transforma uma promise em um array com result e erro
// essencialmente transformando o erro em um valor (é uma forma de evitar o try catch)
export const tc = async (promise) => {
  try {
    return await promise;
  } catch (error) {
    handleError(error);
    return null;
  }
};
