<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\News;
use App\Models\Prayer;
use App\Models\Project;
use App\Models\SpiritualityArticle;
use App\Models\TeamMember;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'projects'    => Project::count(),
                'news'        => News::count(),
                'spirituality' => SpiritualityArticle::count(),
                'prayers'     => Prayer::count(),
                'team'        => TeamMember::count(),
            ],
        ]);
    }
}
