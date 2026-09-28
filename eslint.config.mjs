import html from '@html-eslint/eslint-plugin';
import htmlParser from '@html-eslint/parser';
import json from '@eslint/json';
import js from '@eslint/js';

export default [
  {
    files: ['**/*.js', '**/*.mjs'],
    ...js.configs.recommended,
  },
  {
    files: ['**/*.html'],
    plugins: {
      '@html-eslint': html,
    },
    languageOptions: { parser: htmlParser },
    ...html.configs['flat/recommended'],
    rules: {
      ...html.configs['flat/recommended'].rules,
      '@html-eslint/no-extra-spacing-tags': 'off',
      '@html-eslint/require-closing-tags': 'off',
      '@html-eslint/attrs-newline': 'off',
      '@html-eslint/indent': 'off',
      '@html-eslint/require-img-alt': 'error',
      '@html-eslint/no-inline-styles': 'error',
      '@html-eslint/require-button-type': 'error',
      '@html-eslint/no-abstract-roles': 'error',
      '@html-eslint/require-meta-charset': 'error',
      '@html-eslint/no-duplicate-attrs': 'error',
    },
  },
  {
    files: ['**/*.json'],
    ignores: ['package-lock.json'],
    language: 'json/json',
    ...json.configs.recommended,
  },
  {
    files: ['**/*.jsonc'],
    language: 'json/json5',
    ...json.configs.recommended,
    rules: {
      ...json.configs.recommended.rules,
      'json/no-trailing-commas': 'off',
    },
  },
];
