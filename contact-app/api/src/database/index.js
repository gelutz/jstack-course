const { Client } = require("pg");
const env = require("../utils/env");

let client;

module.exports = {
	connect: async () => {
		const [host, port, user, password, database] = await Promise.all([
			env.get("POSTGRES_HOST"),
			env.get("POSTGRES_PORT"),
			env.get("POSTGRES_USER"),
			env.get("POSTGRES_PASSWORD"),
			env.get("POSTGRES_DATABASE"),
		]);

		client = new Client({
			host,
			port,
			user,
			password,
			database,
			ssl: true,
		});

		return client.connect();
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
