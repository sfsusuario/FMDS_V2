<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Fundación Mesa del Señor - La pasión de compartir. Proyectos sociales franciscanos en Colombia.">
        <meta property="og:title" content="Fundación Mesa del Señor">
        <meta property="og:description" content="La pasión de compartir - Proyectos sociales franciscanos en Colombia">
        <meta property="og:type" content="website">
        <meta property="og:url" content="<?php echo e(url()->current()); ?>">
        <link rel="icon" type="image/x-icon" href="/favicon.ico">
        <title inertia><?php echo e(config('app.name', 'Mesa del Señor')); ?></title>
        <?php echo app('Tighten\Ziggy\BladeRouteGenerator')->generate(); ?>
        <?php echo app('Illuminate\Foundation\Vite')->reactRefresh(); ?>
        <?php echo app('Illuminate\Foundation\Vite')(['resources/js/app.jsx']); ?>
        <?php if (!isset($__inertiaSsrDispatched)) { $__inertiaSsrDispatched = true; $__inertiaSsrResponse = app(\Inertia\Ssr\Gateway::class)->dispatch($page); }  if ($__inertiaSsrResponse) { echo $__inertiaSsrResponse->head; } ?>
    </head>
    <body class="font-sans antialiased">
        <?php if (!isset($__inertiaSsrDispatched)) { $__inertiaSsrDispatched = true; $__inertiaSsrResponse = app(\Inertia\Ssr\Gateway::class)->dispatch($page); }  if ($__inertiaSsrResponse) { echo $__inertiaSsrResponse->body; } elseif (config('inertia.use_script_element_for_initial_page')) { ?><script data-page="app" type="application/json"><?php echo json_encode($page); ?></script><div id="app"></div><?php } else { ?><div id="app" data-page="<?php echo e(json_encode($page)); ?>"></div><?php } ?>
    </body>
</html>
<?php /**PATH C:\code\FMDS_V2\resources\views/app.blade.php ENDPATH**/ ?>