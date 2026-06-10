<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\SpiritualityController;
use App\Http\Controllers\Admin;
use Illuminate\Support\Facades\Route;

// Público
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/apoyanos', [HomeController::class, 'apoyanos'])->name('apoyanos');
Route::get('/proyectos', [ProjectController::class, 'index'])->name('proyectos');
Route::get('/proyecto/{id}', [ProjectController::class, 'show'])->name('proyecto');
Route::get('/espiritualidad', [SpiritualityController::class, 'index'])->name('espiritualidad');
Route::get('/espiritualidad/{slug}', [SpiritualityController::class, 'show'])->name('espiritualidad.show');
Route::get('/noticias', [NewsController::class, 'index'])->name('noticias');
Route::get('/noticias/{slug}', [NewsController::class, 'show'])->name('noticias.show');
Route::get('/DIAN-ESAL', [HomeController::class, 'dianEsal'])->name('dian-esal');
Route::get('/codigo_etico', [HomeController::class, 'codigoEtico'])->name('codigo-etico');
Route::get('/contacto', [ContactController::class, 'index'])->name('contacto');
Route::post('/contacto', [ContactController::class, 'send'])->name('contacto.send');
Route::post('/plegaria', [ContactController::class, 'plegaria'])->name('plegaria');

// Admin auth
Route::get('/admin/login', [Admin\AuthController::class, 'showLogin'])->name('admin.login');
Route::post('/admin/login', [Admin\AuthController::class, 'login'])->name('admin.login.post');
Route::post('/admin/logout', [Admin\AuthController::class, 'logout'])->name('admin.logout');

// Admin panel (protegido)
Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', [Admin\DashboardController::class, 'index'])->name('dashboard');

    Route::get('proyectos',                [Admin\ProjectController::class, 'index'])->name('proyectos');
    Route::get('proyectos/crear',          [Admin\ProjectController::class, 'create'])->name('proyectos.create');
    Route::post('proyectos',               [Admin\ProjectController::class, 'store'])->name('proyectos.store');
    Route::get('proyectos/{project}/edit', [Admin\ProjectController::class, 'edit'])->name('proyectos.edit');
    Route::post('proyectos/{project}',     [Admin\ProjectController::class, 'update'])->name('proyectos.update');
    Route::delete('proyectos/{project}',   [Admin\ProjectController::class, 'destroy'])->name('proyectos.destroy');

    Route::get('noticias',             [Admin\NewsController::class, 'index'])->name('noticias');
    Route::get('noticias/crear',       [Admin\NewsController::class, 'create'])->name('noticias.create');
    Route::post('noticias',            [Admin\NewsController::class, 'store'])->name('noticias.store');
    Route::get('noticias/{news}/edit', [Admin\NewsController::class, 'edit'])->name('noticias.edit');
    Route::post('noticias/{news}',     [Admin\NewsController::class, 'update'])->name('noticias.update');
    Route::delete('noticias/{news}',   [Admin\NewsController::class, 'destroy'])->name('noticias.destroy');

    Route::get('espiritualidad',                       [Admin\SpiritualityController::class, 'index'])->name('espiritualidad');
    Route::get('espiritualidad/crear',                 [Admin\SpiritualityController::class, 'create'])->name('espiritualidad.create');
    Route::post('espiritualidad',                      [Admin\SpiritualityController::class, 'store'])->name('espiritualidad.store');
    Route::get('espiritualidad/{espiritualidad}/edit', [Admin\SpiritualityController::class, 'edit'])->name('espiritualidad.edit');
    Route::post('espiritualidad/{espiritualidad}',     [Admin\SpiritualityController::class, 'update'])->name('espiritualidad.update');
    Route::delete('espiritualidad/{espiritualidad}',   [Admin\SpiritualityController::class, 'destroy'])->name('espiritualidad.destroy');

    Route::get('plegarias',                      [Admin\PrayerController::class, 'index'])->name('plegarias');
    Route::post('plegarias/{prayer}/aprobar',    [Admin\PrayerController::class, 'approve'])->name('plegarias.approve');
    Route::post('plegarias/{prayer}/rechazar',   [Admin\PrayerController::class, 'reject'])->name('plegarias.reject');
    Route::post('plegarias/{prayer}/visible',    [Admin\PrayerController::class, 'toggleVisible'])->name('plegarias.visible');
    Route::delete('plegarias/{prayer}',          [Admin\PrayerController::class, 'destroy'])->name('plegarias.destroy');
});
