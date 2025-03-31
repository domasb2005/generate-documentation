import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: '**/compareToReference.js',
  use: { baseURL: 'http://localhost:5175' },
  webServer: {
    command: 'bunx vite tests',
    port: 5175,
  },
});