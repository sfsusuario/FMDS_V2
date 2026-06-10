<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SpiritualityArticle;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class SpiritualityController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/Espiritualidad/Index', [
            'articles' => SpiritualityArticle::latest()->get(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/Espiritualidad/Form', ['article' => null]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'titulo'    => 'required|string|max:255',
            'extracto'  => 'required|string',
            'contenido' => 'nullable|string',
            'imagen'    => 'nullable|image|max:4096',
        ]);

        $data['slug'] = Str::slug($data['titulo']);

        if ($request->hasFile('imagen')) {
            $file = $request->file('imagen');
            $name = uniqid() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads/espiritualidad'), $name);
            $data['imagen'] = '/uploads/espiritualidad/' . $name;
        }

        SpiritualityArticle::create($data);
        return redirect('/admin/espiritualidad')->with('success', 'Artículo creado.');
    }

    public function edit(SpiritualityArticle $espiritualidad): Response
    {
        return Inertia::render('Admin/Espiritualidad/Form', ['article' => $espiritualidad]);
    }

    public function update(Request $request, SpiritualityArticle $espiritualidad)
    {
        $data = $request->validate([
            'titulo'    => 'required|string|max:255',
            'extracto'  => 'required|string',
            'contenido' => 'nullable|string',
            'imagen'    => 'nullable|image|max:4096',
        ]);

        $data['slug'] = Str::slug($data['titulo']);

        if ($request->hasFile('imagen')) {
            $file = $request->file('imagen');
            $name = uniqid() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads/espiritualidad'), $name);
            $data['imagen'] = '/uploads/espiritualidad/' . $name;
        } else {
            unset($data['imagen']);
        }

        $espiritualidad->update($data);
        return redirect('/admin/espiritualidad')->with('success', 'Artículo actualizado.');
    }

    public function destroy(SpiritualityArticle $espiritualidad)
    {
        $espiritualidad->delete();
        return redirect('/admin/espiritualidad')->with('success', 'Artículo eliminado.');
    }
}
