import config from "eslint-config-standard";
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  ...[].concat(config),
  {
    files: ["**/*.js", "**/*.ts", "**/*.tsx"],
    languageOptions: { sourceType: "script" },
    rules: {
      semi: "error",
      "prefer-const": "error",
      ignores: ["**/*.config.mjs"],
      "at-rule-no-unknown": [
        true,
        {
          ignoreAtRules: [
            // --------
            // Tailwind
            // --------
            "apply",
            "variants",
            "responsive",
            "screen",
          ],
        },
      ],
      "declaration-block-no-duplicate-custom-properties": null,
      "named-grid-areas-no-invalid": null,
      "no-duplicate-selectors": null,
      "no-empty-source": null,
      "selector-pseudo-element-no-unknown": null,
      "declaration-block-trailing-semicolon": null,
      "no-descending-specificity": null,
      "string-no-newline": null,
      //Use camelCase for classes and ids only. Works better with CSS modules
      "selector-class-pattern":
        /^[a-z][a-zA-Z]*(-(enter|leave)(-(active|to))?)?$/,
      "selector-id-pattern": /^[a-z][a-zA-Z]*$/,
      //  Limit the number of universal selectors in a selector,
      // to avoid very slow selectors
      "selector-max-universal": 1,
      // --------
    },
  },

  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
