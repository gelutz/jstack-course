export class HttpClient {
  constructor(url = "http://localhost:3001") {
    this.baseUrl = url;
  }

  async get(url) {
    const response = await fetch(this.baseUrl + url);
    return await response.json();
  }
}
