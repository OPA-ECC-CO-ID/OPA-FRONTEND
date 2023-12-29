<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LandingPageController extends Controller
{
    public function index(){
        $jsfile = 'resources/js/pages/frontend/app-frontend.js';
        return view('frontend.landing', compact('jsfile'));
    }
}
