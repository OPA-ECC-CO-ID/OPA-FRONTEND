<?php

namespace App\Http\Controllers\Backend\Profile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    public function index()
    {
        $jsfile = 'resources/js/pages/backend/profile/skill.js';
        return view('backend.profile.skill.index', compact('jsfile'));
    }
}
