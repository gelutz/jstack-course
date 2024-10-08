module.exports = {
	env: {
		commonjs: true,
		es2021: true,
		node: true,
	},
	extends: ["eslint:recommended"],
	parserOptions: {
		ecmaVersion: 13,
	},
	rules: {
		"class-methods-use-this": "off",
		"no-promise-executor-return": "off",
		"consistent-return": "off",
		camelcase: "off",
		"no-unused-vars": ["error", { argsIgnorePattern: "next" }],
	},
};
