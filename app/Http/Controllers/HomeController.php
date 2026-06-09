<?php

namespace App\Http\Controllers;

use App\Models\News;
use App\Models\Project;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        $projects = Project::all();
        $latestNews = News::latest()->take(3)->get();

        return Inertia::render('Home', [
            'projects' => $projects,
            'latestNews' => $latestNews,
        ]);
    }

    public function apoyanos(): Response
    {
        $projects = Project::all();
        return Inertia::render('Apoyanos', ['projects' => $projects]);
    }

    public function dianEsal(): Response
    {
        return Inertia::render('DianEsal');
    }

    public function codigoEtico(): Response
    {
        return Inertia::render('CodigoEtico');
    }
}
