module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',

    // Prettier plugin and recommended rules
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'unused-imports'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  rules: {
    // Include .prettierrc.js rules
    'prettier/prettier': ['error', { endOfLine: 'auto' }, { usePrettierrc: true }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports-ts': 'error',
    'unused-imports/no-unused-vars-ts': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/ban-ts-comment': [
      'error',
      { 'ts-expect-error': 'allow-with-description', minimumDescriptionLength: 10 },
    ],
  },
}
