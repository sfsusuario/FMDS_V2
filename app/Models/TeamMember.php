<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TeamMember extends Model
{
    protected $fillable = ['nombre', 'cargo', 'email', 'foto', 'orden', 'activo'];

    protected $casts = ['activo' => 'boolean', 'orden' => 'integer'];
}
