#!/bin/bash
# Script de actualización en el servidor (correr después del primer setup)
set -e

echo "→ Descargando cambios..."
git pull origin main

echo "→ Instalando dependencias PHP..."
composer install --no-dev --optimize-autoloader --no-interaction

echo "→ Migraciones..."
php artisan migrate --force

echo "→ Limpiando cachés..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

echo "→ Permisos de storage..."
chmod -R 775 storage bootstrap/cache

echo "✓ Deploy completado."
