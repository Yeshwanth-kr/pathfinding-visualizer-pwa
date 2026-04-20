import js from "@eslint/js";
import globals from "globals";

export default [
  // This applies to all JS and JSX files
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    // This replaces "extends: eslint:recommended"
    rules: {
      ...js.configs.recommended.rules,
      "no-constant-condition": "off", // Keep your pathfinding loop freedom
      "no-unused-vars": "warn",
      "no-undef": "error",
    },
  },
  // This replaces ".eslintignore"
  {
    ignores: ["dist/**", "node_modules/**", "bin/**"],
  },
];