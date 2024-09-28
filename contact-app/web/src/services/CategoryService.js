import { HttpClient } from "../interfaces/HttpClient";
import { delay } from "../utils/delay";
import { isProduction } from "../utils/isProduction";

class CategoryService {
  constructor() {
    if (!isProduction()) {
      this.api = new HttpClient("http://localhost:3001");
    } else {
      this.api = new HttpClient("https://jstack-contacts-api.vercel.app");
    }
  }

  fetchCategories = async () => {
    await delay(1000);
    return this.api.get(`/categories`);
  };
}

export const categoryService = new CategoryService();
