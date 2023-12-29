<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $jsfile = 'resources/js/pages/backend/auth/auth.js';
        return view('backend/dashboard', compact('jsfile'));
    }
}
