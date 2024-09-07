import { HttpClient } from "../interfaces/HttpClient";
import { delay } from "../utils/delay";
import { isProduction } from "../utils/isProduction";

class ContactService {
  constructor() {
    if (!isProduction()) {
      this.api = new HttpClient("http://localhost:3001");
    } else {
      this.api = new HttpClient("https://jstack-contacts-api.vercel.app");
    }
  }

  fetchContacts = async ({ order }) => {
    await delay(1000);
    return this.api.get(`/contacts?orderBy=${order}`);
  };
}

export const contactService = new ContactService();
