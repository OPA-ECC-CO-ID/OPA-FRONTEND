<?php

namespace App\Http\Controllers\Backend\Ipedia;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MajorsController extends Controller
{
    public function index()
    {
        $jsfile = 'resources/js/pages/backend/ipedia/majors/index.js';
        return view('backend/ipedia/majors/index', compact('jsfile'));
    }
}
