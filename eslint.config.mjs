import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx,mdx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      }
    },
    settings: {
      next: {
        rootDir: __dirname
      }
    },
    rules: {
      "prettier/prettier": "warn"
    }
  },
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "plugin:prettier/recommended"
    ]
  })
];
