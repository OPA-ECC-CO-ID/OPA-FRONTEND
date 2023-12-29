<?php

namespace App\Http\Controllers\frontend\Personality;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PersonalityController extends Controller
{
    public function personality()
    {
        $jsfile = 'resources/js/pages/frontend/personality/index.js';
        return view('frontend.Personality.landing-personality', compact('jsfile'));
    }

    public function attention()
    {
        $jsfile = 'resources/js/pages/frontend/personality/index.js';
        return view('frontend.Personality.attention', compact('jsfile'));
    }

    public function sk()
    {
        $jsfile = 'resources/js/pages/frontend/personality/index.js';
        return view('frontend.Personality.sk', compact('jsfile'));
    }

    public function instruction()
    {
        $jsfile = 'resources/js/pages/frontend/personality/instruction/index.js';
        return view('frontend.Personality.instruction', compact('jsfile'));
    }

    public function test()
    {
        $jsfile = 'resources/js/pages/frontend/personality/test/index.js';
        return view('frontend.Personality.personality-test', compact('jsfile'));
    }

    public function result()
    {
        $jsfile = 'resources/js/pages/frontend/profile/personality-result.js';
        return view('frontend.Personality.personality-result', compact('jsfile'));
    }
}
