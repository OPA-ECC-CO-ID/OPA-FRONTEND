<?php

namespace App\Http\Controllers\Backend\Icareer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserTestController extends Controller
{
    public function index()
    {
        $jsfile = 'resources/js/pages/backend/icareer/userTest/index.js';
        return view('backend/icareer/userTest/index', compact('jsfile'));
    }
}
