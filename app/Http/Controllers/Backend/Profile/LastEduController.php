<?php

namespace App\Http\Controllers\Backend\Profile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LastEduController extends Controller
{
    public function index()
    {
        $jsfile = 'resources/js/pages/backend/profile/lastEdu.js';
        return view('backend.profile.lastEdu.index', compact('jsfile'));
    }
}
