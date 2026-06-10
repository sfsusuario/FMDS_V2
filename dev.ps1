# dev.ps1 — Entorno de desarrollo FMDS
# .\dev.ps1 -start    -> levanta Laravel + Vite
# .\dev.ps1 -stop     -> mata puertos 8000 y 5173-5180
# .\dev.ps1 -migrate  -> migrate:fresh --seed y luego levanta servidores

param(
    [switch]$start,
    [switch]$stop,
    [switch]$migrate
)

$PHP  = "C:\Users\SFS\.config\herd\bin\php84\php.exe"
$ROOT = Split-Path -Parent $MyInvocation.MyCommand.Path

function Kill-Port([int]$Port) {
    $found = netstat -ano 2>$null | Select-String ":$Port\s" | Select-String "LISTENING"
    foreach ($line in $found) {
        $pid = ($line.ToString().Trim() -split '\s+')[-1]
        if ($pid -match '^\d+$') {
            Stop-Process -Id ([int]$pid) -Force -ErrorAction SilentlyContinue
            Write-Host "  Liberado puerto $Port (PID $pid)" -ForegroundColor DarkGray
        }
    }
}

Write-Host ""
Write-Host "== FMDS Dev ==" -ForegroundColor Cyan

# Siempre matar primero
Write-Host "Deteniendo puertos..." -ForegroundColor Yellow
Kill-Port 8000
foreach ($p in 5173..5180) { Kill-Port $p }
Start-Sleep -Seconds 1

if ($stop) {
    Write-Host "Servidores detenidos." -ForegroundColor Green
    exit 0
}

if ($migrate) {
    Write-Host "Ejecutando migraciones..." -ForegroundColor Cyan
    & $PHP "$ROOT\artisan" migrate:fresh --seed
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Error en migraciones." -ForegroundColor Red
        exit 1
    }
    Write-Host "Migraciones OK." -ForegroundColor Green
}

# Laravel — abre una ventana CMD visible con /k para que quede viva
Write-Host "Iniciando Laravel en puerto 8000..." -ForegroundColor Cyan
Start-Process "cmd.exe" `
    -ArgumentList "/k title Laravel-FMDS && `"$PHP`" `"$ROOT\artisan`" serve --host=127.0.0.1 --port=8000" `
    -WorkingDirectory $ROOT

Start-Sleep -Seconds 2

# Vite — otra ventana CMD visible
Write-Host "Iniciando Vite..." -ForegroundColor Cyan
Start-Process "cmd.exe" `
    -ArgumentList "/k title Vite-FMDS && npm run dev" `
    -WorkingDirectory $ROOT

Start-Sleep -Seconds 3

# Verificar
try {
    $r = Invoke-WebRequest "http://127.0.0.1:8000" -TimeoutSec 5 -UseBasicParsing -ErrorAction Stop
    Write-Host "  Laravel OK  -> http://localhost:8000 (HTTP $($r.StatusCode))" -ForegroundColor Green
} catch {
    Write-Host "  Laravel     -> http://localhost:8000 (aun arrancando, espera unos segundos)" -ForegroundColor Yellow
}

Write-Host "  Vite        -> http://localhost:5173" -ForegroundColor Green
Write-Host ""
Write-Host "Listo. Las ventanas de servidores aparecen en la barra de tareas." -ForegroundColor Green
Write-Host "Cierralas para detener los servidores." -ForegroundColor DarkGray
