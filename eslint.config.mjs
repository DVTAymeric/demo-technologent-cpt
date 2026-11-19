import globals from "globals";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 5,
      sourceType: "script",
      globals: {
        ...globals.browser,
        Data: "readonly", Controls: "readonly", Sys: "readonly", Lib: "readonly",
        Language: "readonly", Log: "readonly", Query: "readonly", Process: "readonly",
        ProcessInstance: "readonly", User: "readonly", Variable: "writable"
      }
    },
    rules: {
      "no-undef": "warn",
      "no-unused-vars": "warn"
    }
  }
];