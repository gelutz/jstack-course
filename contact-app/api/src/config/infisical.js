const { InfisicalClient } = require("@infisical/sdk");

let infisical;

const getSecret = async (name) => {
	if (!infisical) {
		if (
			!process.env.INFISICAL_CLIENT_ID ||
			!process.env.INFISICAL_CLIENT_SECRET
		) {
			throw new Error("Missing Infisical Client ID and Secret");
		}

		infisical = new InfisicalClient({
			auth: {
				universalAuth: {
					clientId: process.env.INFISICAL_CLIENT_ID,
					clientSecret: process.env.INFISICAL_CLIENT_SECRET,
				},
			},
		});
	}

	const secret = await infisical.getSecret({
		environment: "dev",
		projectId: "aba43bb1-2086-4283-894c-0c8a41d5af0a",
		path: "/",
		type: "shared",
		secretName: name,
	});
	return secret.secretValue;
};

module.exports = {
	infisical,
	getSecret,
};
