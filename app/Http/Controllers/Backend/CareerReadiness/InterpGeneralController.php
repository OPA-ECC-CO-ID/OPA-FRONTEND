<?php

namespace App\Http\Controllers\Backend\CareerReadiness;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class InterpGeneralController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $jsfile = 'resources/js/pages/backend/careerReadiness/interpGeneral.js';
        return view('backend/careerReadiness/interpGeneral/index', compact('jsfile'));
    }
}
