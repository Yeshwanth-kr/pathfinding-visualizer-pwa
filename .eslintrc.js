module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-constant-condition": "off",
    "no-unused-vars": "warn", // Don't let dead code clutter your repo
    "no-console": "off", // Allow console logs for algo debugging
    "no-debugger": "warn", // Warn if you leave a debugger in prod
    "no-undef": "error", // Prevent accidental global variables
  },
};
