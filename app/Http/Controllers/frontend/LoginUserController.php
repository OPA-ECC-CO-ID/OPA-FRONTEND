<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginUserController extends Controller
{
    public function loginUser(){
        $jsfile = 'resources/js/pages/frontend/entry/loginUser.js';
        return view('frontend.loginUser', compact('jsfile'));
    }
    public function logoutUser(){
        setcookie('jwtUser', null);
        setcookie('user_id', null);
        return redirect('/index');
    }
}
