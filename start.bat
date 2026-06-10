@echo off
cd /d "C:\code\FMDS_V2"

start "Laravel-FMDS" "C:\Users\SFS\.config\herd\bin\php84\php.exe" artisan serve --host=127.0.0.1 --port=8000

start "Vite-FMDS" cmd /k npm run dev
