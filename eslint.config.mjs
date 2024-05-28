import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginSecurity from 'eslint-plugin-security';

// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      camelcase: "off",
        'import/default': "off",
        'import/namespace': "off",
        'import/no-named-as-default': "off",
        'import/no-named-as-default-member': "off",
    }
  },
  {
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/ban-ts-comment': "off",
      '@typescript-eslint/no-explicit-any': "off",
      '@typescript-eslint/no-non-null-assertion': "off",
      '@typescript-eslint/no-unused-vars': "off",
    }
  },
  {
    files: ['**/*.vue'],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      'vue/multi-word-component-names': "off",
    }
  }
).prepend(pluginSecurity.configs.recommended, eslintPluginPrettierRecommended);
