<?php

namespace App\Http\Controllers\Backend\CompleteReport;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function index()
    {
        $jsfile = 'resources/js/pages/backend/completeReport/setting/index.js';
        return view('backend/completeReport/setting/index', compact('jsfile'));
    }
}
