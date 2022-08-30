module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		"airbnb",
		"plugin:@typescript-eslint/recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:import/typescript",
		"plugin:prettier/recommended",
	],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 2018,
		project: "./tsconfig.json",
	},
	settings: {
		react: {
			version: "detect",
		},
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"],
		},
		"import/resolver": {
			typescript: {},
		},
		"import/extensions": [".js", ".ts", ".mjs", ".jsx", ".tsx"],
	},
	ignorePatterns: [".eslintrc.js", "next-env.d.ts", "*.config.js", "*.config.ts"],
	rules: {
		// prettier
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto",
				useTabs: true,
			},
		],
		// eslint
		camelcase: "off",
		"class-methods-use-this": "off",
		"consistent-return": "off",
		curly: ["error", "all"],
		"no-console": [1, { allow: ["warn", "error"] }],
		"default-case": "off",
		"prefer-template": "off",
		"lines-between-class-members": [
			"error",
			"always",
			{
				exceptAfterSingleLine: true,
			},
		],
		"no-shadow": "off",
		"no-alert": "off",
		"no-await-in-loop": "off",
		"no-control-regex": "off",
		"no-duplicate-imports": "error",
		"no-else-return": "off",
		"no-param-reassign": "off",
		"no-plusplus": "warn",
		"no-prototype-builtins": "off",
		"no-return-assign": "off",
		"no-return-await": "off",
		"no-undefined": "error",
		"no-underscore-dangle": "off",
		"no-use-before-define": "off",
		"prefer-destructuring": [
			"error",
			{
				AssignmentExpression: {
					array: false,
					object: false,
				},
			},
		],
		"max-classes-per-file": "off",

		// import
		"import/no-unresolved": "error",
		"import/no-extraneous-dependencies": ["error", { devDependencies: true }],
		"import/no-cycle": "off",
		"import/prefer-default-export": "off",
		"import/no-deprecated": "error",
		"import/extensions": [
			"error",
			"ignorePackages",
			{
				js: "never",
				jsx: "never",
				ts: "never",
				tsx: "never",
			},
		],
		"import/order": [
			"off",
			{
				alphabetize: {
					order: "asc",
					caseInsensitive: true,
				},
				groups: [
					"builtin",
					"external",
					"internal",
					"parent",
					"sibling",
					"index",
					"unknown",
				],
				pathGroups: [
					{
						pattern: "~/**",
						group: "internal",
					},
				],
			},
		],
		"import/no-duplicates": "off",

		// @typescript-eslint
		"@typescript-eslint/array-type": [
			"error",
			{
				default: "array-simple",
			},
		],
		"@typescript-eslint/ban-ts-comment": "off",
		"@typescript-eslint/camelcase": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/interface-name-prefix": "off",
		"@typescript-eslint/no-else-return": "off",
		"@typescript-eslint/no-empty-interface": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/no-unused-vars": [
			"warn",
			{
				args: "none",
				ignoreRestSiblings: true,
			},
		],
		"@typescript-eslint/no-use-before-define": "off",
		"@typescript-eslint/prefer-interface": "off",
		"@typescript-eslint/no-inferrable-types": [
			"warn",
			{
				ignoreParameters: true,
			},
		],
		"@typescript-eslint/no-empty-function": "error",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/ban-types": "off",

		// react
		"react/react-in-jsx-scope": "off",
		"react/destructuring-assignment": "off",
		"react/jsx-boolean-value": "off",
		"react/jsx-curly-brace-presence": "error",
		"react/jsx-filename-extension": [
			"error",
			{
				extensions: [".tsx"],
			},
		],
		"react/require-default-props": "off",
		"react/jsx-no-bind": "off",
		"react/no-array-index-key": "off",
		"react/no-unescaped-entities": "off",
		"react/no-unused-state": "warn",
		"react/sort-comp": "off",
		"react/jsx-props-no-spreading": "off",
		"react/static-property-placement": "off",
		"react/state-in-constructor": ["error", "never"],
		"react/no-unused-prop-types": "off",
		"react/jsx-no-duplicate-props": "off",

		// jsx-a11y
		"jsx-a11y/alt-text": "off",
		"jsx-a11y/label-has-for": "off",
		"jsx-a11y/label-has-associated-control": "off",
		"jsx-a11y/click-events-have-key-events": "off",
		"jsx-a11y/no-static-element-interactions": "off",
		"jsx-a11y/no-noninteractive-tabindex": "off",
		"jsx-a11y/no-noninteractive-element-interactions": "off",

		"jsx-a11y/anchor-is-valid": [
			"warn",
			{
				components: ["Link"],
				specialLink: ["route"],
				aspects: ["invalidHref", "preferButton"],
			},
		],
		"react/button-has-type": ["off"],
	},
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			rules: {
				"react/prop-types": "off",
			},
		},
	],
};
