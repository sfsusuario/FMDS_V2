<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = ['titulo', 'descripcion', 'contenido', 'imagen', 'activo'];

    protected $casts = ['activo' => 'boolean'];
}
