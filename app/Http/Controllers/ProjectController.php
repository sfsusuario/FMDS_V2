<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Inertia\Inertia;
use Inertia\Response;

class ProjectController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Proyectos', [
            'projects' => Project::all(),
        ]);
    }

    public function show(int $id): Response
    {
        $project = Project::findOrFail($id);

        return Inertia::render('Proyecto', [
            'project' => $project,
        ]);
    }
}
