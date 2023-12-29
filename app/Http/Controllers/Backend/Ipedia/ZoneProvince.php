<?php

namespace App\Http\Controllers\Backend\Ipedia;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ZoneProvince extends Controller
{
    public function index()
    {
        $jsfile = 'resources/js/pages/backend/ipedia/zoneProvince/index.js';
        return view('backend/ipedia/zoneProvince/index', compact('jsfile'));
    }
}
