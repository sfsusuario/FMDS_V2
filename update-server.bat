@echo off
REM ─────────────────────────────────────────────
REM  Mesa del Señor — Subir update al servidor
REM  1. Compila assets localmente
REM  2. Hace commit + push a GitHub (opcional)
REM  3. Sube archivos via Python/SFTP al servidor
REM  4. Corre deploy.sh en el servidor
REM ─────────────────────────────────────────────

echo.
echo [1/2] Compilando assets de produccion...
call npm run build
if errorlevel 1 ( echo ERROR en npm run build & pause & exit /b 1 )

echo.
echo [2/2] Subiendo y desplegando en servidor...
python3 "%~dp0deploy_to_server.py"
if errorlevel 1 ( echo ERROR en deploy & pause & exit /b 1 )

echo.
echo Deploy completado!
pause
