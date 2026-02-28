import js from "@eslint/js";
import tseslint from "typescript-eslint";

const eslintConfig = [
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "build/**"]
  },
  js.configs.recommended,
  ...tseslint.configs.recommended
];

export default eslintConfig;
