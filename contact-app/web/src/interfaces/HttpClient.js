export class HttpClient {
  constructor(url = "http://localhost:3001") {
    this.baseUrl = url;
  }

  async get(url) {
    const response = await fetch(this.baseUrl + url);

    const type = response.headers.get("content-type");
    if (!type.includes("application/json")) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    const json = await response.json();

    if (!response.ok) {
      throw new Error(
        `${response.status} - ${json?.error || response.statusText}`
      );
    }

    return json;
  }
}
