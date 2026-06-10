@echo off
REM ─────────────────────────────────────────────
REM  Mesa del Señor — Conexión SSH a Hostinger
REM  Uso: doble click o ejecutar desde cmd
REM ─────────────────────────────────────────────

set SSH_HOST=86.38.202.83
set SSH_PORT=65002
set SSH_USER=u455288436

echo Conectando a Hostinger...
echo Host: %SSH_HOST%:%SSH_PORT%
echo.

ssh -p %SSH_PORT% %SSH_USER%@%SSH_HOST%
