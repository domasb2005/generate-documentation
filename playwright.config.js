import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: '**/compareToReference.js',
  use: { baseURL: 'http://localhost:5175' },
  webServer: {
    command: process.env.npm_execpath ? 'npm run dev' : 'bun run dev',
    port: 5175,
    reuseExistingServer: true
  },
});