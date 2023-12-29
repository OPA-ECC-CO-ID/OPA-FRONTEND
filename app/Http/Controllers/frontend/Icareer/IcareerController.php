<?php

namespace App\Http\Controllers\frontend\icareer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IcareerController extends Controller
{
    public function icareer()
    {
        $jsfile = 'resources/js/pages/frontend/icareer/index.js';
        return view('frontend.Icareer.landing-icareer', compact('jsfile'));
    }

    public function attention()
    {
        $jsfile = 'resources/js/pages/frontend/icareer/index.js';
        return view('frontend.Icareer.attention', compact('jsfile'));
    }

    public function sk()
    {
        $jsfile = 'resources/js/pages/frontend/icareer/index.js';
        return view('frontend.Icareer.sk', compact('jsfile'));
    }
    public function instruction()
    {
        $jsfile = 'resources/js/pages/frontend/icareer/instruction/index.js';
        return view('frontend.Icareer.instruction', compact('jsfile'));
    }

    public function test()
    {
        $jsfile = 'resources/js/pages/frontend/icareer/test/index.js';
        return view('frontend.Icareer.icareer-test', compact('jsfile'));
    }

    public function result()
    {
        $jsfile = 'resources/js/pages/frontend/icareer/result/index.js';
        return view('frontend.Icareer.icareer-result', compact('jsfile'));
    }
}
