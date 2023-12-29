<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CompleteReportController extends Controller
{
    public function index(){
        $jsfile = 'resources/js/pages/frontend/profile/index.js';
        return view('frontend.complete-report.complete-report', compact('jsfile'));
    }
    public function complete(){
        $jsfile = 'resources/js/pages/frontend/profile/complete-report.js';
        return view('frontend.complete-report.assessment-full-report', compact('jsfile'));
    }
}
