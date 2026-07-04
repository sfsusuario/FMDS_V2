<?php

namespace App\Http\Controllers;

use App\Models\News;
use App\Models\Prayer;
use App\Models\Project;
use App\Models\TeamMember;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        $projects = Project::all();
        $latestNews = News::latest()->take(3)->get();
        $prayers = Prayer::where('estado', 'aprobada')->where('visible', true)->latest()->take(12)->get(['id', 'nombre', 'plegaria']);

        return Inertia::render('Home', [
            'projects'  => $projects,
            'latestNews' => $latestNews,
            'prayers'   => $prayers,
            'team'      => TeamMember::where('activo', true)->orderBy('orden')->get(['id', 'nombre', 'cargo', 'email', 'foto']),
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
