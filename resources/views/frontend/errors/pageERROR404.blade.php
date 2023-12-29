@extends('frontend.layouts.main')

@section('content')

<div class="error-container d-flex justify-content-center align-items-center" style="height: 100vh">
    <div class="error-message" style="text-align: center;">
        <img src="{{ Vite::asset('resources/img/frontend/error-404.svg') }}" alt="Gambar Anda" style="width: 500px;
        max-width: 100%;
        height: auto;">
    </div>
</div>

@endsection

