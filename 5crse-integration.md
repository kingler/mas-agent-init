# Multi-Agent System Integration for 5crse Project

## Integration Steps

1. **Copy the required files from this repository to your project directory**:

```bash
# Navigate to your project directory
cd /Users/kinglerbercy/Projects/5crse

# Copy the .cursor directory and template
cp -r /Users/kinglerbercy/Projects/mas-agent-init/.cursor ./
cp -r /Users/kinglerbercy/Projects/mas-agent-init/project_description_template.md ./

# Create an integration script in your project
```

2. **Create an ESM integration script**:

Create a file named `init-mas.mjs` in your project directory with this content:

```javascript
#!/usr/bin/env node

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

console.log('\n🧠 Multi-Agent System Integration 🧠\n');
console.log('Initializing multi-agent system for 5crse project...\n');

// Path to the initialization script
const scriptPath = path.join(__dirname, '.cursor', 'agent-system', 'scripts', 'init_agents.mjs');

// Ensure the script exists
if (!fs.existsSync(scriptPath)) {
  console.error(`Error: Initialization script not found at ${scriptPath}`);
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
    console.error(`Initialization script exited with code ${code}`);
  } else {
    console.log('\n✅ Multi-Agent System successfully initialized!\n');
    console.log('You can now interact with the agents in Cursor.');
  }
});
```

3. **Make the script executable**:

```bash
chmod +x init-mas.mjs
```

4. **Run the initialization script**:

```bash
node init-mas.mjs
```

## Troubleshooting

If you encounter an error about ES modules vs CommonJS:

1. Check if your project has `"type": "module"` in package.json. If yes, use the `.mjs` extension for all scripts.

2. If you're using CommonJS, rename the script to `init-mas.cjs`:

```bash
mv init-mas.mjs init-mas.cjs
```

And run it with:

```bash
node init-mas.cjs
```

## Manual Alternative

If you still experience issues, you can manually set up the agents:

1. Open your project in Cursor
2. Press ⌘T (or Ctrl+T) to create tabs for each agent
3. Select the appropriate agent mode for each tab (Orchestrator, System Architect, Development Agent, UX Agent)
4. In the Orchestrator tab, ask the agent to initialize the Memory Bank system

## All Files Are Copied Successfully

After successful integration, your project will have:

- `.cursor/` directory with all agent configurations
- `project_description_template.md` for reference
- A working multi-agent system accessible through Cursor tabs 