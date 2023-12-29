<?php

namespace App\Http\Controllers\Backend\CareerReadiness;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AspectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $jsfile = 'resources/js/pages/backend/careerReadiness/aspect.js';
        return view('backend/careerReadiness/aspect/index', compact('jsfile'));
    }
}
