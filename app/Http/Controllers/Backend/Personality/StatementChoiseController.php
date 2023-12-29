<?php

namespace App\Http\Controllers\Backend\Personality;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StatementChoiseController extends Controller
{
    public function index()
    {
        $jsfile = 'resources/js/pages/backend/personality/statementChoise/index.js';
        return view('backend/personality/statementChoise/index', compact('jsfile'));
    }
}
