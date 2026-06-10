# deploy.ps1 — Ejecuta el deploy a Hostinger desde PowerShell
# Uso: .\deploy.ps1 [-SkipBuild] [-SkipGitPull]

param(
    [switch]$SkipBuild,
    [switch]$SkipGitPull
)

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

$args = @()
if ($SkipBuild)    { $args += "--skip-build" }
if ($SkipGitPull)  { $args += "--skip-git-pull" }

python deploy_to_server.py @args
