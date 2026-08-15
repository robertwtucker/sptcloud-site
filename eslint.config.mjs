/**
 * Copyright (c) 2026 Quadient Group AG
 * SPDX-License-Identifier: MIT
 */
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import prettierConfig from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'

const eslintConfig = [
  ...nextCoreWebVitals,
  prettierConfig,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      '@next/next/no-html-link-for-pages': 'off',
    },
  },
  {
    // eslint-config-next's next/typescript config already registers the
    // '@typescript-eslint' plugin, scoped to these files. Match that scope
    // rather than registering the plugin again: a second instance under the
    // same key is a flat-config "Cannot redefine plugin" error, and applying
    // these rules any wider fails on files where the plugin isn't loaded.
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
]

export default eslintConfig
