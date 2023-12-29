<?php

namespace App\Http\Controllers\frontend\Profile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LastEduController extends Controller
{
    public function index()
    {
        $jsfile = 'resources/js/pages/frontend/profile/last-edu.js';
        return view('frontend.profile.last-edu', compact('jsfile'));
    }
}
