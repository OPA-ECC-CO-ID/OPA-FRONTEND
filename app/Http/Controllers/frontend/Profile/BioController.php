<?php

namespace App\Http\Controllers\frontend\Profile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BioController extends Controller
{
    public function index()
    {
        $jsfile = 'resources/js/pages/frontend/profile/bio.js';
        return view('frontend.profile.bio', compact('jsfile'));
    }
}
