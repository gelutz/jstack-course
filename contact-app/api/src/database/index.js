const { Client } = require("pg");
const { getSecret } = require("../config/infisical");

let client;

module.exports = {
	connect: async () => {
		const [host, port, user, password, database] = await Promise.all([
			getSecret("VERCEL_HOST"),
			getSecret("VERCEL_PORT"),
			getSecret("VERCEL_USER"),
			getSecret("VERCEL_PASSWORD"),
			getSecret("VERCEL_DATABASE"),
		]);

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
