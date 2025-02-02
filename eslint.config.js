import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-var-requires": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "prefer-const": "warn",
      "react/react-in-jsx-scope": "off",
      "react/jsx-props-no-spreading": "off",
      "react/jsx-filename-extension": "off",
      "import/no-unresolved": "off",
      "react/require-default-props": "off",
      "import/extensions": "off",
      "@typescript-eslint/no-duplicate-enum-values": "off",
      "@typescript-eslint/no-empty-function": "off",
      "no-param-reassign": "off",
      "react-hooks/exhaustive-deps": "off",
      "no-shadow": "warn",
      "react/prop-types": "off",
      "no-useless-escape": "off",
      "import/prefer-default-export": "off",
      "@typescript-eslint/no-empty-object-type": "warn",
      "react/jsx-no-constructed-context-values": "warn",
      "no-undef": "warn",
      "jsx-a11y/heading-has-content": "warn",
    },
  },
)
