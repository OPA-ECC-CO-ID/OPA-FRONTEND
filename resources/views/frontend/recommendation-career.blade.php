@extends('frontend.layouts.main')

@section('content')
    @include('frontend.layouts.navbars.navlogin')

    <style>
        body {
            background: #F8F8F8;
        }
    </style>

    <div class="container">
        <div class="row">
            
            @include('frontend.layouts.sidebars.sidebar')

            <div class="col-lg-9 mt-3 mb-4">
                <div class="container">
                    <div class="bg-white mb-3" style="padding: 10px 16px 1px 16px">
                         <p class="recommendation-desc">Rekomendasi karir yang tersedia berdasarkan data diri dan hasil asesmen yang kamu kerjakan. Pastikan kamu telah menyelesaikan seluruh asesmen dan memahami porensi diri melalui complete report.</p>
                    </div>
                    <div class="row g-4 g-lg-4">
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="box-career bg-white">
                                <div class="box-career-img mb-3">
                                    <img src="{{ Vite::asset('resources/img/frontend/deepublish.svg') }}" alt="picture">
                                </div>
                                <div class="job-info text-center">
                                    <h2 class="">
                                        <strong>Social Media Staff</strong>
                                    </h2>
                                    <h5>Penerbit Deepublish</h5>
                                    <span>
                                        Kota Yogyakarta
                                            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none" style="margin-right: 5px; margin-left: 5px">
                                                <circle cx="2" cy="2" r="2" fill="#D9D9D9"/>
                                            </svg>
                                        Full Time
                                    </span>
                                    <button type="button" class="btn btn-custom mt-4 mb-3" onclick="window.location.href=`${APP_URL}/profile/profile-bio`"><i class="bi bi-box-arrow-in-up-right"></i> Buka Lowongan</button>
                                    <h5 style="font-size: 12px">Lowongan tersedia di  <img src="{{ Vite::asset('resources/img/frontend/logo-ecc.svg') }}" alt="picture"  style="margin-left: 4px"></h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="box-career bg-white">
                                <div class="box-career-img mb-3">
                                    <img src="{{ Vite::asset('resources/img/frontend/holly.svg') }}" alt="picture">
                                </div>
                                <div class="job-info text-center">
                                    <h2 class="">
                                        <strong>UI/UX Desginer</strong>
                                    </h2>
                                    <h5>Hollydicepalace</h5>
                                    <span>
                                        Cambodia
                                            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none" style="margin-right: 5px; margin-left: 5px">
                                                <circle cx="2" cy="2" r="2" fill="#D9D9D9"/>
                                            </svg>
                                        Full Time
                                    </span>
                                    <button type="button" class="btn btn-custom mt-4 mb-3" onclick="window.location.href=`${APP_URL}/profile/profile-bio`"><i class="bi bi-box-arrow-in-up-right"></i> Buka Lowongan</button>
                                    <h5 style="font-size: 12px">Lowongan tersedia di  <img src="{{ Vite::asset('resources/img/frontend/karir.svg') }}" alt="picture"  style="margin-left: 4px"></h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="box-career bg-white">
                                <div class="box-career-img mb-3">
                                    <img src="{{ Vite::asset('resources/img/frontend/elixer.svg') }}" alt="picture">
                                </div>
                                <div class="job-info text-center">
                                    <h2 class="">
                                        <strong>Front-end developer</strong>
                                    </h2>
                                    <h5>PT. Exlier Reka Digita</h5>
                                    <span>
                                        Kota Bekasi
                                            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none" style="margin-right: 5px; margin-left: 5px">
                                                <circle cx="2" cy="2" r="2" fill="#D9D9D9"/>
                                            </svg>
                                        Full Time
                                    </span>
                                    <button type="button" class="btn btn-custom mt-4 mb-3" onclick="window.location.href=`${APP_URL}/profile/profile-bio`"><i class="bi bi-box-arrow-in-up-right"></i> Buka Lowongan</button>
                                    <h5 style="font-size: 12px">Lowongan tersedia di  <img src="{{ Vite::asset('resources/img/frontend/karir.svg') }}" alt="picture"  style="margin-left: 4px"></h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="box-career bg-white">
                                <div class="box-career-img mb-3">
                                    <img src="{{ Vite::asset('resources/img/frontend/kinobi.svg') }}" alt="picture">
                                </div>
                                <div class="job-info text-center">
                                    <h2 class="">
                                        <strong>UI/UX Desginer</strong>
                                    </h2>
                                    <h5>Kinobi Asia</h5>
                                    <span>
                                        Work From Home
                                            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none" style="margin-right: 5px; margin-left: 5px">
                                                <circle cx="2" cy="2" r="2" fill="#D9D9D9"/>
                                            </svg>
                                        Full Time
                                    </span>
                                    <button type="button" class="btn btn-custom mt-4 mb-3" onclick="window.location.href=`${APP_URL}/profile/profile-bio`"><i class="bi bi-box-arrow-in-up-right"></i> Buka Lowongan</button>
                                    <h5 style="font-size: 12px">Lowongan tersedia di  <img src="{{ Vite::asset('resources/img/frontend/glints.svg') }}" alt="picture"></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
