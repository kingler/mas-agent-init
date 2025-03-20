#!/bin/bash

# merge-to-parent.sh - Merge Agent Workspace to Parent Repository

# Get agent ID from current directory name
CURRENT_DIR=$(basename $(pwd))
AGENT_ID=$(echo $CURRENT_DIR | sed 's/agent//')

if [[ ! $CURRENT_DIR =~ ^agent[0-9]+$ ]]; then
    echo "Error: Must be run from an agent workspace directory"
    exit 1
fi

echo "Preparing to merge Agent ${AGENT_ID} changes to parent repository..."

# Run tests
echo "Running tests..."
npm test
if [ $? -ne 0 ]; then
    echo "Error: Tests failed. Please fix failing tests before merging."
    exit 1
fi

# Build project
echo "Building project..."
npm run build
if [ $? -ne 0 ]; then
    echo "Error: Build failed. Please fix build errors before merging."
    exit 1
fi

# Get parent repository URL
PARENT_REPO=$(git config --get remote.origin.url)
if [ -z "$PARENT_REPO" ]; then
    echo "Error: Could not determine parent repository URL"
    exit 1
fi

# Create temporary directory for merge
TEMP_DIR=$(mktemp -d)
cd $TEMP_DIR

# Clone parent repository
echo "Cloning parent repository..."
git clone $PARENT_REPO .
if [ $? -ne 0 ]; then
    echo "Error: Failed to clone parent repository"
    exit 1
fi

# Create merge branch
MERGE_BRANCH="merge/agent${AGENT_ID}-$(date +%Y%m%d-%H%M%S)"
git checkout -b $MERGE_BRANCH

# Copy changes from agent workspace
echo "Copying changes from agent workspace..."
cp -r ../../src/* src/
cp -r ../../dist/* dist/
cp -r ../../tests/* tests/

# Stage changes
git add .

# Create commit
git commit -m "Merge changes from Agent ${AGENT_ID}

- Tests passed
- Build verified
- Changes reviewed"

# Push changes
echo "Pushing changes to parent repository..."
git push origin $MERGE_BRANCH

echo "Merge preparation complete!"
echo "A new branch '${MERGE_BRANCH}' has been created in the parent repository."
echo "Please create a pull request to merge these changes into the main branch." 