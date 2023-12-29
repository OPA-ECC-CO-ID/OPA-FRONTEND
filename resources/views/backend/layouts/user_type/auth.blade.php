@extends('backend.layouts.app')

@section('guest')
    @include('backend.layouts.navbars.auth.sidebar')
    <main
        class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg {{ Request::is('rtl') ? 'overflow-hidden' : '' }}">
        @include('backend.layouts.navbars.auth.nav')
        <div class="container-fluid py-4">
            @yield('content')
            @include('backend.layouts.footers.auth.footer')
        </div>
    </main>
@endsection
