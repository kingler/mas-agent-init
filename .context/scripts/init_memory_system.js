#!/usr/bin/env node

/**
 * Multi-Agent Memory System Initialization Script
 * Sets up the Memory Bank structure and agent workspaces
 */

const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  // Core directories
  directories: {
    context: '.context',
    shared: '.context/shared',
    communication: '.context/shared/communication',
    communicationTeams: '.context/shared/communication/teams',
    communicationTopics: '.context/shared/communication/topics',
    communicationDirect: '.context/shared/communication/direct',
    memoryBank: '.context/shared/memory-bank',
    memoryBankCore: '.context/shared/memory-bank/core',
    memoryBankContext: '.context/shared/memory-bank/context',
    rules: '.context/rules',
    templates: '.context/templates',
    scripts: '.context/scripts',
    workspace: '.context/workspace',
  },
  
  // Memory Bank core files
  memoryBankCoreFiles: [
    'projectbrief.md',
    'productContext.md',
    'activeContext.md',
    'systemPatterns.md',
    'techContext.md',
    'progress.md',
    'codeContext.md',
  ],
  
  // Agent configuration
  agents: [
    { number: 1, role: 'System Architect' },
    { number: 2, role: 'Development Agent' },
    { number: 3, role: 'UX Agent' },
    { number: 4, role: 'Orchestrator Agent' },
  ],
  
  // Shared files
  sharedFiles: [
    'agent_chat.md',
    'role_registry.md',
    'sdlc_role_registry.md',
    'agent_directory.md',
    'conflict_resolution.md',
  ],
  
  // Communication files
  communicationFiles: [
    'global_chat.md',
  ],
  
  // Team communication files
  teamCommunicationFiles: [
    'frontend_chat.md',
    'backend_chat.md',
    'design_chat.md',
  ],
  
  // Topic communication files
  topicCommunicationFiles: [
    'architecture_discussion.md',
    'api_design.md',
    'release_planning.md',
  ],
  
  // Special files
  specialFiles: [
    '.clinerules',
  ],
};

/**
 * Create directory if it doesn't exist
 * @param {string} dirPath - Directory path
 */
function createDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

/**
 * Create file with template content
 * @param {string} filePath - File path
 * @param {string} templateName - Template name
 */
function createFileFromTemplate(filePath, templateName) {
  if (!fs.existsSync(filePath)) {
    const templatePath = path.join(config.directories.templates, `${templateName}.md`);
    
    let content = '';
    if (fs.existsSync(templatePath)) {
      content = fs.readFileSync(templatePath, 'utf8');
    } else {
      content = `# ${path.basename(filePath, '.md')}\n\n[Add content here]`;
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Created file: ${filePath}`);
  }
}

/**
 * Initialize agent workspace
 * @param {Object} agent - Agent configuration
 */
function initializeAgentWorkspace(agent) {
  // Create agent workspace directory
  const workspacePath = path.join(config.directories.workspace, `agent${agent.number}`);
  createDirectory(workspacePath);
  
  // Create agent rules file
  const rulesPath = path.join(config.directories.rules, `agent${agent.number}_rules.md`);
  const rulesTemplate = `agent${agent.number}_rules`;
  createFileFromTemplate(rulesPath, rulesTemplate);
  
  // Create direct communication files for this agent with other agents
  config.agents.forEach(otherAgent => {
    if (agent.number !== otherAgent.number) {
      const directChatFile = `agent${agent.number}_agent${otherAgent.number}.md`;
      const directChatPath = path.join(config.directories.communicationDirect, directChatFile);
      createFileFromTemplate(directChatPath, 'direct_chat');
    }
  });
  
  console.log(`Initialized workspace for Agent ${agent.number} (${agent.role})`);
}

/**
 * Initialize Memory Bank
 */
function initializeMemoryBank() {
  // Create Memory Bank directories
  createDirectory(config.directories.memoryBank);
  createDirectory(config.directories.memoryBankCore);
  createDirectory(config.directories.memoryBankContext);
  
  // Create Memory Bank core files
  config.memoryBankCoreFiles.forEach(file => {
    const filePath = path.join(config.directories.memoryBankCore, file);
    createFileFromTemplate(filePath, file.replace('.md', ''));
  });
  
  // Create .clinerules file
  const clinerules = path.join(config.directories.memoryBank, '.clinerules');
  createFileFromTemplate(clinerules, 'clinerules');
  
  console.log('Initialized Memory Bank');
}

/**
 * Initialize shared files
 */
function initializeSharedFiles() {
  config.sharedFiles.forEach(file => {
    const filePath = path.join(config.directories.shared, file);
    createFileFromTemplate(filePath, file.replace('.md', ''));
  });
  
  console.log('Initialized shared files');
}

/**
 * Initialize communication structure
 */
function initializeCommunicationStructure() {
  // Create communication directories
  createDirectory(config.directories.communication);
  createDirectory(config.directories.communicationTeams);
  createDirectory(config.directories.communicationTopics);
  createDirectory(config.directories.communicationDirect);
  
  // Create global communication files
  config.communicationFiles.forEach(file => {
    const filePath = path.join(config.directories.communication, file);
    createFileFromTemplate(filePath, file.replace('.md', ''));
  });
  
  // Create team communication files
  config.teamCommunicationFiles.forEach(file => {
    const filePath = path.join(config.directories.communicationTeams, file);
    createFileFromTemplate(filePath, file.replace('.md', ''));
  });
  
  // Create topic communication files
  config.topicCommunicationFiles.forEach(file => {
    const filePath = path.join(config.directories.communicationTopics, file);
    createFileFromTemplate(filePath, file.replace('.md', ''));
  });
  
  console.log('Initialized communication structure');
}

/**
 * Main initialization function
 */
function initialize() {
  console.log('Initializing Multi-Agent Memory System...');
  
  // Create core directories
  Object.values(config.directories).forEach(createDirectory);
  
  // Initialize Memory Bank
  initializeMemoryBank();
  
  // Initialize shared files
  initializeSharedFiles();
  
  // Initialize communication structure
  initializeCommunicationStructure();
  
  // Initialize agent workspaces
  config.agents.forEach(initializeAgentWorkspace);
  
  console.log('Multi-Agent Memory System initialized successfully!');
}

// Run initialization
initialize();
