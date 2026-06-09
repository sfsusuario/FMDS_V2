<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    protected $fillable = ['titulo', 'slug', 'extracto', 'contenido', 'imagen', 'publicado_en'];

    protected $casts = ['publicado_en' => 'datetime'];
}
