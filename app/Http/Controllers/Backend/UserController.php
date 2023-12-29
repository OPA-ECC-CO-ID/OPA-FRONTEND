<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $jsfile = 'resources/js/pages/backend/auth/auth.js';
        return view('backend/laravel-examples/user-management', compact('jsfile'));
    }
}
