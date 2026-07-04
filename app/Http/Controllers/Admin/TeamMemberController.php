<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\TeamMember;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TeamMemberController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/Equipo/Index', [
            'members' => TeamMember::orderBy('orden')->get(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/Equipo/Form', ['member' => null]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'nombre' => 'required|string|max:255',
            'cargo'  => 'required|string|max:255',
            'email'  => 'nullable|email|max:255',
            'orden'  => 'nullable|integer|min:0',
            'activo' => 'boolean',
            'foto'   => 'nullable|image|max:4096',
        ]);

        if ($request->hasFile('foto')) {
            $file = $request->file('foto');
            $name = uniqid() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads/equipo'), $name);
            $data['foto'] = '/uploads/equipo/' . $name;
        }

        TeamMember::create($data);
        return redirect('/admin/equipo')->with('success', 'Integrante creado.');
    }

    public function edit(TeamMember $equipo): Response
    {
        return Inertia::render('Admin/Equipo/Form', ['member' => $equipo]);
    }

    public function update(Request $request, TeamMember $equipo)
    {
        $data = $request->validate([
            'nombre' => 'required|string|max:255',
            'cargo'  => 'required|string|max:255',
            'email'  => 'nullable|email|max:255',
            'orden'  => 'nullable|integer|min:0',
            'activo' => 'boolean',
            'foto'   => 'nullable|image|max:4096',
        ]);

        if ($request->hasFile('foto')) {
            $file = $request->file('foto');
            $name = uniqid() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads/equipo'), $name);
            $data['foto'] = '/uploads/equipo/' . $name;
        } else {
            unset($data['foto']);
        }

        $equipo->update($data);
        return redirect('/admin/equipo')->with('success', 'Integrante actualizado.');
    }

    public function destroy(TeamMember $equipo)
    {
        $equipo->delete();
        return redirect('/admin/equipo')->with('success', 'Integrante eliminado.');
    }
}
