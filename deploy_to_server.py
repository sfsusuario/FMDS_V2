"""
deploy_to_server.py — Deploy automatizado a Hostinger
Uso: python deploy_to_server.py [--skip-build] [--skip-git-pull]
"""
import os, sys, tarfile, subprocess, argparse, paramiko
sys.stdout.reconfigure(encoding='utf-8')

HOST   = "86.38.202.83"
PORT   = 65002
USER   = "u455288436"
PASSWD = "Sam6722102-*"

SRC = os.path.dirname(os.path.abspath(__file__))

SKIP_DIRS  = {"node_modules", ".git", "__pycache__", ".vite"}
SKIP_FILES = {".env", ".env.example", "deploy_to_server.py", "deploy_hostinger.py"}
SKIP_PFXS  = (
    "storage/logs/",
    "storage/framework/cache/",
    "storage/framework/sessions/",
    "storage/framework/views/",
    "tests/",
)

# ── Args ──────────────────────────────────────────────────────────
parser = argparse.ArgumentParser()
parser.add_argument("--skip-build",    action="store_true", help="No ejecutar npm run build")
parser.add_argument("--skip-git-pull", action="store_true", help="No hacer git pull antes de desplegar")
args = parser.parse_args()

# ── 0. Git pull local ────────────────────────────────────────────
if not args.skip_git_pull:
    print("[0/4] Obteniendo cambios del repositorio git...")
    result = subprocess.run(["git", "pull"], cwd=SRC, capture_output=True, text=True)
    if result.returncode == 0:
        print(f"  {result.stdout.strip() or 'Sin cambios nuevos'}")
    else:
        print(f"  WARN: git pull falló — {result.stderr.strip()}")
        print("  Continuando con archivos locales actuales...")

# ── 1. Build assets ───────────────────────────────────────────────
if not args.skip_build:
    print("[1/4] Compilando assets (npm run build)...")
    result = subprocess.run(["npm", "run", "build"], cwd=SRC, capture_output=True, text=True, shell=(os.name == 'nt'))
    if result.returncode != 0:
        print(f"  ERROR: {result.stderr[-500:]}")
        sys.exit(1)
    print("  Assets compilados OK")
else:
    print("[1/4] Build omitido (--skip-build)")

# ── 2. Empacar ────────────────────────────────────────────────────
TAR = os.path.join(os.path.dirname(SRC), "fmds_update.tar.gz")
print("[2/4] Empacando archivos...")
count = 0
with tarfile.open(TAR, "w:gz") as tar:
    for root, dirs, files in os.walk(SRC):
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
        rel_root = os.path.relpath(root, SRC).replace("\\", "/")
        for fname in files:
            if fname in SKIP_FILES:
                continue
            full = os.path.join(root, fname)
            rel  = os.path.join(rel_root, fname).replace("\\", "/").lstrip("./")
            if any(rel.startswith(p) for p in SKIP_PFXS):
                continue
            tar.add(full, arcname=rel)
            count += 1

size = os.path.getsize(TAR) / 1024 / 1024
print(f"  {count} archivos, {size:.1f} MB")

# ── 3. Subir ──────────────────────────────────────────────────────
print("[3/4] Conectando al servidor...")
client = paramiko.SSHClient()
client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
client.connect(HOST, port=PORT, username=USER, password=PASSWD, timeout=20)

def run(cmd, timeout=120, show_err=True):
    _, stdout, stderr = client.exec_command(cmd, timeout=timeout)
    out = stdout.read().decode('utf-8', errors='replace').strip()
    err = stderr.read().decode('utf-8', errors='replace').strip()
    if out: print(f"  {out[:400]}")
    if show_err and err and len(err) < 300 and "warning" not in err.lower():
        print(f"  ERR: {err[:300]}")
    return out

def progress(sent, total):
    pct = sent / total * 100
    mb  = sent  / 1024 / 1024
    tot = total / 1024 / 1024
    print(f"\r  {pct:.0f}%  {mb:.1f}MB / {tot:.1f}MB", end="", flush=True)

sftp = client.open_sftp()
print("Subiendo paquete...")
sftp.put(TAR, "/home/u455288436/fmds_update.tar.gz", callback=progress)
sftp.close()
print()
os.remove(TAR)

# ── 4. Extraer y desplegar ────────────────────────────────────────
print("[4/4] Desplegando en servidor...")

# Extraer sin sobreescribir .env
run("tar -xzf ~/fmds_update.tar.gz -C ~/laravel/ --overwrite --exclude='.env'")
run("rm ~/fmds_update.tar.gz")

# Actualizar public assets
run("cp -r ~/laravel/public/build ~/domains/mesadelsenor.co/public_html/ 2>&1")
run("cp -r ~/laravel/public/img   ~/domains/mesadelsenor.co/public_html/ 2>/dev/null || true", show_err=False)

# Actualizar index.php (nuestra versión detecta automáticamente dev vs prod)
run("cp ~/laravel/public/index.php ~/domains/mesadelsenor.co/public_html/index.php")

# Dependencias PHP
print("  Instalando dependencias composer...")
run("cd ~/laravel && composer install --no-dev --optimize-autoloader --no-interaction 2>&1", timeout=300)

# Migraciones y caché
run("cd ~/laravel && php artisan config:clear 2>&1")
run("cd ~/laravel && php artisan migrate --force 2>&1")
run("cd ~/laravel && php artisan config:cache && php artisan route:cache && php artisan view:cache 2>&1")

# Permisos
run("chmod -R 775 ~/laravel/storage ~/laravel/bootstrap/cache")

client.close()
print("\n✓ Deploy completado! Sitio: https://mesadelsenor.co")
