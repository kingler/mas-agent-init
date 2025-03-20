# Code Context Mapping

This document maintains explicit relationships between code and documentation, ensuring all agents understand how conceptual elements map to implementation details.

## Core Components

| Component | Description | Key Files | Memory Bank Reference | Responsible Agent |
|-----------|-------------|-----------|----------------------|-------------------|
| Memory Bank | Shared knowledge repository | `.context/shared/memory-bank/core/*.md` | [systemPatterns.md#memory-bank](systemPatterns.md#memory-bank) | Orchestrator |
| Agent Rules | Agent-specific guidelines | `.context/rules/agent{N}_rules.md` | [systemPatterns.md#agent-rules](systemPatterns.md#agent-rules) | System Architect |
| Agent Workspace | Agent-specific artifacts | `.context/workspace/agent{N}/*` | [techContext.md#workspace](techContext.md#workspace) | Individual Agents |
| Communication | Inter-agent messaging | `.context/shared/agent_chat.md` | [systemPatterns.md#communication](systemPatterns.md#communication) | All Agents |
| Initialization | System setup scripts | `.context/scripts/*.js` | [techContext.md#initialization](techContext.md#initialization) | Development Agent |

## Implementation Patterns

| Pattern | Purpose | Implementation | Memory Bank Reference | Example Usage |
|---------|---------|----------------|----------------------|---------------|
| Hierarchical Documentation | Structured knowledge | Memory Bank core files | [systemPatterns.md#documentation](systemPatterns.md#documentation) | projectbrief.md → productContext.md |
| BDI Framework | Agent cognition model | Agent rules templates | [systemPatterns.md#bdi-framework](systemPatterns.md#bdi-framework) | Beliefs, Desires, Intentions sections |
| Role Specialization | Distributed expertise | Agent-specific rules | [systemPatterns.md#roles](systemPatterns.md#roles) | System Architect, Development Agent |
| Context Reset Protocol | Memory restoration | Context reset steps | [systemPatterns.md#reset](systemPatterns.md#reset) | Initial Orientation, Role-Specific Context |

## Traceability Matrix

| Requirement ID | Description | Memory Bank Reference | Implementation Files | Status |
|----------------|-------------|----------------------|----------------------|--------|
| REQ-001 | Persistent Memory | [projectbrief.md#requirements](projectbrief.md#requirements) | `.context/shared/memory-bank/core/*.md` | Complete |
| REQ-002 | Multi-Agent Collaboration | [projectbrief.md#requirements](projectbrief.md#requirements) | `.context/rules/*.md`, `.context/shared/agent_chat.md` | Complete |
| REQ-003 | Code-Context Alignment | [projectbrief.md#requirements](projectbrief.md#requirements) | `.context/shared/memory-bank/core/codeContext.md` | Complete |
| REQ-004 | Structured Documentation | [projectbrief.md#requirements](projectbrief.md#requirements) | Memory Bank hierarchy | Complete |

## Architecture-Implementation Alignment

| Architecture Decision | Rationale | Memory Bank Reference | Implementation Evidence |
|----------------------|-----------|----------------------|-------------------------|
| Centralized Memory Bank | Single source of truth | [systemPatterns.md#architecture](systemPatterns.md#architecture) | `.context/shared/memory-bank/` structure |
| Agent-Specific Workspaces | Role isolation | [systemPatterns.md#workspaces](systemPatterns.md#workspaces) | `.context/workspace/agent{N}/` directories |
| Structured Communication | Clear collaboration | [systemPatterns.md#communication](systemPatterns.md#communication) | Message types in agent_chat.md |
| BDI Cognitive Framework | Structured agent behavior | [systemPatterns.md#cognition](systemPatterns.md#cognition) | BDI sections in agent rules |

## Code Evolution Tracking

| Component | Original Design | Current Implementation | Reasons for Change | Future Direction |
|-----------|----------------|------------------------|---------------------|------------------|
| Memory Structure | Single-agent Memory Bank | Multi-agent shared Memory Bank | Support for collaboration | Enhanced versioning |
| Documentation Format | Flat files | Hierarchical structure | Improved organization | Interactive documentation |
| Agent Communication | Unstructured | Formatted message types | Clarity and traceability | Automated notifications |
| Context Reset | Basic file reading | Structured protocol | Improved reliability | Automated validation |

## Implementation Notes

### Memory Bank Access Patterns
- All agents read from the Memory Bank at the start of each session
- Write access is controlled by ownership rules
- Cross-references maintain relationships between documents
- Updates follow the Memory Bank Update Protocol

### Code-Documentation Synchronization
- Code changes trigger documentation updates
- Documentation changes guide implementation
- The codeContext.md file serves as the bridge
- Regular validation ensures alignment

### Future Enhancements
- Automated consistency checking
- Version control integration
- Visualization of relationships
- Impact analysis for changes
