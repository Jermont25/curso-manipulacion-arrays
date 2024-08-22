import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  pluginPrettier.configs.recommended,
  configPrettier,
  {
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      'no-console': 'warn',
      eqeqeq: 'error',
    },
  },
];
