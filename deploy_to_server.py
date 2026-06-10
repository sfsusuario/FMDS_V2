"""
deploy_to_server.py — Sube cambios al servidor Hostinger y corre deploy.sh
Uso: python3 deploy_to_server.py
"""
import paramiko, os, tarfile, sys
sys.stdout.reconfigure(encoding='utf-8')

HOST   = "86.38.202.83"
PORT   = 65002
USER   = "u455288436"
PASSWD = "Sam6722102-*"

SRC    = os.path.dirname(os.path.abspath(__file__))
TAR    = os.path.join(os.path.dirname(SRC), "fmds_update.tar.gz")

SKIP_DIRS = {"node_modules", ".git", "__pycache__"}
SKIP_PFXS = ("storage/logs/", "storage/framework/cache/",
             "storage/framework/sessions/", "storage/framework/views/")

# ── 1. Empacar ────────────────────────────────────────────────
print("[1/3] Empacando archivos...")
count = 0
with tarfile.open(TAR, "w:gz") as tar:
    for root, dirs, files in os.walk(SRC):
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
        for fname in files:
            full = os.path.join(root, fname)
            rel = os.path.relpath(full, SRC).replace("\\", "/")
            if any(rel.startswith(p) for p in SKIP_PFXS):
                continue
            tar.add(full, arcname=rel)
            count += 1
size = os.path.getsize(TAR) / 1024 / 1024
print(f"  {count} archivos, {size:.1f} MB")

# ── 2. Subir ─────────────────────────────────────────────────
print("[2/3] Subiendo al servidor...")
client = paramiko.SSHClient()
client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
client.connect(HOST, port=PORT, username=USER, password=PASSWD, timeout=20)

def run(cmd, timeout=120):
    _, stdout, stderr = client.exec_command(cmd, timeout=timeout)
    out = stdout.read().decode().strip()
    err = stderr.read().decode().strip()
    if out: print(f"  {out[:300]}")
    if err and len(err) < 200: print(f"  ERR: {err}")
    return out

def progress(sent, total):
    pct = sent / total * 100
    print(f"\r  {pct:.0f}%  {sent//1024//1024}MB / {total//1024//1024}MB", end="", flush=True)

sftp = client.open_sftp()
sftp.put(TAR, "/home/u455288436/fmds_update.tar.gz", callback=progress)
sftp.close()
print()
os.remove(TAR)

# ── 3. Extraer y deployar ─────────────────────────────────────
print("[3/3] Desplegando en servidor...")
run("tar -xzf ~/fmds_update.tar.gz -C ~/laravel/ --overwrite")
run("rm ~/fmds_update.tar.gz")
run("cd ~/laravel && composer install --no-dev --optimize-autoloader --no-interaction 2>&1", timeout=300)
run("cd ~/laravel && php artisan migrate --force 2>&1")
run("cd ~/laravel && php artisan config:cache && php artisan route:cache && php artisan view:cache 2>&1")
run("chmod -R 775 ~/laravel/storage ~/laravel/bootstrap/cache")

# Sync public/ assets to public_html
run("cp -r ~/laravel/public/build ~/domains/mesadelsenor.co/public_html/")
run("cp -r ~/laravel/public/img ~/domains/mesadelsenor.co/public_html/ 2>/dev/null || true")

client.close()
print("\nDeploy completado!")
