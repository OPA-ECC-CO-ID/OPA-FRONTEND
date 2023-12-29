<?php

namespace App\Http\Controllers\Backend\Icareer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StatementController extends Controller
{
    public function index()
    {
        $jsfile = 'resources/js/pages/backend/icareer/statement/index.js';
        return view('backend/icareer/statement/index', compact('jsfile'));
    }
}
