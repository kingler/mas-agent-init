# Multi-Agent Context Sharing Memory System: VSCode Projects

A framework for maintaining context and continuity across multiple AI agents collaborating on software development projects.

## Overview

The Multi-Agent Memory System (MAMS) enables multiple AI agents to collaborate effectively by maintaining shared context and continuity of information across sessions. It combines the strengths of:

1. **Cline's Memory Bank** - A hierarchical documentation structure for single-agent memory persistence
2. **Multi-Agent Context System** - A role-based framework for agent collaboration

This hybrid approach provides superior code-based context maintenance for LLMs through:

- Structured, hierarchical documentation
- Explicit code-context mapping
- Role-based specialization
- Clear communication protocols
- Comprehensive context reset handling

## System Structure

```
.context/
├── shared/                     # Shared resources
│   ├── communication/          # Communication channels
│   │   ├── global_chat.md      # Global communication
│   │   ├── teams/              # Team-based channels
│   │   ├── topics/             # Topic-based threads
│   │   └── direct/             # Direct agent communication
│   ├── agent_directory.md      # Agent profiles and capabilities
│   ├── role_registry.md        # Role definitions and responsibilities
│   ├── sdlc_role_registry.md   # Comprehensive SDLC roles
│   ├── conflict_resolution.md  # Conflict resolution protocols
│   └── memory-bank/            # Memory Bank structure
│       ├── core/               # Core Memory Bank files
│       │   ├── projectbrief.md # Foundation document
│       │   ├── productContext.md # Product context
│       │   ├── activeContext.md # Current focus
│       │   ├── systemPatterns.md # System architecture
│       │   ├── techContext.md  # Technical context
│       │   ├── progress.md     # Implementation status
│       │   └── codeContext.md  # Code-documentation mapping
│       ├── context/            # Additional context files
│       └── .clinerules         # Project intelligence
├── rules/                      # Agent rules
│   └── agent{N}_rules.md       # Agent-specific rules
├── workspace/                  # Agent workspaces
│   ├── agent1/                 # System Architect workspace
│   ├── agent2/                 # Development Agent workspace
│   ├── agent3/                 # UX Agent workspace
│   └── agent4/                 # Orchestrator workspace
├── templates/                  # Documentation templates
└── scripts/                    # Initialization scripts
    └── init_memory_system.js   # System setup script
custom_instruction/             # Agent custom instructions
├── base_agent_instructions_template.md  # Template for agent instructions
├── composer_custom_instructions.md      # Instructions for Composer
├── augment_custom_instructions.md       # Instructions for Augment
├── kudo_custom_instructions.md          # Instructions for Kudo (QODO)
├── cline_custom_instructions.md         # Instructions for Cline
├── roo_code_custom_instructions.md      # Instructions for Roo Code
└── vscode_tabview_messaging.md          # VS Code TabView messaging implementation
```

## Core Components

### Memory Bank

The Memory Bank is a hierarchical documentation structure that serves as the central source of truth for the project:

1. **projectbrief.md** - Foundation document defining core requirements and goals
2. **productContext.md** - Why the project exists and how it should work
3. **activeContext.md** - Current work focus, recent changes, and next steps
4. **systemPatterns.md** - System architecture and key technical decisions
5. **techContext.md** - Technologies used and technical constraints
6. **progress.md** - Implementation status and known issues
7. **codeContext.md** - Explicit mapping between code and documentation

### Agent Roles

Each agent has specific responsibilities within the system:

1. **System Architect (Agent 1)** - Responsible for system architecture and technical decisions
2. **Development Agent (Agent 2)** - Responsible for implementation and code-context mapping
3. **UX Agent (Agent 3)** - Responsible for user experience and product context
4. **Orchestrator (Agent 4)** - Responsible for coordination and project management

#### Role Registry vs. SDLC Role Registry

The system includes two types of role registries that serve different purposes:

**Role Registry** (`role_registry.md`) provides definitions for the core agent roles in the Multi-Agent Memory System. It includes:

- Primary and secondary responsibilities
- Domain expertise areas
- Authority boundaries
- Relationships with other roles
- Evolution paths

**SDLC Role Registry** (`sdlc_role_registry.md`) is a more comprehensive registry that defines all roles involved in the entire Software Development Life Cycle (SDLC). It expands beyond the core agent roles to include the full spectrum of roles in software development, such as:

- Planning and Requirements Phase Roles (Product Owner, Requirements Analyst, etc.)
- Design Phase Roles (UX Designer, UI Designer, etc.)
- Development Phase Roles (Frontend Developer, Backend Developer, etc.)
- Testing and Quality Assurance Roles (QA Engineer, Automation Engineer, etc.)
- Deployment and Operations Roles (DevOps Engineer, SRE, etc.)
- Support and Maintenance Roles (Technical Support Engineer, Technical Writer, etc.)
- Cross-Functional Roles (Data Scientist, Accessibility Specialist, etc.)

The SDLC Role Registry enables the system to scale to support enterprise-level software development with specialized agents for each aspect of the SDLC. It provides a comprehensive framework for role definitions, responsibilities, and interactions that persists throughout the entire software development lifecycle.

### Agent Directory

The Agent Directory (`agent_directory.md`) serves as a registry of all agents in the system, including:

- Agent profiles with basic information
- Capability listings with expertise levels
- Responsibility assignments
- Contact protocols
- Recent activity

### Communication

Agents communicate through a hierarchical structure of channels:

1. **Global Communication** (`global_chat.md`) - System-wide announcements and discussions
2. **Team-Based Channels** (`teams/`) - Discussions specific to certain teams
3. **Topic-Based Threads** (`topics/`) - Discussions on specific topics
4. **Direct Communication** (`direct/`) - One-on-one communication between agents

Communication follows structured protocols with specific message types:

1. **Standard Communication** - General messages between agents
2. **Decision Requests** - When input is needed for a decision
3. **Decision Records** - When a decision has been made
4. **Memory Bank Updates** - When Memory Bank files are modified
5. **Action Items** - Tasks that need to be completed
6. **Status Updates** - Progress reports on ongoing work

### Conflict Resolution

The Conflict Resolution Protocol (`conflict_resolution.md`) provides a formal process for resolving conflicts in Memory Bank updates and agent activities, including:

- Conflict types and severity levels
- Escalation matrix
- Resolution workflows
- Decision recording templates
- Conflict prevention best practices

## Key Protocols

### Agent Bootstrap Protocol

The Agent Bootstrap Protocol (`AGENT_BOOTSTRAP.md`) provides the initial bootstrap process for agents joining the system:

1. **Initial Setup**
   - Read the bootstrap file
   - Review the Executive Summary
   - Check the Role Registry
   - Navigate to agent-specific rules
   - Initialize workspace
   - Connect to shared memory system
   - Register in the Agent Directory
   - Join appropriate communication channels

2. **Onboarding Process**
   - Preparation Phase
   - Initialization Phase
   - Integration Phase
   - Orientation Phase
   - Activation Phase

### Memory Bank Update Protocol

1. Announce update intention in the appropriate communication channel
2. Specify files to be modified
3. Make changes to owned Memory Bank files
4. Add version header with changelog
5. Cross-reference with other Memory Bank files
6. Request review from relevant agents
7. Notify completion in the appropriate communication channel

### Context Reset Protocol

When an agent's context resets between sessions, they follow this protocol:

1. **Initial Orientation**
   - Read `projectbrief.md` and `activeContext.md`
   - Review agent-specific rules

2. **Role-Specific Context**
   - Read owned Memory Bank files
   - Review recent entries in communication channels
   - Check agent-specific `.clinerules`

3. **Task-Specific Context**
   - Read additional Memory Bank files based on the current task
   - Examine relevant workspace files

4. **Cross-Reference and Validation**
   - Verify alignment between documents
   - Validate understanding

5. **Context Confirmation**
   - Seek clarification if needed
   - Confirm readiness to proceed

## Agent Custom Instructions

Each agent in the Multi-Agent Memory System has a specialized role with specific capabilities. The custom instruction files provide detailed guidance for each agent's role, responsibilities, and communication protocols.

### Available Custom Instructions

1. **Base Agent Instructions** (`custom_instruction/base_agent_instructions_template.md`)
   - Template for creating new agent instructions
   - Contains common sections and protocols for all agents

2. **Agent-Specific Instructions**
   - **Composer** (`custom_instruction/composer_custom_instructions.md`)
     - Specializes in documentation access and knowledge retrieval
   - **Augment** (`custom_instruction/augment_custom_instructions.md`)
     - Specializes in enhancing and extending existing code and documentation
   - **Kudo (QODO)** (`custom_instruction/kudo_custom_instructions.md`)
     - Specializes in quality, testing, and validation
   - **Cline** (`custom_instruction/cline_custom_instructions.md`)
     - Specializes in software development and implementation
   - **Roo Code** (`custom_instruction/roo_code_custom_instructions.md`)
     - Specializes in code generation and transformation

3. **VS Code TabView Messaging** (`custom_instruction/vscode_tabview_messaging.md`)
   - Provides implementation details for inter-agent communication using VS Code's TabView to TabView messaging feature
   - Includes message protocols, examples, and integration with the Memory Bank

### VS Code TabView Messaging

The VS Code TabView Messaging feature enables direct communication between agent extensions in VS Code:

1. **Message Protocol** - Structured format for agent messages
2. **Sending Messages** - How agents send messages to other agents
3. **Receiving Messages** - How agents receive and process messages
4. **Integration with Memory Bank** - How messages are persisted in the Memory Bank
5. **Agent-Specific Message Patterns** - Role-specific message types and formats

This feature enhances collaboration by enabling real-time communication between agents while maintaining the benefits of the Memory Bank system for persistence and context recovery.

## Scaling Implementation Plan

The system includes a phased implementation plan to address scaling gaps and support a larger number of agents:

### Phase 1: Foundation for Scalability

- Role Registry Implementation
- Conflict Resolution Protocol
- Agent Directory

### Phase 2: Enhanced Communication and Versioning

- Hierarchical Communication Structure
- Versioning and History System
- Automated Validation Tools

### Phase 3: Advanced Scaling Features

- Dependency Management System
- Formalized Agent Onboarding
- Metrics and Monitoring Framework

### Phase 4: Enterprise-Scale Enhancements

- Layered Memory Bank Architecture
- Role-Based Access Control
- Predictive Context Management

## Getting Started

### Prerequisites

1. **GitHub Account and Credentials**
   - A GitHub account with access to create repositories
   - Personal Access Token (PAT) with the following permissions:
     - `repo` (Full control of private repositories)
     - `workflow` (Update GitHub Action workflows)
     - `admin:org` (For organization repositories)
   
   To create a Personal Access Token:
   1. Go to GitHub Settings > Developer settings > Personal access tokens
   2. Click "Generate new token (classic)"
   3. Select the required permissions
   4. Copy and securely store the token

2. **Git Configuration**

   ```bash
   # Configure Git with your GitHub credentials
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   
   # Store GitHub credentials (recommended for HTTPS)
   git config --global credential.helper store
   # Or use SSH key authentication (alternative)
   ```

3. **Required Software**
   - Node.js (v18 or higher)
   - npm (included with Node.js)
   - Git

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/mas-agent-init.git
   cd mas-agent-init
   ```

2. Configure GitHub Authentication:

   ```bash
   # For HTTPS authentication, store your PAT
   echo "https://YOUR_USERNAME:YOUR_PAT@github.com" > ~/.git-credentials
   git config --global credential.helper store
   
   # Or set up SSH key authentication (recommended)
   ssh-keygen -t ed25519 -C "your.email@example.com"
   # Add the SSH key to your GitHub account
   ```

3. Run the initialization script:

   ```bash
   node .context/scripts/init_memory_system.js
   ```

4. Set up GitHub Actions secrets:
   - Go to your repository's Settings > Secrets and variables > Actions
   - Add the following secrets:
     - `GITHUB_TOKEN`: Your GitHub Personal Access Token
     - Any additional secrets required by your workflows

### Workspace Management

The system provides two key scripts for managing agent workspaces:

1. **Workspace Initialization** (`init-workspace.sh`)

   ```bash
   # Initialize a new agent workspace
   .context/scripts/init-workspace.sh <agent_id>
   ```
   This script:
   - Creates an isolated workspace directory
   - Initializes a git repository
   - Sets up TypeScript and Jest
   - Configures GitHub Actions for CI/CD
   - Creates symbolic links to shared resources
   - Installs dependencies

   **Note**: Ensure your GitHub credentials are properly configured before running this script.

2. **Merge to Parent** (`merge-to-parent.sh`)

   ```bash
   # Merge changes back to parent repository
   .context/scripts/merge-to-parent.sh
   ```
   This script:
   - Runs tests and build verification
   - Creates a merge branch in the parent repository
   - Copies and commits changes
   - Pushes changes for review

   **Note**: This script requires proper GitHub authentication to push changes.

### GitHub Actions Configuration

Each agent workspace includes GitHub Actions workflows for automated testing. To ensure these work properly:

1. **Repository Settings**
   - Enable GitHub Actions in your repository settings
   - Configure branch protection rules if needed
   - Set up required status checks

2. **Workflow Permissions**
   - Go to Settings > Actions > General
   - Under "Workflow permissions":
     - Enable "Read and write permissions"
     - Enable "Allow GitHub Actions to create and approve pull requests"

3. **Environment Variables**
   Each agent workspace may require specific environment variables for tests and builds. Add these in:
   - Repository Settings > Secrets and variables > Actions
   - Individual workflow files (.github/workflows/*.yml)

### Troubleshooting GitHub Integration

If you encounter GitHub-related issues:

1. **Authentication Errors**
   - Verify your PAT has the required permissions
   - Check that your Git credentials are properly configured
   - Ensure your SSH keys are correctly set up (if using SSH)

2. **Workflow Failures**
   - Check the Actions tab for detailed error logs
   - Verify all required secrets are configured
   - Ensure workflow permissions are properly set

3. **Push/Pull Issues**
   - Verify your repository permissions
   - Check your network connection
   - Ensure your local repository is properly configured

### VSCode Extensions Setup

To fully utilize the Multi-Agent Memory System, you need to set up the appropriate VSCode extensions for each agent. Each extension needs to be configured with the corresponding custom instruction file.

#### Available Extensions

1. **Composer**
   - **Host**: Cursor (VSCode Fork)
   - **Installation**: Install [Cursor](https://cursor.sh/) and configure it with the Composer custom instructions

2. **Cline**
   - **Installation**: Follow the [Cline Getting Started Guide](https://docs.cline.bot/getting-started/getting-started-new-coders)
   - **Configuration**: Add the Cline custom instructions to the extension settings

3. **Roo Code**
   - **Installation**: Install from [VSCode Marketplace](https://marketplace.visualstudio.com/items?itemName=RooVeterinaryInc.roo-cline)
   - **Configuration**: Add the Roo Code custom instructions to the extension settings

4. **Claude Code**
   - **Interface**: Terminal
   - **Configuration**: Configure with the appropriate custom instructions

5. **Aider**
   - **Interface**: Terminal
   - **Configuration**: Configure with the appropriate custom instructions

#### Extension Configuration Steps

For each VSCode extension, follow these general steps to configure it with the custom instructions:

1. Install the extension from the provided link
2. Open the extension settings
3. Locate the custom instructions or system prompt setting
4. Copy the content of the corresponding custom instruction file
5. Paste the content into the extension's custom instructions setting
6. Save the settings and restart the extension if necessary

### Usage

1. Read the `AGENT_BOOTSTRAP.md` file to understand the bootstrap process
2. Review the Executive Summary for a high-level overview
3. Check the Role Registry to understand agent roles and responsibilities
4. Review the SDLC Role Registry for comprehensive role definitions
5. Follow the Context Reset Protocol when starting a new session
6. Use structured communication formats in the appropriate communication channels
7. Update Memory Bank files according to the Memory Bank Update Protocol
8. Maintain code-context mapping in `codeContext.md`
9. Resolve conflicts using the Conflict Resolution Protocol
10. Use the VS Code TabView Messaging feature for inter-agent communication

### Practical Example

The system includes a practical example of an E-Commerce Platform development project in `PRACTICAL_EXAMPLE.md` that demonstrates:

1. **Project Initialization**: Setting up the Memory Bank and defining initial requirements
2. **Collaborative Architecture**: Developing system architecture through agent collaboration
3. **Context Reset Handling**: Demonstrating how an agent recovers after a context reset
4. **Decision Making**: Structured decision-making process with clear documentation
5. **Implementation Progress**: Tracking progress and maintaining alignment

This example provides a concrete illustration of how the system works in practice and can serve as a template for your own projects.

## Future Enhancements

Areas for future enhancement include:

1. **User-Friendly Documentation**: Step-by-step guides for new users
2. **Visual Interface**: Web interface for visualizing the Memory Bank structure
3. **Integration with Development Tools**: Plugins for popular IDEs
4. **Automated Validation**: Tools to check cross-references and consistency
5. **Simplified Bootstrapping**: More comprehensive initialization process

## Contributing

Contributions to the Multi-Agent Memory System are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
