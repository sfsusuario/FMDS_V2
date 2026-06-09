<?php

namespace App\Http\Controllers;

use App\Models\Prayer;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Contacto');
    }

    public function send(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:100',
            'email'  => 'required|email',
            'asunto' => 'required|string|max:150',
            'mensaje' => 'required|string|max:2000',
        ]);

        Mail::raw(
            "Nombre: {$validated['nombre']}\nEmail: {$validated['email']}\n\n{$validated['mensaje']}",
            function ($message) use ($validated) {
                $message->to(config('mail.from.address'))
                    ->subject("Contacto web: {$validated['asunto']}");
            }
        );

        return back()->with('success', 'Mensaje enviado. ¡Gracias por contactarnos!');
    }

    public function plegaria(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'nombre'   => 'required|string|max:100',
            'telefono' => 'nullable|string|max:20',
            'email'    => 'nullable|email|max:100',
            'plegaria' => 'required|string|max:2000',
        ]);

        Prayer::create($validated);

        return back()->with('success', '¡Tu plegaria ha sido recibida! La encomendamos en oración.');
    }
}
