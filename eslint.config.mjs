import eslintPlugin from '@typescript-eslint/eslint-plugin';
import eslintParser from '@typescript-eslint/parser';
import unusedImports from 'eslint-plugin-unused-imports';
import promisePlugin from 'eslint-plugin-promise';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    ignores: [
      '**/node_modules/**',
      '**/playwright.config.ts',
      '**/.history/**',
      '**/.*.ts',
      '**.*.mjs',
      '**/report/**',
      '**/playwright-report/**',
      '**/test-results/**',
    ],
    languageOptions: {
      parser: eslintParser,
      parserOptions: {
        project: ['tsconfig.json'], // Đảm bảo cung cấp mảng nếu có nhiều tsconfig
        tsconfigRootDir: process.cwd(), // Cung cấp thư mục gốc nếu cần thiết
      },
    },
    plugins: {
      '@typescript-eslint': eslintPlugin,
      'unused-imports': unusedImports,
      promise: promisePlugin,
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
      ],
      'unused-imports/no-unused-imports': 'error',
      semi: ['error', 'always'],
      quotes: [
        'warn',
        'single',
        { allowTemplateLiterals: true, avoidEscape: true },
      ],
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-var-requires': 'warn',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/typedef': [
        'warn',
        {
          variableDeclaration: true,
          arrowParameter: false,
          memberVariableDeclaration: true,
          objectDestructuring: false,
          arrayDestructuring: false,
        },
      ],
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'variable',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'forbid',
        },
        // {
        //   selector: 'constant',
        //   format: ['UPPER_CASE'],
        //   leadingUnderscore: 'allow',
        //   trailingUnderscore: 'forbid',
        // },
        {
          selector: 'function',
          format: ['camelCase'],
        },
        {
          selector: 'parameter',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'property',
          modifiers: ['private'],
          format: ['camelCase'],
          leadingUnderscore: 'require',
        },
      ],
      'unicorn/filename-case': [
        'warn',
        {
          case: 'pascalCase',
          ignore: [
            '.*\\.config\\.(ts|mjs|js|cjs)$',
            '.*\\.spec\\.(ts|mjs|js|cjs)$', // Sửa lại regex đúng
            '^\\.', // Bỏ qua file bắt đầu bằng dấu '.'
          ],
        },
      ],
    },
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: 'warn',
    },
  },
];
