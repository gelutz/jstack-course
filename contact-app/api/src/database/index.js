const { Client } = require("pg");
const { getSecret } = require("../config/infisical");

let client;

module.exports = {
	connect: async () => {
		const host = await getSecret("VERCEL_HOST");
		const port = await getSecret("VERCEL_PORT");
		const user = await getSecret("VERCEL_USER");
		const password = await getSecret("VERCEL_PASSWORD");
		const database = await getSecret("VERCEL_DATABASE");

		client = new Client({
			host,
			port,
			user,
			password,
			database,
			ssl: true,
		});

		return await client.connect();
	},

	migrate: async () => {
		const fs = require("fs");
		const path = require("path");
		const query = fs.readFileSync(path.join(__dirname, "schema.sql"), "utf8");
		const values = [];
		await client.query(query, values);
	},

	query: async (query, values) => {
		const { rows } = await client.query(query, values);
		return rows;
	},
};
