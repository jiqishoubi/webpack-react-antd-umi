module.exports = {
	env: {
		node: true,
		browser: true,
		commonjs: true,
		amd: true
	},
	extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: "script"
	},
	plugins: ["react", "@typescript-eslint"],
	rules: {
		"react/display-name": "off",
		"react/prop-types": [1, { ignore: ["children"] }],
		"@typescript-eslint/no-var-requires": 0
	}
};
