<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SkillAssesmentController extends Controller
{
    public function SkillAssesment(){
        $jsfile = 'resources/js/pages/frontend/app-frontend.js';
        return view('frontend.skill-assesment', compact('jsfile'));
    }
}
