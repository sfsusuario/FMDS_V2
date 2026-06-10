<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Prayer extends Model
{
    protected $fillable = ['nombre', 'telefono', 'email', 'plegaria', 'estado', 'visible'];
}
