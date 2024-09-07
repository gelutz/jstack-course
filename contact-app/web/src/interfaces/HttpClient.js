import { ApiError } from "./errors/ApiError";

export class HttpClient {
  constructor(url) {
    this.baseUrl = url;
  }

  async get(url) {
    const response = await fetch(this.baseUrl + url);
    const type = response.headers.get("content-type");
    if (!type.includes("application/json")) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }
    const json = await response.json();

    if (response.ok) {
      return json;
    }

    throw new ApiError(response, json);
  }
}
