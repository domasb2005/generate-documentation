import { spawn } from 'child_process';

spawn('bunx', ['vite', 'tests'], {
  stdio: 'inherit',
  shell: true
});

// from the root directory, run ```bun tests/manualTest.js``` to try out the tests by hand