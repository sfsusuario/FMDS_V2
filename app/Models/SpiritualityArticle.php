<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SpiritualityArticle extends Model
{
    protected $table = 'spirituality_articles';

    protected $fillable = ['titulo', 'slug', 'extracto', 'contenido', 'imagen'];
}
