# Sync latest standards from team-claude

$ErrorActionPreference = "Stop"

$CENTRAL_DIR = "../team-claude"

Write-Host "Syncing from central standards..." -ForegroundColor Cyan

# Update git submodule if using submodules
if (Test-Path ".git\modules\.claude\central") {
    git submodule update --remote .claude/central
}

# Update symlinks (automatically points to latest)
Write-Host "Symlinks automatically point to latest central/" -ForegroundColor Green

# Pull latest central repo
Push-Location $CENTRAL_DIR
git pull
Pop-Location

Write-Host "Synced with central standards" -ForegroundColor Green
Write-Host ""
Write-Host "What's new? Check: ../team-claude/CHANGELOG.md"
