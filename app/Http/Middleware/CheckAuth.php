<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckAuth
{
    public function handle(Request $request, Closure $next): Response
    {
        /**
         * Handle an incoming request.
         *
         * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
         */

        // Periksa apakah cookie 'access_token' memiliki nilai yang diharapkan
        // if ($request->cookie('jwtUser') === 'nilai_yang_diinginkan') {
        if(isset($_COOKIE['jwtUser']) && isset($_COOKIE['user_id'])) {
            return $next($request);
        }

        // Jika tidak, mungkin redirect atau memberikan respons akses ditolak
        return redirect()->route('loginUser')->with('error', 'Akses ditolak');
    }
}
