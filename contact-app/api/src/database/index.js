const { Client } = require("pg");

const client = new Client({
	host: "storedb",
	port: 5432,
	user: "jstack",
	password: "jstack",
	database: "contacts",
});

client.connect();

exports.query = async (query, values) => {
	const { rows } = await client.query(query, values);
	return rows;
};
