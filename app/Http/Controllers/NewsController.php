<?php

namespace App\Http\Controllers;

use App\Models\News;
use Inertia\Inertia;
use Inertia\Response;

class NewsController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Noticias', [
            'news' => News::latest()->paginate(9),
        ]);
    }

    public function show(string $slug): Response
    {
        $article = News::where('slug', $slug)->firstOrFail();

        return Inertia::render('NoticiaDetalle', [
            'article' => $article,
        ]);
    }
}
