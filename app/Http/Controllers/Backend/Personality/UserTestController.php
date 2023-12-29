<?php

namespace App\Http\Controllers\Backend\Personality;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserTestController extends Controller
{
    public function index()
    {
        $jsfile = 'resources/js/pages/backend/personality/userTest/index.js';
        return view('backend/personality/userTest/index', compact('jsfile'));
    }
}
