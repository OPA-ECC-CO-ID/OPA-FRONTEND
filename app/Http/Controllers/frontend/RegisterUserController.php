<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RegisterUserController extends Controller
{
    public function registerUser(){
        $jsfile = 'resources/js/pages/frontend/access/registerUser.js';
        return view('frontend.registerUser', compact('jsfile'));
    }
}
