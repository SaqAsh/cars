Write-Host "Running npm install to ensure dependencies are up-to-date..."
npm install

Write-Host "Running backend..."
npm run dev

Write-Host "Running frontend..."
Start-Job -ScriptBlock {
    npm run watch:frontend
}

Write-Host "All processes started. Press Enter to stop..."
Read-Host

Write-Host "Stopping all background jobs..."
Get-Job | Stop-Job
Remove-Job *

Write-Host "All processes stopped."
