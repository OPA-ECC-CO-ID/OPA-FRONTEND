<?php

namespace App\Http\Controllers\Backend\personality;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class InterpCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $jsfile = 'resources/js/pages/backend/personality/interpCategory/index.js';
        return view('backend/personality/interpCategory/index', compact('jsfile'));
    }
}
