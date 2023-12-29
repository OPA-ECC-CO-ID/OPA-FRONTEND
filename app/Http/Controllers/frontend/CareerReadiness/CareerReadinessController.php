<?php

namespace App\Http\Controllers\frontend\CareerReadiness;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CareerReadinessController extends Controller
{
    public function CareerReadiness()
    {
        $jsfile = 'resources/js/pages/frontend/app-frontend.js';
        return view('frontend.CareerReadiness.landing-career-readiness', compact('jsfile'));
    }

    public function attention()
    {
        $jsfile = 'resources/js/pages/frontend/app-frontend.js';
        return view('frontend.CareerReadiness.attention', compact('jsfile'));
    }

    public function sk()
    {
        $jsfile = 'resources/js/pages/frontend/app-frontend.js';
        return view('frontend.CareerReadiness.sk', compact('jsfile'));
    }

    public function instruction()
    {
        $jsfile = 'resources/js/pages/frontend/readiness/instruction/index.js';
        return view('frontend.CareerReadiness.instruction', compact('jsfile'));
    }

    public function test()
    {
        $jsfile = 'resources/js/pages/frontend/readiness/test/index.js';
        return view('frontend.CareerReadiness.career-readines-test', compact('jsfile'));
    }

    public function result()
    {
        $jsfile = 'resources/js/pages/frontend/readiness/result/index.js';
        return view('frontend.CareerReadiness.careerreadiness-result', compact('jsfile'));
    }
}
