<?php

namespace App\Http\Controllers\Backend\Icareer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class VariableController extends Controller
{
    public function index()
    {
        $jsfile = 'resources/js/pages/backend/icareer/variable/index.js';
        return view('backend/icareer/variable/index', compact('jsfile'));
    }
}
