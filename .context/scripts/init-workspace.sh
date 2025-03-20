#!/bin/bash

# init-workspace.sh - Agent Workspace Initializer

# Check if agent ID is provided
if [ -z "$1" ]; then
    echo "Error: Agent ID is required"
    echo "Usage: ./init-workspace.sh <agent_id>"
    exit 1
fi

AGENT_ID=$1
WORKSPACE_DIR=".context/workspace/agent${AGENT_ID}"
PARENT_REPO=$(git config --get remote.origin.url)
AGENT_BRANCH="agent${AGENT_ID}-workspace"

echo "Initializing workspace for Agent ${AGENT_ID}..."

# Create workspace directory
mkdir -p "${WORKSPACE_DIR}"
cd "${WORKSPACE_DIR}"

# Initialize git repository
git init
git checkout -b "${AGENT_BRANCH}"

# Create workspace structure
mkdir -p src/tests .github/workflows

# Create .gitignore
cat > .gitignore << EOL
node_modules/
dist/
coverage/
.env
*.log
EOL

# Create package.json
cat > package.json << EOL
{
  "name": "agent${AGENT_ID}-workspace",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "test": "jest",
    "build": "tsc",
    "dev": "tsc --watch"
  },
  "dependencies": {
    "typescript": "^5.0.0",
    "jest": "^29.0.0",
    "ts-jest": "^29.0.0",
    "@types/jest": "^29.0.0"
  }
}
EOL

# Create tsconfig.json
cat > tsconfig.json << EOL
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.test.ts"]
}
EOL

# Create jest.config.js
cat > jest.config.js << EOL
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  }
};
EOL

# Create GitHub workflow for tests
mkdir -p .github/workflows
cat > .github/workflows/test.yml << EOL
name: Agent ${AGENT_ID} Tests
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install Dependencies
        run: npm install
      - name: Run Tests
        run: npm test
EOL

# Create symbolic links to shared resources
ln -s ../../shared/memory-bank memory-bank
ln -s ../../rules/agent${AGENT_ID}_rules.md rules.md

# Initialize npm and install dependencies
npm install

echo "Workspace initialized successfully for Agent ${AGENT_ID}"
echo "To start working:"
echo "1. cd ${WORKSPACE_DIR}"
echo "2. npm run dev     # Start development"
echo "3. npm test        # Run tests" 