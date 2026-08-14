import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettierPlugin from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'
import unusedImportsPlugin from 'eslint-plugin-unused-imports'
import eslintReact from 'eslint-plugin-react'

export default tseslint.config([
  {
    ignores: ['dist'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      ...tseslint.configs.recommendedTypeChecked.map((config) => ({
        ...config,
        files: ['**/*.{ts,tsx}'],
      })),
    ],
    plugins: {
      'unused-imports': unusedImportsPlugin,
      prettier: prettierPlugin,
      react: eslintReact,
    },
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      sourceType: 'module',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      'prettier/prettier': 'error',
      ...eslintConfigPrettier.rules,
      ...reactHooks.configs.recommended.rules,
      curly: ['error'],
      'default-case': ['warn'],
      'default-case-last': ['error'],
      eqeqeq: [
        'error',
        'always',
        {
          null: 'ignore',
        },
      ],
      'max-lines': ['warn', { max: 250 }],
      'no-alert': ['error'],
      'no-console': 'warn',
      'no-duplicate-imports': 'off',
      'no-else-return': ['error'],
      'no-eval': ['error'],
      'no-nested-ternary': ['error'],
      'no-return-await': ['error'],
      'no-unneeded-ternary': ['error'],
      'padding-line-between-statements': [
        'warn',
        {
          blankLine: 'always',
          prev: ['block', 'if', 'for', 'do', 'const', 'let'],
          next: '*',
        },
        {
          blankLine: 'always',
          prev: '*',
          next: ['block', 'if', 'for', 'do', 'const', 'let', 'return'],
        },
        {
          blankLine: 'any',
          prev: ['const', 'let'],
          next: ['const', 'let'],
        },
      ],
      'prefer-const': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react/jsx-curly-brace-presence': [
        'warn',
        {
          props: 'never',
          children: 'never',
        },
      ],
      'react/jsx-fragments': ['warn'],
      'react/jsx-pascal-case': 'error',
      'react/jsx-sort-props': [
        'warn',
        {
          callbacksLast: true,
          shorthandFirst: true,
          noSortAlphabetically: false,
          reservedFirst: true,
        },
      ],
      'react/no-array-index-key': 'error',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      'react/self-closing-comp': 'error',
      'require-await': ['warn'],
      'spaced-comment': ['error'],
      'unused-imports/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'warn',
      '@typescript-eslint/no-empty-function': 0,
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/require-await': 'off',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': ['error'],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          ignoreRestSiblings: false,
          argsIgnorePattern: '^_.*?$',
          varsIgnorePattern: '^_.*?$',
          destructuredArrayIgnorePattern: '^_.*?$',
        },
      ],
    },
  },
])
