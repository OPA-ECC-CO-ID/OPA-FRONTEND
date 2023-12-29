<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RecommendationCareerControler extends Controller
{
    public function index(){
        $jsfile = 'resources/js/pages/frontend/profile/index.js';
        return view('frontend.recommendation-career', compact('jsfile'));
    }
}
