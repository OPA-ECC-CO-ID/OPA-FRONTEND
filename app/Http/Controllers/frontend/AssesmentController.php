<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AssesmentController extends Controller
{
    public function assesment()
    {
        $jsfile = 'resources/js/pages/frontend/asessment/index.js';
        return view('frontend.assesment', compact('jsfile'));
    }
}
