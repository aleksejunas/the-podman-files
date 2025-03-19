#!/bin/bash

# List Project Folders Script
# This script helps you identify which folders to keep and which might be redundant

PROJECT_ROOT="/home/rolf/Kode/Projects/ThePodmanFilesRepos"

echo "=== PROJECT FOLDER ANALYSIS ==="
echo

# List essential folders
echo "ESSENTIAL FOLDERS (KEEP THESE):"
for folder in website server ansible scripts containers docs; do
  if [ -d "$PROJECT_ROOT/$folder" ]; then
    echo "✓ $folder/"
  else
    echo "✗ $folder/ (missing)"
  fi
done
echo

# List potential backup/copy folders
echo "POTENTIAL REDUNDANT FOLDERS (SAFE TO MOVE/DELETE):"
find "$PROJECT_ROOT" -maxdepth 1 -type d | grep -E "kopi|copy|backup" | while read folder; do
  echo "- $(basename "$folder")/"
done
echo

# List other top-level folders for review
echo "OTHER FOLDERS (REVIEW THESE):"
find "$PROJECT_ROOT" -maxdepth 1 -type d | grep -v -E "website|server|ansible|scripts|containers|docs|kopi|copy|backup|node_modules|.git" | while read folder; do
  if [ "$(basename "$folder")" != "$(basename "$PROJECT_ROOT")" ]; then
    echo "? $(basename "$folder")/"
  fi
done
echo

# Make the script executable
chmod +x "$0"

echo "To clean up redundant folders, run: ./scripts/cleanup-project.sh"
