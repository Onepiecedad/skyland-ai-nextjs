# Array of ports to kill
$ports = @(5173, 3000, 8080, 4173)

foreach ($port in $ports) {
    try {
        $processInfo = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue
        if ($processInfo) {
            $process = Get-Process -Id $processInfo.OwningProcess -ErrorAction SilentlyContinue
            if ($process) {
                Stop-Process -Id $process.Id -Force
                Write-Host "Successfully killed process on port $port"
            }
        }
    }
    catch {
        Write-Host "No process found on port $port"
    }
}

Write-Host "Port cleanup completed" 