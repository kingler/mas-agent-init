#!/usr/bin/env node

/**
 * Workspace Initialization Script
 * Sets up agent workspace and required files
 */

const fs = require('fs');
const path = require('path');

function initializeAgentWorkspace(agentNumber) {
    const workspacePath = path.join('.context-wl', 'workspace', `agent${agentNumber}`);
    
    // Create workspace directory
    fs.mkdirSync(workspacePath, { recursive: true });
    
    // Create agent-specific rules
    const rulesTemplate = fs.readFileSync(
        path.join('.context-wl', 'rules', 'agent_rules_template.md'),
        'utf8'
    );
    
    fs.writeFileSync(
        path.join('.context-wl', 'rules', `agent${agentNumber}_rules.md`),
        rulesTemplate.replace(/\{N\}/g, agentNumber)
    );
    
    console.log(`Initialized workspace for Agent ${agentNumber}`);
}

// Initialize workspaces for all agents
[1, 2, 3, 4].forEach(initializeAgentWorkspace);