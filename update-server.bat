@echo off
REM ─────────────────────────────────────────────
REM  Mesa del Señor — Subir update al servidor
REM  1. Compila assets
REM  2. Hace commit + push a GitHub
REM  3. Se conecta SSH y corre deploy.sh
REM
REM  Requiere: Git configurado, SSH habilitado
REM ─────────────────────────────────────────────

set SSH_HOST=86.38.202.83
set SSH_PORT=65002
set SSH_USER=u455288436
set APP_DIR=~/app

echo.
echo [1/3] Compilando assets de produccion...
call npm run build
if errorlevel 1 ( echo ERROR en npm run build & pause & exit /b 1 )

echo.
echo [2/3] Haciendo commit y push...
git add .
set /p COMMIT_MSG=Mensaje del commit (o Enter para 'update'):
if "%COMMIT_MSG%"=="" set COMMIT_MSG=update
git commit -m "%COMMIT_MSG%"
git push
if errorlevel 1 ( echo ERROR en git push & pause & exit /b 1 )

echo.
echo [3/3] Conectando al servidor para deploy...
echo Se abrira SSH. Ejecuta: cd %APP_DIR% ^&^& bash deploy.sh
echo.
ssh -p %SSH_PORT% %SSH_USER%@%SSH_HOST%

pause
