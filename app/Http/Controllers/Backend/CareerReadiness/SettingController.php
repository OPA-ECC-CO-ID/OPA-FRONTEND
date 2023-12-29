<?php

namespace App\Http\Controllers\Backend\CareerReadiness;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $jsfile = 'resources/js/pages/backend/careerReadiness/setting.js';
        return view('backend/careerReadiness/setting/index', compact('jsfile'));
    }
}
