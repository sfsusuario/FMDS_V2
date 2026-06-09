<?php

return [
    'name' => env('APP_NAME', 'Mesa del Señor'),
    'env' => env('APP_ENV', 'production'),
    'debug' => (bool) env('APP_DEBUG', false),
    'url' => env('APP_URL', 'http://localhost'),
    'asset_url' => env('ASSET_URL'),
    'timezone' => 'America/Bogota',
    'locale' => 'es',
    'fallback_locale' => 'es',
    'faker_locale' => 'es_CO',
    'cipher' => 'AES-256-CBC',
    'key' => env('APP_KEY'),
    'previous_keys' => [],
    'maintenance' => ['driver' => 'file'],
    'providers' => \Illuminate\Support\ServiceProvider::defaultProviders()->merge([
        App\Providers\AppServiceProvider::class,
    ])->toArray(),
    'aliases' => \Illuminate\Support\Facades\Facade::defaultAliases()->merge([])->toArray(),
];
