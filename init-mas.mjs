#!/usr/bin/env node

/**
 * Multi-Agent System Integration Helper
 * 
 * This script helps integrate the multi-agent system into an existing project
 * by running the initialization script with the correct context.
 */

import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Get the current directory in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('\n🧠 Multi-Agent System Integration 🧠\n');
console.log('Initializing multi-agent system for your project...\n');

// Path to the initialization script
const scriptPath = path.join(__dirname, '.cursor', 'agent-system', 'scripts', 'init_agents.mjs');

// Ensure the script exists
if (!fs.existsSync(scriptPath)) {
  console.error(`Error: Initialization script not found at ${scriptPath}`);
  console.error('Make sure you have properly set up the Multi-Agent System files in your project.');
  process.exit(1);
}

// Run the initialization script
const child = spawn('node', [scriptPath], {
  stdio: 'inherit', // This ensures output from the child process appears in the parent's console
  cwd: process.cwd() // Run in the current working directory
});

child.on('close', (code) => {
  if (code !== 0) {
    console.error(`Initialization script exited with code ${code}`);
  } else {
    console.log('\n✅ Multi-Agent System successfully initialized!\n');
    console.log('You can now interact with the agents in Cursor.');
  }
}); 