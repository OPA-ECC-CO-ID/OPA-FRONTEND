<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OnboardingController extends Controller
{
    public function onboarding()
    {
        $jsfile = 'resources/js/pages/frontend/access/bio.js';
        return view('frontend.Access.access-onboarding', compact('jsfile'));
    }
}
