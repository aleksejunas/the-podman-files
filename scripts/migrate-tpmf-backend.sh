#!/bin/bash

# Script to safely migrate content from tpmf-backend to the standard server directory
# This helps ensure all content is properly moved before removing the old directory

PROJECT_ROOT="/home/rolf/Kode/Projects/ThePodmanFilesRepos"
BACKUP_DIR="$PROJECT_ROOT/backup-$(date +%Y%m%d-%H%M%S)"
SOURCE_DIR="$PROJECT_ROOT/tpmf-backend"
TARGET_DIR="$PROJECT_ROOT/server"

# Check if source directory exists
if [ ! -d "$SOURCE_DIR" ]; then
  echo "Source directory tpmf-backend not found. Nothing to migrate."
  exit 0
fi

# Create backup
echo "Creating backup of tpmf-backend..."
mkdir -p "$BACKUP_DIR"
cp -r "$SOURCE_DIR" "$BACKUP_DIR/"
echo "Backup created at $BACKUP_DIR/tpmf-backend"

# Ensure target directory exists
mkdir -p "$TARGET_DIR"

# Check if there's a backend subdirectory
if [ -d "$SOURCE_DIR/backend" ]; then
  echo "Found backend subdirectory in tpmf-backend."
  SOURCE_DIR="$SOURCE_DIR/backend"
fi

# Show files to be migrated
echo "The following files will be migrated from $SOURCE_DIR to $TARGET_DIR:"
find "$SOURCE_DIR" -type f -not -path "*/node_modules/*" -not -path "*/.git/*" | sort

# Ask for confirmation
read -p "Proceed with migration? (y/n): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  echo "Migration aborted."
  exit 0
fi

# Copy files (excluding node_modules and .git)
echo "Migrating files..."
rsync -av --exclude='.git/' --exclude='node_modules/' "$SOURCE_DIR/" "$TARGET_DIR/"

# Check for special files
if [ -f "$SOURCE_DIR/.env" ]; then
  echo "Found .env file, copying..."
  cp "$SOURCE_DIR/.env" "$TARGET_DIR/"
fi

# Verify migration
echo "Migration completed. Verifying files..."
ORIGINAL_COUNT=$(find "$SOURCE_DIR" -type f -not -path "*/node_modules/*" -not -path "*/.git/*" | wc -l)
MIGRATED_COUNT=$(find "$TARGET_DIR" -type f -not -path "*/node_modules/*" -not -path "*/.git/*" | wc -l)

echo "Original files: $ORIGINAL_COUNT"
echo "Migrated files: $MIGRATED_COUNT"

# Ask whether to remove source directory
echo
echo "All content from tpmf-backend has been migrated to the server directory."
echo "A backup was created at $BACKUP_DIR/tpmf-backend"
read -p "Do you want to remove the original tpmf-backend directory? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo "Removing tpmf-backend directory..."
  rm -rf "$PROJECT_ROOT/tpmf-backend"
  echo "tpmf-backend directory removed."
else
  echo "Keeping tpmf-backend directory for reference."
fi

# Make script executable
chmod +x "$0"

echo "Migration process complete."
