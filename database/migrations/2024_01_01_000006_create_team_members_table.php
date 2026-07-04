<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('team_members', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('cargo');
            $table->string('email')->nullable();
            $table->string('foto')->nullable();
            $table->unsignedInteger('orden')->default(0);
            $table->boolean('activo')->default(true);
            $table->timestamps();
        });

        // Datos por defecto del equipo directivo
        $now = now();
        DB::table('team_members')->insert([
            ['nombre' => 'Fray Nelson Tovar Alarcón', 'cargo' => 'Presidente',           'email' => 'ravot64@gmail.com',         'foto' => '/img/equipo/presidente.jpeg',     'orden' => 1, 'activo' => true, 'created_at' => $now, 'updated_at' => $now],
            ['nombre' => 'Fray Alonso Morales Duque', 'cargo' => 'Secretario Ejecutivo', 'email' => 'alonsony93@gmail.com',      'foto' => '/img/equipo/secretario.jpeg',     'orden' => 2, 'activo' => true, 'created_at' => $now, 'updated_at' => $now],
            ['nombre' => 'Florencia Cataño',          'cargo' => 'Vicepresidenta',       'email' => 'florenciacatano@gmail.com', 'foto' => '/img/equipo/vicepresidente.jpeg', 'orden' => 3, 'activo' => true, 'created_at' => $now, 'updated_at' => $now],
        ]);
    }
    public function down(): void { Schema::dropIfExists('team_members'); }
};
