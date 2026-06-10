<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Prayer;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PrayerController extends Controller
{
    public function index(Request $request): Response
    {
        $query = Prayer::latest();
        if ($request->estado && in_array($request->estado, ['pendiente', 'aprobada', 'rechazada'])) {
            $query->where('estado', $request->estado);
        }
        return Inertia::render('Admin/Plegarias/Index', [
            'prayers' => $query->paginate(25)->withQueryString(),
        ]);
    }

    public function approve(Prayer $prayer)
    {
        $prayer->update(['estado' => 'aprobada', 'visible' => true]);
        return back()->with('success', 'Plegaria aprobada y publicada.');
    }

    public function reject(Prayer $prayer)
    {
        $prayer->update(['estado' => 'rechazada', 'visible' => false]);
        return back()->with('success', 'Plegaria rechazada.');
    }

    public function toggleVisible(Prayer $prayer)
    {
        $prayer->update(['visible' => !$prayer->visible]);
        return back()->with('success', 'Visibilidad actualizada.');
    }

    public function destroy(Prayer $prayer)
    {
        $prayer->delete();
        return back()->with('success', 'Plegaria eliminada.');
    }
}
