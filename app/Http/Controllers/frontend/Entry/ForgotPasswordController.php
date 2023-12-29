<?php

namespace App\Http\Controllers\frontend\Entry;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ForgotPasswordController extends Controller
{
    public function email(){
        $jsfile = 'resources/js/pages/frontend/entry/loginUser.js';
        return view('frontend.Entry.email', compact('jsfile'));
    }

    public function password(){
        $jsfile = 'resources/js/pages/frontend/entry/loginUser.js';
        return view('frontend.Entry.password', compact('jsfile'));
    }
}
