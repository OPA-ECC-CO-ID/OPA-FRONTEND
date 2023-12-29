<?php

namespace App\Http\Controllers\Backend\Ipedia;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ZoneCityController extends Controller
{
    public function index()
    {
        $jsfile = 'resources/js/pages/backend/ipedia/zoneCity/index.js';
        return view('backend/ipedia/zoneCity/index', compact('jsfile'));
    }
}
