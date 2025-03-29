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

# Använd netstat för att hitta process
$netstatOutput = netstat -ano | Select-String ":8080"

if ($netstatOutput) {
    foreach ($line in $netstatOutput) {
        try {
            $parts = -split $line
            $pid = $parts[-1]
            
            if ($pid -ne "") {
                Write-Host "Försöker avsluta process $pid"
                # Använd taskkill istället för Stop-Process
                taskkill /F /PID $pid 2>$null
                if ($LASTEXITCODE -eq 0) {
                    Write-Host "Process $pid avslutad"
                }
            }
        } catch {
            Write-Host "Kunde inte hantera process: $_"
        }
    }
} else {
    Write-Host "Ingen process hittad på port 8080"
}

# Vänta lite för att säkerställa att porten är helt frigjord
Start-Sleep -Seconds 2

Write-Host "Startar utvecklingsservern på port 8080..."
npm run dev 