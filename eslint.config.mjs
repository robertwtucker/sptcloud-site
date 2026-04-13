/**
 * Copyright (c) 2026 Quadient Group AG
 * SPDX-License-Identifier: MIT
 */
import tseslint from '@typescript-eslint/eslint-plugin'
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import prettierConfig from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'

const eslintConfig = [
  ...nextCoreWebVitals,
  prettierConfig,
  {
    plugins: {
      '@typescript-eslint': tseslint,
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      '@next/next/no-html-link-for-pages': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
]

export default eslintConfig
