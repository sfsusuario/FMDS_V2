<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProjectController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/Proyectos/Index', [
            'projects' => Project::latest()->get(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/Proyectos/Form', ['project' => null]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'titulo'      => 'required|string|max:255',
            'descripcion' => 'required|string',
            'contenido'   => 'nullable|string',
            'activo'      => 'boolean',
            'imagen'      => 'nullable|image|max:4096',
        ]);

        if ($request->hasFile('imagen')) {
            $file = $request->file('imagen');
            $name = uniqid() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads/proyectos'), $name);
            $data['imagen'] = '/uploads/proyectos/' . $name;
        }

        Project::create($data);
        return redirect('/admin/proyectos')->with('success', 'Proyecto creado.');
    }

    public function edit(Project $project): Response
    {
        return Inertia::render('Admin/Proyectos/Form', ['project' => $project]);
    }

    public function update(Request $request, Project $project)
    {
        $data = $request->validate([
            'titulo'      => 'required|string|max:255',
            'descripcion' => 'required|string',
            'contenido'   => 'nullable|string',
            'activo'      => 'boolean',
            'imagen'      => 'nullable|image|max:4096',
        ]);

        if ($request->hasFile('imagen')) {
            $file = $request->file('imagen');
            $name = uniqid() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads/proyectos'), $name);
            $data['imagen'] = '/uploads/proyectos/' . $name;
        } else {
            unset($data['imagen']);
        }

        $project->update($data);
        return redirect('/admin/proyectos')->with('success', 'Proyecto actualizado.');
    }

    public function destroy(Project $project)
    {
        $project->delete();
        return redirect('/admin/proyectos')->with('success', 'Proyecto eliminado.');
    }
}
