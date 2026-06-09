#!/bin/bash
# Script de post-deploy para Hostinger
# Ejecutar una vez desde SSH después del primer git pull

set -e

echo "==> Instalando dependencias PHP..."
composer install --no-dev --optimize-autoloader

echo "==> Instalando dependencias Node.js..."
npm ci

echo "==> Compilando assets..."
npm run build

echo "==> Configurando .env..."
if [ ! -f .env ]; then
    cp .env.example .env
    php artisan key:generate
    echo "⚠️  Edita el archivo .env con tus credenciales de BD y correo."
fi

echo "==> Optimizando Laravel..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

echo "==> Ejecutando migraciones..."
php artisan migrate --force

echo "==> Sembrando datos iniciales..."
php artisan db:seed --force

echo "==> Creando enlace de storage..."
php artisan storage:link

echo ""
echo "✅ Deploy completado."
echo ""
echo "Próximos pasos en Hostinger hPanel:"
echo "1. Dominios > Administrar > Cambiar raíz del documento a: ~/public_html/public"
echo "   (o al path donde está el proyecto)/public"
echo "2. Configura el .env con los datos de tu BD MySQL de Hostinger"
echo "3. Configura MAIL_ con los datos SMTP de Hostinger"
