import html from '@html-eslint/eslint-plugin';
import htmlParser from '@html-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import json from '@eslint/json';
import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    // ESLint no lee `.gitignore`; se excluye la configuración local de Obsidian.
    ignores: ['node_modules/**', '.obsidian/**'],
  },
  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    ...js.configs.recommended,
  },
  {
    files: ['**/*.html'],
    plugins: { '@html-eslint': html },
    languageOptions: { parser: htmlParser },
    rules: {
      ...html.configs['flat/recommended'].rules,

      // Formato: lo maneja Prettier
      '@html-eslint/indent': 'off',
      '@html-eslint/no-extra-spacing-tags': 'off',
      '@html-eslint/attrs-newline': 'off',
      '@html-eslint/element-newline': 'off',
      '@html-eslint/quotes': 'off',

      // Errores y buenas prácticas
      '@html-eslint/require-closing-tags': 'error', // Forzar quitar la barra final en tags void
      '@html-eslint/require-meta-charset': 'error', // Forzar charset
      '@html-eslint/no-target-blank': 'error', // Forzar enlaces seguros
      '@html-eslint/require-lang': 'error', // Forzar lenguaje: Mejor SEO, Accesibilidad
      '@html-eslint/require-button-type': 'error', // Forzar type en <button>
      '@html-eslint/no-abstract-roles': 'error', // Evitar roles abstractos

      // Advertencia
      '@html-eslint/no-inline-styles': 'warn', // Advertencia sobre estilos en línea
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
    language: 'json/jsonc',
    ...json.configs.recommended,
    rules: {
      'json/no-trailing-commas': 'off',
    },
  },
  eslintConfigPrettier,
];
