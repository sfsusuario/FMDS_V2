<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Fundación Mesa del Señor - La pasión de compartir. Proyectos sociales franciscanos en Colombia.">
        <meta property="og:title" content="Fundación Mesa del Señor">
        <meta property="og:description" content="La pasión de compartir - Proyectos sociales franciscanos en Colombia">
        <meta property="og:type" content="website">
        <meta property="og:url" content="{{ url()->current() }}">
        <link rel="icon" type="image/x-icon" href="/favicon.ico">
        <title inertia>{{ config('app.name', 'Mesa del Señor') }}</title>
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx'])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
