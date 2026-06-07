import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { flatConfigs } from 'eslint-plugin-next';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default [
  ...flatConfigs.recommended,
  {
    ignores: ['**/.next/**', '**/out/**', '**/*.config.js', 'node_modules/**'],
  },
  {
    rules: {
      'react/no-unknown-property': 'off',
    },
  },
];