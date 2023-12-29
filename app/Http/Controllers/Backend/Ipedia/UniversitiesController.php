<?php

namespace App\Http\Controllers\Backend\Ipedia;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UniversitiesController extends Controller
{
    public function index()
    {
        $jsfile = 'resources/js/pages/backend/ipedia/universities/index.js';
        return view('backend/ipedia/universities/index', compact('jsfile'));
    }
}
