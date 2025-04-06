# Kör som administrator om möjligt
if (-NOT ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {
    Write-Host "Försöker köra som administrator..."
    try {
        Start-Process powershell -Verb RunAs -ArgumentList "-File `"$PSCommandPath`"" -WindowStyle Hidden
        exit
    } catch {
        Write-Host "Kunde inte starta som administrator. Fortsätter som vanlig användare..."
    }
}

Write-Host "Söker efter processer som använder port 8080..."

try {
    # Använd netstat för att hitta process som använder port 8080
    $processId = (netstat -ano | findstr ":8080" | findstr "LISTENING") -split ' +' | Select-Object -Last 1
    
    if ($processId -and $processId -ne "0") {
        $process = Get-Process -Id $processId -ErrorAction SilentlyContinue
        
        if ($process) {
            Write-Host "Avslutar process $($process.ProcessName) (PID: $processId)..."
            taskkill /PID $processId /F
            Write-Host "Process avslutad. Port 8080 är nu ledig!"
            Start-Sleep -Seconds 1
        }
    } else {
        Write-Host "Ingen process hittad som lyssnar på port 8080"
    }
} catch {
    Write-Host "Ett fel uppstod: $_"
    exit 1
} 