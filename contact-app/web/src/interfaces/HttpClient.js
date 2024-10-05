import { ApiError } from "./errors/ApiError";

export class HttpClient {
	constructor(url) {
		this.baseUrl = url;
	}

	async request(url, options = {}) {
		const headers = new Headers();
		if (options.body) {
			headers.append("Content-Type", "application/json");
		}

		if (options.headers) {
			for (const [key, value] of Object.entries(options.headers)) {
				headers.append(key, value);
			}
		}

		const response = await fetch(this.baseUrl + url, {
			method: options.method,
			headers: { ...headers, ...options.headers },
			body: options.body,
		});

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

	get(url) {
		return this.request(url, { method: "GET" });
	}

	post(url, options) {
		return this.request(url, {
			method: "POST",
			body: options.body,
			headers: options.headers,
		});
	}
}
