<?php

namespace App\Http\Controllers;

use App\Models\News;
use App\Models\Project;
use App\Models\SpiritualityArticle;
use Illuminate\Http\Response;

class SitemapController extends Controller
{
    public function index(): Response
    {
        $projects     = Project::select('id', 'updated_at')->get();
        $news         = News::select('slug', 'updated_at')->latest()->get();
        $spirituality = SpiritualityArticle::select('slug', 'updated_at')->latest()->get();

        $content = view('sitemap', compact('projects', 'news', 'spirituality'))->render();

        return response($content, 200, [
            'Content-Type' => 'application/xml',
        ]);
    }
}
