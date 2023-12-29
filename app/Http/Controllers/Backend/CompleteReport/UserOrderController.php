<?php

namespace App\Http\Controllers\Backend\CompleteReport;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserOrderController extends Controller
{
    public function index()
    {
        $jsfile = 'resources/js/pages/backend/completeReport/userOrder/index.js';
        return view('backend/completeReport/userOrder/index', compact('jsfile'));
    }
}
