<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SettingUserController extends Controller
{
    public function index(){
        $jsfile = 'resources/js/pages/frontend/setting/setting-account.js';
        return view('frontend.setting.setting', compact('jsfile'));
    }

    public function password(){
        $jsfile = 'resources/js/pages/frontend/setting/setting-password.js';
        return view('frontend.setting.setting-password', compact('jsfile'));
    }
}
