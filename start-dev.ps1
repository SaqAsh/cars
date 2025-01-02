# Ensure the script runs in the directory it is located in
Set-Location $PSScriptRoot

Write-Host "Running npm install to ensure dependencies are up-to-date..."
npm install

Write-Host "Running backend..."
Start-Job -ScriptBlock {
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm run dev"
}

Write-Host "Running frontend..."
Start-Job -ScriptBlock {
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm run watch:frontend"
}

Write-Host "All processes started. Press Enter to stop..."
Read-Host

Write-Host "Stopping all background jobs..."
Get-Job | Stop-Job
Remove-Job *

Write-Host "All processes stopped."
