<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class NewsController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/Noticias/Index', [
            'news' => News::latest()->get(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/Noticias/Form', ['article' => null]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'titulo'       => 'required|string|max:255',
            'extracto'     => 'required|string',
            'contenido'    => 'nullable|string',
            'publicado_en' => 'nullable|date',
            'imagen'       => 'nullable|image|max:4096',
        ]);

        $data['slug'] = Str::slug($data['titulo']);

        if ($request->hasFile('imagen')) {
            $file = $request->file('imagen');
            $name = uniqid() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads/noticias'), $name);
            $data['imagen'] = '/uploads/noticias/' . $name;
        }

        News::create($data);
        return redirect('/admin/noticias')->with('success', 'Noticia creada.');
    }

    public function edit(News $news): Response
    {
        return Inertia::render('Admin/Noticias/Form', ['article' => $news]);
    }

    public function update(Request $request, News $news)
    {
        $data = $request->validate([
            'titulo'       => 'required|string|max:255',
            'extracto'     => 'required|string',
            'contenido'    => 'nullable|string',
            'publicado_en' => 'nullable|date',
            'imagen'       => 'nullable|image|max:4096',
        ]);

        $data['slug'] = Str::slug($data['titulo']);

        if ($request->hasFile('imagen')) {
            $file = $request->file('imagen');
            $name = uniqid() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads/noticias'), $name);
            $data['imagen'] = '/uploads/noticias/' . $name;
        } else {
            unset($data['imagen']);
        }

        $news->update($data);
        return redirect('/admin/noticias')->with('success', 'Noticia actualizada.');
    }

    public function destroy(News $news)
    {
        $news->delete();
        return redirect('/admin/noticias')->with('success', 'Noticia eliminada.');
    }
}
