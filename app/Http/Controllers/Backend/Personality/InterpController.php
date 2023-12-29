<?php

namespace App\Http\Controllers\Backend\Personality;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class InterpController extends Controller
{
    public function index()
    {
        $jsfile = 'resources/js/pages/backend/personality/interp/index.js';
        return view('backend/personality/interp/index', compact('jsfile'));
    }
}
