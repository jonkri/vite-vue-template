import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

export default defineConfig([
  {
    extends: ["js/recommended"],
    files: ["**/*.{cjs,js,mjs,vue}"],
    languageOptions: { globals: globals.browser },
    plugins: { js }
  },
  pluginVue.configs["flat/essential"]
]);
