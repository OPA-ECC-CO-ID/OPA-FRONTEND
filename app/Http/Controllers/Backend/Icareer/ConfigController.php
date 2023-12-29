<?php

namespace App\Http\Controllers\Backend\Icareer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ConfigController extends Controller
{
    public function index()
    {
        $jsfile = 'resources/js/pages/backend/icareer/config/index.js';
        return view('backend/icareer/config/index', compact('jsfile'));
    }
}
