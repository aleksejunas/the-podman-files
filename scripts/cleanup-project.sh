#!/bin/bash

# Cleanup script for The Podman Files repository
# This script helps standardize the project structure by:
# 1. Moving backend code to the standard server directory
# 2. Identifying and removing redundant copy folders
# 3. Creating necessary directory structure

PROJECT_ROOT="/home/rolf/Kode/Projects/ThePodmanFilesRepos"
BACKUP_DIR="$PROJECT_ROOT/backup-$(date +%Y%m%d-%H%M%S)"

echo "This project contains multiple git repositories."
echo "1. Continue with cleanup (within current repository only)"
echo "2. Help set up monorepo structure (consolidate repositories)"
echo "3. Exit without changes"

read -p "Choose an option (1-3): " -n 1 -r
echo
if [[ $REPLY =~ ^[3]$ ]]; then
    echo "Exiting without changes."
    exit 0
elif [[ $REPLY =~ ^[2]$ ]]; then
    echo "Starting monorepo setup..."
    
    read -p "Enter frontend repository path: " FRONTEND_REPO
    read -p "Enter backend repository path: " BACKEND_REPO
    read -p "Enter ansible repository path: " ANSIBLE_REPO
    
    # Create backup directory
    mkdir -p "$BACKUP_DIR"
    echo "Created backup directory at $BACKUP_DIR"
    
    # Create directories for the monorepo structure
    mkdir -p "$PROJECT_ROOT/website"
    mkdir -p "$PROJECT_ROOT/server"
    mkdir -p "$PROJECT_ROOT/ansible"
    mkdir -p "$PROJECT_ROOT/containers"
    mkdir -p "$PROJECT_ROOT/scripts"
    mkdir -p "$PROJECT_ROOT/docs"
    
    # Copy content from each repo (preserving non-git files)
    if [ -d "$FRONTEND_REPO" ]; then
        echo "Copying frontend files..."
        rsync -av --exclude='.git/' "$FRONTEND_REPO/" "$PROJECT_ROOT/website/"
    fi
    
    if [ -d "$BACKEND_REPO" ]; then
        echo "Copying backend files..."
        rsync -av --exclude='.git/' "$BACKEND_REPO/" "$PROJECT_ROOT/server/"
    fi
    
    if [ -d "$ANSIBLE_REPO" ]; then
        echo "Copying ansible files..."
        rsync -av --exclude='.git/' "$ANSIBLE_REPO/" "$PROJECT_ROOT/ansible/"
    fi
    
    echo "Monorepo structure created. Original repositories are untouched."
    echo "You may want to add all files to your main repository with:"
    echo "  git add ."
    echo "  git commit -m 'Consolidate repositories into monorepo structure'"
    exit 0
fi

# Regular cleanup continues below for option 1
# Create backup directory
mkdir -p "$BACKUP_DIR"
echo "Created backup directory at $BACKUP_DIR"

# Create standard directories if they don't exist
mkdir -p "$PROJECT_ROOT/website"
mkdir -p "$PROJECT_ROOT/server"
mkdir -p "$PROJECT_ROOT/containers"
mkdir -p "$PROJECT_ROOT/scripts"
mkdir -p "$PROJECT_ROOT/ansible"
mkdir -p "$PROJECT_ROOT/docs"
echo "Created standard directory structure"

# Function to safely move files
move_if_exists() {
  if [ -d "$1" ] && [ "$(ls -A "$1" 2>/dev/null)" ]; then
    echo "Moving $1 to $2"
    mkdir -p "$(dirname "$2")"
    cp -r "$1" "$BACKUP_DIR/$(basename "$1")" # Backup first
    mv "$1"/* "$2"/ 2>/dev/null || true
  fi
}

# Move backend code if it exists in non-standard locations
move_if_exists "$PROJECT_ROOT/tpmf-backend/backend" "$PROJECT_ROOT/server"
move_if_exists "$PROJECT_ROOT/backend" "$PROJECT_ROOT/server"
move_if_exists "$PROJECT_ROOT/api" "$PROJECT_ROOT/server"

# Find and list copy folders in current repo only
echo "The following appear to be copy/backup folders:"
find "$PROJECT_ROOT" -type d -name "*kopi*" -o -name "*copy*" -o -name "*backup*" | sort

# Ask for confirmation before removing
read -p "Do you want to move these to the backup directory? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  find "$PROJECT_ROOT" -type d \( -name "*kopi*" -o -name "*copy*" -o -name "*backup*" \) | while read dir; do
    dest="$BACKUP_DIR/$(basename "$dir")"
    echo "Moving $dir to $dest"
    mkdir -p "$(dirname "$dest")"
    mv "$dir" "$dest"
  done
  echo "Copy folders moved to backup directory"
else
  echo "Keeping copy folders in place"
fi

echo "Done. Project structure has been standardized within this repository."
echo "A backup of moved files is available at $BACKUP_DIR"
echo "You can safely delete this backup once you've confirmed everything works."

# Make script executable
chmod +x "$0"
