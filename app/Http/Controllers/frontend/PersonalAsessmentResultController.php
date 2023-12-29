<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PersonalAsessmentResultController extends Controller
{
    public function index()
    {
        $jsfile = 'resources/js/pages/frontend/asessment/result/index.js';
        return view('frontend.personal-assesment-result', compact('jsfile'));
    }
}
