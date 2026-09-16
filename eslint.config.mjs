import ljharb from '@ljharb/eslint-config/flat';

export default [
	...ljharb,
	{
		rules: {
			'func-style': 'off',
			'no-extra-parens': 'off',
		},
	},
	{
		files: ['test/**'],
		rules: {
			'global-require': 'off',
			'max-depth': 'off',
			'max-lines-per-function': 'off',
			'no-negated-condition': 'off',
		},
	},
];
