<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingsController extends Controller {
    public function index() {
        return Inertia::render('Admin/Configuracion/Index', [
            'settings' => Setting::allKeyed(),
        ]);
    }

    public function update(Request $request) {
        $data = $request->validate([
            'telefono'               => 'nullable|string|max:30',
            'whatsapp'               => 'nullable|string|max:30',
            'direccion'              => 'nullable|string|max:200',
            'email_contacto'         => 'nullable|email|max:100',
            'descripcion_hero'       => 'nullable|string|max:400',
            'descripcion_quienes'    => 'nullable|string|max:600',
            'facebook_url'           => 'nullable|url|max:200',
            'instagram_url'          => 'nullable|url|max:200',
            'youtube_url'            => 'nullable|url|max:200',
        ]);
        foreach ($data as $key => $value) {
            Setting::set($key, $value ?? '');
        }
        return back()->with('success', 'Configuración guardada.');
    }
}
