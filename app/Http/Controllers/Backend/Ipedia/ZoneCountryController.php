<?php

namespace App\Http\Controllers\Backend\Ipedia;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ZoneCountryController extends Controller
{
    public function index()
    {
        $jsfile = 'resources/js/pages/backend/ipedia/zoneCountry/index.js';
        return view('backend/ipedia/zoneCountry/index', compact('jsfile'));
    }
}
