<?php

namespace App\Http\Controllers;

use App\Models\SpiritualityArticle;
use Inertia\Inertia;
use Inertia\Response;

class SpiritualityController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Espiritualidad', [
            'articles' => SpiritualityArticle::all(),
        ]);
    }

    public function show(string $slug): Response
    {
        $article = SpiritualityArticle::where('slug', $slug)->firstOrFail();

        return Inertia::render('EspiritualidadArticulo', [
            'article' => $article,
        ]);
    }
}
