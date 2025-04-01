#!/usr/bin/env node

/**
 * Direct Integration Script for 5crse Project
 * 
 * This script copies all necessary files from the mas-agent-init
 * repository to the 5crse project and sets up the integration.
 */

import { exec, spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Get current directory in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Target project directory
const TARGET_PROJECT = '/Users/kinglerbercy/Projects/5crse';

console.log('\n🧠 Multi-Agent System Integrator for 5crse 🧠\n');
console.log(`This script will copy the multi-agent system files to: ${TARGET_PROJECT}\n`);

// Check if target directory exists
if (!fs.existsSync(TARGET_PROJECT)) {
  console.error(`Error: Target directory ${TARGET_PROJECT} does not exist.`);
  process.exit(1);
}

// Define files and directories to copy
const filesToCopy = [
  '.cursor',
  'project_description_template.md'
];

// Create integration script content for ES Module projects
const esmScriptContent = `#!/usr/bin/env node

/**
 * Multi-Agent System Integration Helper for 5crse
 */

import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Get the current directory in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('\\n🧠 Multi-Agent System Integration 🧠\\n');
console.log('Initializing multi-agent system for 5crse project...\\n');

// Path to the initialization script
const scriptPath = path.join(__dirname, '.cursor', 'agent-system', 'scripts', 'init_agents.mjs');

// Ensure the script exists
if (!fs.existsSync(scriptPath)) {
  console.error(\`Error: Initialization script not found at \${scriptPath}\`);
  console.error('Make sure you have copied the .cursor directory from mas-agent-init.');
  process.exit(1);
}

// Run the initialization script
const child = spawn('node', [scriptPath], {
  stdio: 'inherit', 
  cwd: process.cwd()
});

child.on('close', (code) => {
  if (code !== 0) {
    console.error(\`Initialization script exited with code \${code}\`);
  } else {
    console.log('\\n✅ Multi-Agent System successfully initialized!\\n');
    console.log('You can now interact with the agents in Cursor.');
  }
});`;

// Copy files and setup integration
async function copyFiles() {
  for (const file of filesToCopy) {
    const sourcePath = path.join(__dirname, file);
    const destPath = path.join(TARGET_PROJECT, file);
    
    if (!fs.existsSync(sourcePath)) {
      console.error(`Source path ${sourcePath} does not exist, skipping.`);
      continue;
    }
    
    // Copy file or directory
    await new Promise((resolve, reject) => {
      const command = `cp -r "${sourcePath}" "${destPath}"`;
      console.log(`Copying ${file}...`);
      
      exec(command, (error) => {
        if (error) {
          console.error(`Error copying ${file}: ${error.message}`);
          reject(error);
          return;
        }
        console.log(`Successfully copied ${file}`);
        resolve();
      });
    }).catch(() => {});
  }
  
  // Create integration script in target project
  const integrationScriptPath = path.join(TARGET_PROJECT, 'init-mas.mjs');
  fs.writeFileSync(integrationScriptPath, esmScriptContent);
  console.log('Created integration script: init-mas.mjs');
  
  // Make script executable
  await new Promise((resolve, reject) => {
    exec(`chmod +x "${integrationScriptPath}"`, (error) => {
      if (error) {
        console.error(`Error making script executable: ${error.message}`);
        reject(error);
        return;
      }
      console.log('Made integration script executable');
      resolve();
    });
  }).catch(() => {});
  
  console.log('\n✅ Integration files have been copied successfully!');
  console.log('\nTo complete the integration:');
  console.log(`1. Navigate to your project: cd ${TARGET_PROJECT}`);
  console.log('2. Run the integration script: node init-mas.mjs');
  console.log('3. Follow the prompts to complete the setup');
}

// Execute the integration process
copyFiles(); 