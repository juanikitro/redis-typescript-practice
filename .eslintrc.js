module.exports = {
	root: true,
	env: {
		node: true,
		es2021: true,
	},
	plugins: ['sonarjs'],
	extends: ['plugin:sonarjs/recommended', 'eslint:recommended', 'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
	},
}
