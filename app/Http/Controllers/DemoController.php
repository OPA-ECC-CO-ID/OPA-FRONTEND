<?php

namespace App\Http\Controllers;

use Illuminate\View\View;

class DemoController extends Controller
{
    public function index(): View
    {
        $jsfile = 'resources/js/pages/demo/index.js';
        return view('demo', compact('jsfile'));
    }
}
