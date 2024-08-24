export class HttpClient {
  constructor(url = "http://localhost:3001") {
    this.baseUrl = url;
  }

  async get(url) {
    const response = await fetch(this.baseUrl + url);

    if (!response.ok) {
      throw new Error(`${response.status} -x-x- ${response.statusText}`);
    }

    const json = await response.json();

    return json;
  }
}
