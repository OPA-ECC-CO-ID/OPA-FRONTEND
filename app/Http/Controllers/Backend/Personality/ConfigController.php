<?php

namespace App\Http\Controllers\Backend\Personality;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ConfigController extends Controller
{
    public function index()
    {
        $jsfile = 'resources/js/pages/backend/personality/config/index.js';
        return view('backend/personality/config/index', compact('jsfile'));
    }
}
