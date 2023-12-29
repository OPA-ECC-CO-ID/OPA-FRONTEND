<?php

namespace App\Http\Controllers\Backend\Ipedia;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EducationTypeController extends Controller
{
    public function index()
    {
        $jsfile = 'resources/js/pages/backend/ipedia/educationType/index.js';
        return view('backend/ipedia/educationType/index', compact('jsfile'));
    }
}
