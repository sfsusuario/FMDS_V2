<?php

define('LARAVEL_START', microtime(true));

// On Hostinger shared hosting, the Laravel app lives at ~/laravel/
// while public_html is at ~/domains/mesadelsenor.co/public_html/ (3 levels from ~)
// In local dev, public/ is directly inside the Laravel root, so ../  works normally.
$laravelBase = is_dir(__DIR__.'/../vendor') ? __DIR__.'/..' : __DIR__.'/../../../laravel';

if (file_exists($maintenance = $laravelBase.'/storage/framework/maintenance.php')) {
    require $maintenance;
}

require $laravelBase.'/vendor/autoload.php';

$app = require_once $laravelBase.'/bootstrap/app.php';

$app->handleRequest(Illuminate\Http\Request::capture());
