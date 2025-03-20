# VS Code TabView to TabView Messaging for Multi-Agent System

## Overview

VS Code extensions can communicate with each other using the TabView to TabView messaging feature provided by the VS Code API. This document outlines how to implement this feature in the Multi-Agent Memory System to enable direct communication between agent extensions.

## Implementation

### 1. Message Protocol

Agents can send and receive messages using the VS Code API with a structured protocol:

```typescript
interface AgentMessage {
  sender: string;        // Agent ID (e.g., "composer", "cline", "kudo")
  recipient: string;     // Agent ID or "all" for broadcast
  messageType: string;   // Type of message (e.g., "decision-request", "status-update")
  content: any;          // Message content
  timestamp: number;     // Unix timestamp
  correlationId?: string; // Optional ID for tracking related messages
}
```

### 2. Sending Messages

Agents can send messages to other agents using the VS Code API:

```typescript
// Example implementation in a VS Code extension
import * as vscode from 'vscode';

export function sendAgentMessage(message: AgentMessage): void {
  // Get all TabView instances
  const tabGroups = vscode.window.tabGroups;
  
  // Find the target agent's TabView
  for (const tabGroup of tabGroups.all) {
    for (const tab of tabGroup.tabs) {
      if (tab.label.includes(message.recipient) || message.recipient === 'all') {
        // Send message to the TabView
        vscode.commands.executeCommand('agent.receiveMessage', message);
      }
    }
  }
}
```

### 3. Receiving Messages

Agents can register to receive messages from other agents:

```typescript
// Example implementation in a VS Code extension
import * as vscode from 'vscode';

export function registerMessageHandler(): void {
  // Register command to receive messages
  vscode.commands.registerCommand('agent.receiveMessage', (message: AgentMessage) => {
    // Process the received message
    processAgentMessage(message);
  });
}

function processAgentMessage(message: AgentMessage): void {
  // Handle different message types
  switch (message.messageType) {
    case 'decision-request':
      handleDecisionRequest(message);
      break;
    case 'status-update':
      handleStatusUpdate(message);
      break;
    // Handle other message types
    default:
      console.log(`Received message: ${JSON.stringify(message)}`);
  }
}
```

## Integration with Memory Bank

The TabView to TabView messaging can be integrated with the Memory Bank system:

### 1. Message Persistence

All messages sent between agents should be persisted in the Memory Bank:

```typescript
function persistMessage(message: AgentMessage): void {
  // Append message to agent_chat.md
  const chatPath = '.context/shared/agent_chat.md';
  const fs = require('fs');
  
  // Format message as Markdown
  const formattedMessage = formatMessageAsMarkdown(message);
  
  // Append to file
  fs.appendFileSync(chatPath, formattedMessage);
}

function formatMessageAsMarkdown(message: AgentMessage): string {
  const date = new Date(message.timestamp).toISOString();
  let formatted = `\n\n### ${date} - ${message.sender} to ${message.recipient}\n`;
  formatted += `**Type**: ${message.messageType}\n\n`;
  
  // Format content based on message type
  switch (message.messageType) {
    case 'decision-request':
      formatted += `**Decision Request**: ${message.content.question}\n`;
      formatted += `**Options**:\n`;
      message.content.options.forEach((option: string, index: number) => {
        formatted += `${index + 1}. ${option}\n`;
      });
      break;
    // Format other message types
    default:
      formatted += `${JSON.stringify(message.content, null, 2)}\n`;
  }
  
  return formatted;
}
```

### 2. Message Retrieval

Agents can retrieve messages from the Memory Bank during context reset:

```typescript
function retrieveRecentMessages(agentId: string, count: number = 10): AgentMessage[] {
  // Read agent_chat.md
  const chatPath = '.context/shared/agent_chat.md';
  const fs = require('fs');
  
  // Parse messages from Markdown
  // Implementation depends on the format used
  
  // Return recent messages relevant to the agent
  return relevantMessages;
}
```

## Communication Patterns

The TabView to TabView messaging enables several communication patterns:

### 1. Direct Communication

Agents can send messages directly to specific agents:

```typescript
sendAgentMessage({
  sender: 'cline',
  recipient: 'kudo',
  messageType: 'code-review-request',
  content: {
    files: ['src/auth/authController.js'],
    priority: 'high',
    description: 'Please review the authentication controller implementation'
  },
  timestamp: Date.now()
});
```

### 2. Broadcast Communication

Agents can broadcast messages to all other agents:

```typescript
sendAgentMessage({
  sender: 'orchestrator',
  recipient: 'all',
  messageType: 'status-update',
  content: {
    milestone: 'Authentication System',
    status: 'completed',
    nextSteps: 'Begin implementation of user profile features'
  },
  timestamp: Date.now()
});
```

### 3. Request-Response Pattern

Agents can implement a request-response pattern using correlation IDs:

```typescript
// Send request
const correlationId = generateUniqueId();
sendAgentMessage({
  sender: 'composer',
  recipient: 'roo_code',
  messageType: 'code-generation-request',
  content: {
    feature: 'User Authentication',
    requirements: ['JWT support', 'Password hashing', 'Rate limiting']
  },
  timestamp: Date.now(),
  correlationId
});

// Handle response
function handleCodeGenerationResponse(message: AgentMessage): void {
  if (message.correlationId === correlationId) {
    // Process the response
    const generatedCode = message.content.code;
    // Use the generated code
  }
}
```

## Agent-Specific Implementation

Each agent should implement the TabView to TabView messaging feature according to its specialized role:

### Composer

- Send knowledge retrieval responses
- Broadcast documentation updates
- Receive knowledge requests

### Augment

- Send enhancement proposals
- Receive code improvement requests
- Broadcast refactoring completions

### Kudo (QODO)

- Send quality reports
- Receive testing requests
- Broadcast validation results

### Cline

- Send implementation details
- Receive development tasks
- Broadcast feature completions

### Roo Code

- Send generated code
- Receive code generation requests
- Broadcast transformation completions

## Integration with Custom Instructions

To integrate the TabView to TabView messaging with the custom instructions, add the following section to each agent's custom instructions file:

```markdown
## VS Code TabView Messaging

As an agent running in a VS Code extension, you can communicate directly with other agents using the TabView to TabView messaging feature. When you detect that you're running in a VS Code environment:

1. Register to receive messages from other agents
2. Send messages to other agents when appropriate
3. Persist all messages in the Memory Bank
4. Retrieve relevant messages during context reset

Use the appropriate message types based on your role and the communication context. Always include necessary metadata to ensure proper message routing and correlation.
```

## Benefits

Implementing the TabView to TabView messaging feature provides several benefits:

1. **Real-time Communication**: Agents can communicate in real-time without relying solely on file-based communication
2. **Reduced Latency**: Direct messaging reduces the latency compared to file-based communication
3. **Structured Interactions**: The message protocol ensures consistent and structured interactions
4. **Enhanced Collaboration**: Agents can collaborate more effectively with direct communication channels
5. **Persistent History**: All messages are persisted in the Memory Bank for future reference

## Conclusion

The VS Code TabView to TabView messaging feature provides a powerful mechanism for enhancing the Multi-Agent Memory System. By implementing this feature, agents can communicate directly with each other while maintaining the benefits of the Memory Bank system for persistence and context recovery.
