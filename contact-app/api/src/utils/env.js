const { isProduction } = require("./isProduction");

// essas variáveis precisam estar no .env do projeto (apenas no ambiente dev)
if (!isProduction()) {
	const requiredVariables = [
		"POSTGRES_HOST",
		"POSTGRES_PORT",
		"POSTGRES_USER",
		"POSTGRES_PASSWORD",
		"POSTGRES_DATABASE",
		"API_PORT",
	];

	requiredVariables.forEach((variable) => {
		if (!process.env[variable]) {
			throw new Error(`Missing ${variable} environment variable`);
		}
	});
}

const env = {
	get: async (name) => {
		return process.env[name];
	},
};

module.exports = env;
