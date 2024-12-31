Write-Host "Running npm install to ensure depenedencies are up-to-date"
npm install

Write-Host "Running backend...."
Start-Job -ScriptBlock {
    npm run dev
}

Write-Host "Running frontend"
Start-Job -ScriptBlock {
    npm run start:frontend
}


Write-Host "All processes started. Press Enter to stop..."
Read-Host

Write-Host "Stopping all processes..."
Get-Job | Stop-Job
Remove-Job *

Write-Host "All processes stopped."