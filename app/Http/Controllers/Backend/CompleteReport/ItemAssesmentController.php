<?php

namespace App\Http\Controllers\Backend\CompleteReport;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ItemAssesmentController extends Controller
{
    public function index()
    {
        $jsfile = 'resources/js/pages/backend/completeReport/itemAssesment/index.js';
        return view('backend/completeReport/itemAssesment/index', compact('jsfile'));
    }
}
