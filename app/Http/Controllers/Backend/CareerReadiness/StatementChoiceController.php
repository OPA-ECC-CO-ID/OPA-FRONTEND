<?php

namespace App\Http\Controllers\Backend\CareerReadiness;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StatementChoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $jsfile = 'resources/js/pages/backend/careerReadiness/statementChoice.js';
        return view('backend/careerReadiness/statementChoice/index', compact('jsfile'));
    }
}
