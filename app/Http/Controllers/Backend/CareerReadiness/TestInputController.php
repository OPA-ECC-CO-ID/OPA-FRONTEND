<?php

namespace App\Http\Controllers\Backend\CareerReadiness;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TestInputController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $jsfile = 'resources/js/pages/backend/careerReadiness/testInput.js';
        return view('backend/careerReadiness/testInput/index', compact('jsfile'));
    }
}
