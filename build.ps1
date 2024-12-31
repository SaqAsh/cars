Write-Host "Running npm install to ensure dependencies are up-to-date..."
npm install

Write-Host "Building backend..."
npm run build:backend

Write-Host "Building frontend..."
npm run build:frontend

Write-Host "Build process completed successfully!"
