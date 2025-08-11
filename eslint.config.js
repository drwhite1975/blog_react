// ESLint 9 - flat config
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import hooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
// import reactRefresh from "eslint-plugin-react-refresh"; // opzionale

export default [
  { ignores: ["dist", "coverage", "node_modules"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      },
      globals: { ...globals.browser, ...globals.node }
    },
    plugins: {
      react,
      "react-hooks": hooks,
      "jsx-a11y": jsxA11y,
      import: importPlugin,
      // "react-refresh": reactRefresh
    },
    settings: {
      react: { version: "detect" },
      // abilita risoluzione import TS (opzionale, vedi sezione 2)
      // "import/resolver": { typescript: {} }
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "import/order": [
        "warn",
        { alphabetize: { order: "asc" }, "newlines-between": "always" }
      ]
      // "react-refresh/only-export-components": "warn" // se abiliti react-refresh
    }
  }
];

