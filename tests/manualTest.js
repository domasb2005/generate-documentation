import { spawn } from 'child_process';

// Use npm/bun run dev instead of direct vite command
spawn(process.env.npm_execpath ? 'npm' : 'bun', ['run', 'dev'], {
  stdio: 'inherit',
  shell: true
});

spawn('bunx', ['vite', 'tests'], {
  stdio: 'inherit',
  shell: true
});

// from the root directory, run ```bun tests/manualTest.js``` or ```node tests/manualTest.js``` to try out the tests by hand