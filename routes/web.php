<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\SpiritualityController;
use Illuminate\Support\Facades\Route;

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
