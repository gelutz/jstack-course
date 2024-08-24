import { HttpClient } from "../interfaces/HttpClient";
import { tc } from "../utils/try";

class ContactService {
  api = new HttpClient("http://localhost:3001");

  fetchContacts = async ({ order }) => {
    // função tc transforma uma promise em um array com result e erro
    // essencialmente transformando o erro em um valor (é uma forma de evitar o try catch)
    return tc(this.api.get(`/contacts?orderBy=${order}`));
  };
}

export const contactService = new ContactService();
