const { getSecret } = require("../config/infisical");
const { isProduction } = require("./isProduction");

const env = {
	// exemplo de uso do infisical
	// quando o deploy é feito na vercel, usa as variáveis cadastradas na própria vercel
	// quando o deploy é feito localmente, pega no infisical
	get: async (name) => {
		if (isProduction()) {
			return process.env[name];
		}

		return await getSecret(name);
	},
};

module.exports = env;
