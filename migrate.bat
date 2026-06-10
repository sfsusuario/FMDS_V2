@echo off
cd /d "C:\code\FMDS_V2"
"C:\Users\SFS\.config\herd\bin\php84\php.exe" artisan migrate:fresh --seed
pause
