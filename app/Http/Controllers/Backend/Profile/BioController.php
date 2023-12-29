<?php

namespace App\Http\Controllers\Backend\Profile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BioController extends Controller
{
    public function index()
    {
        $jsfile = 'resources/js/pages/backend/profile/bio.js';
        return view('backend.profile.bio.index', compact('jsfile'));
    }
}
