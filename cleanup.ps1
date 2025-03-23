# Function to safely kill processes
function Stop-ProcessSafely {
    param (
        [string]$ProcessName,
        [int]$ProcessId = $null
    )
    
    try {
        if ($ProcessId) {
            Stop-Process -Id $ProcessId -Force -ErrorAction SilentlyContinue
        } else {
            Stop-Process -Name $ProcessName -Force -ErrorAction SilentlyContinue
        }
    } catch {
        Write-Host "Note: No $ProcessName processes found to kill" -ForegroundColor Gray
    }
}

# Function to clear port
function Clear-Port {
    param (
        [int]$PortNumber
    )
    
    $connections = netstat -ano | findstr ":$PortNumber"
    if ($connections) {
        $connections | ForEach-Object {
            $processPid = ($_ -split '\s+')[-1]
            Stop-ProcessSafely -ProcessId $processPid
        }
    }
}

# Kill development-related processes
Write-Host "Cleaning up development processes..." -ForegroundColor Yellow
Stop-ProcessSafely -ProcessName "node"
Clear-Port -PortNumber 8080

# Clear npm cache and remove artifacts with error handling
Write-Host "Clearing development artifacts..." -ForegroundColor Yellow
try {
    npm cache clean --force
} catch {
    Write-Host "Warning: npm cache clean failed, continuing..." -ForegroundColor Yellow
}

# Remove directories with error handling
$dirsToRemove = @("node_modules", "dist", ".vite")
foreach ($dir in $dirsToRemove) {
    if (Test-Path -Path $dir) {
        try {
            Remove-Item -Recurse -Force $dir -ErrorAction Stop
            Write-Host "Removed ${dir} successfully" -ForegroundColor Green
        } catch {
            Write-Host "Warning: Could not remove ${dir}, will try to continue..." -ForegroundColor Yellow
        }
    }
}

# Reinstall dependencies
Write-Host "Reinstalling dependencies..." -ForegroundColor Yellow
$retryCount = 0
$maxRetries = 3

while ($retryCount -lt $maxRetries) {
    try {
        npm install
        Write-Host "Dependencies reinstalled successfully!" -ForegroundColor Green
        break
    } catch {
        $retryCount++
        if ($retryCount -eq $maxRetries) {
            Write-Host "Error: Failed to reinstall dependencies after $maxRetries attempts" -ForegroundColor Red
            exit 1
        }
        Write-Host "Retry $retryCount of $maxRetries: npm install failed, retrying..." -ForegroundColor Yellow
        Start-Sleep -Seconds 2
    }
}

Write-Host "Cleanup complete! Development environment is ready." -ForegroundColor Green 