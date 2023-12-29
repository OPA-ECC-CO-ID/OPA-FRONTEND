<?php

namespace App\Http\Controllers\frontend\Profile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SkillsController extends Controller
{
    public function index()
    {
        $jsfile = 'resources/js/pages/frontend/profile/skills.js';
        return view('frontend.profile.skills', compact('jsfile'));
    }
}
