# Function to check if the development server is responding
function Test-DevServer {
    try {
        $response = Invoke-WebRequest -Uri "http://localhost:8080" -UseBasicParsing -TimeoutSec 2
        return $response.StatusCode -eq 200
    } catch {
        return $false
    }
}

# Function to restart the development server
function Restart-DevServer {
    Write-Host "Detected server issue, performing automatic cleanup and restart..." -ForegroundColor Yellow
    
    # Run cleanup script
    & "$PSScriptRoot\cleanup.ps1"
    
    # Start the development server
    Start-Process -NoNewWindow powershell -ArgumentList "npm run dev"
}

Write-Host "Starting development server with automatic monitoring..." -ForegroundColor Green
Start-Process -NoNewWindow powershell -ArgumentList "npm run dev"

# Main monitoring loop
while ($true) {
    Start-Sleep -Seconds 5
    
    if (-not (Test-DevServer)) {
        Write-Host "Server not responding, initiating automatic restart..." -ForegroundColor Yellow
        Restart-DevServer
    }
} 