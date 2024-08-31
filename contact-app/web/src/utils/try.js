export const tc = async (promise) => {
  try {
    const result = await promise;

    return [result, null];
  } catch (error) {
    console.log("Ocorreu um erro:", error);
    return [null, error];
  }
};
