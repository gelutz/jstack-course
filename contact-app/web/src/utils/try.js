export const tc = async (promise) => {
  try {
    const result = await promise;
    return [result, null];
  } catch (error) {
    console.log("Erro! -x-x:", error);
    return [null, error];
  }
};
