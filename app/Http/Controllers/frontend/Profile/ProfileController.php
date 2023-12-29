<?php

namespace App\Http\Controllers\frontend\Profile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function index()
    {
        $jsfile = 'resources/js/pages/frontend/profile/profile.js';
        return view('frontend.profile.profile', compact('jsfile'));
    }
}
