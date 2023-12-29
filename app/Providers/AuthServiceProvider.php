<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Auth;
use App\Extensions\ApiUserGuard;
use App\Extensions\ApiUserProvider;

// use App\Guards\ApiUserGuard;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [

    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        Auth::extend('apiuser', function (Application $app, string $name, array $config) {
            $userProvider = app(ApiUserProvider::class);
            $request = app('request');
            return new ApiUserGuard($userProvider, $request, $config);
        });
        // Auth::extend('custom', function (Application $app, array $config) {
        //     $request = app('request');
        //     return new ApiUserGuard(Auth::createUserProvider($config['provider']), $request);
        // });
    }
}
