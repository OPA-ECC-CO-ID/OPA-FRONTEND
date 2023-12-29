@extends('frontend.layouts.main')

@section('content')
    @include('frontend.layouts.navbars.navlogin')
    <div class="landing-assesment">
        <div class="vh-50 bg-custom position-relative" style=" z-index: -999;"><img
                src="{{ Vite::asset('resources/img/frontend/bg-ass.svg') }}" style="width: 100%"></div>
        <div class="vh-50 bg-white position-relative" style=" z-index: -999;"></div>
        <div class="container position-absolute top-50 start-50 translate-middle">
            <div class="row justify-content-center gx-5">
                <div class="col-12 mb-lg-5 mb-4">
                    <div class=" text-card text-center text-white">
                        <div class="fs-2 fw-bold mb-2">PERSONAL ASSESMENT</div>
                        <p>Mari jelajahi potensi melalui Online Personal Assesment</p>
                    </div>
                </div>
            </div>
            <div class="row content-assesment row-cols-lg-4">
                <div class="col">
                    <div class="card card-assesmen mx-auto" style="background-color:  #Ffff;">
                        <div class="card-body d-flex flex-column">
                            <img src="{{ Vite::asset('resources/img/frontend/intersect-ass1.svg') }}"class="intersect">
                            <h1 class="card-title-assesmen" style="color: var(--main-30, #FFA865);">Gaya <br>Kepribadian
                            </h1>
                            <p class="card-text-assesmen content" style=" color: #555;">
                                Asesmen ini mengungkap empat aspek utama, yaitu: <br>loyalitas, komunikasi, keteraturan, dan
                                respon tantangan.
                                Asesmen ini memberikan gambaran tentang kepribadian seseorang dalam bidang pekerjaan.
                                Tes ini harus dikerjakan sendiri oleh individu yang diuji.
                            </p>
                            <button type="button" class="btn btn-custom " id="btn-asessment-personality"
                                style="width: 100%; margin-top:auto;">Mulai</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card card-assesmen mx-auto" style="background-color:  #Ffff">
                        <div class="card-body d-flex flex-column">
                            <img src="{{ Vite::asset('resources/img/frontend/intersect-ass2.svg') }}"class="intersect">
                            <h1 class="card-title-assesmen" style="color: var(--main-30, #FFA865);">Minat <br>Karir</h1>
                            <p class="card-text-assesmen content" style=" color: #555;">
                                Asesmen Minat Karier mengukur 6 bidang minat karier, yaitu: <br>Executor, Thinker, Creator,
                                Savior, Persuader, dan Organizer.
                                Ini akan membantu mengidentifikasi minat dan kecenderungan dalam bidang pekerjaan. Hasil
                                assesmen akan menunjukkan preferensi karir.
                                Tes ini harus diisi sendiri oleh yang diuji.
                            </p>
                            <button type="button" class="btn btn-custom" id="btn-asessment-icareer"
                                style="width: 100%; margin-top:auto;">Mulai</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card card-assesmen mx-auto" style="background-color:  #Ffff; color:#FFA865;">
                        <div class="card-body d-flex flex-column">
                            <img src="{{ Vite::asset('resources/img/frontend/intersect-ass3.svg') }}"class="intersect">
                            <h1 class="card-title-assesmen" style="color: var(--main-30, #FFA865);">Pemetaan <br>Potensi
                            </h1>
                            <p class="card-text-assesmen content" style=" color: #555;">
                                Tes pemetaan potensi diri secara spesifik mengukur kemampuan kognitif dalam tiga bidang,
                                yaitu:
                                numerik, verbal dan spasial. Tes ini bertujuan untuk mengetahui potensi seseorang dalam
                                bidang verbal, numerik, dan spasial.
                            </p>
                            <button type="button" class="btn btn-custom"
                                style="width: 100%; margin-top:auto;">Mulai</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card card-assesmen mx-auto" style="background-color:  #Ffff; color:#FFA865;">
                        <div class="card-body d-flex flex-column">
                            <img src="{{ Vite::asset('resources/img/frontend/intersect-ass4.svg') }}"class="intersect">
                            <h1 class="card-title-assesmen" style="color: var(--main-30, #FFA865);">Kesiapan <br>Karir</h1>
                            <p class="card-text-assesmen content" style=" color: #555;">
                                Assessment ini bertujuan untuk mengetahui presepsi dirinya akan kesiapan dalam memasuki
                                dunia kerja dilihat dari: Problem Solving, Komunikasi, Teamwork, Digital technology dan
                                Leadership
                            </p>
                            <button type="button" class="btn btn-custom " id="btn-asessment-readiness"
                                style="width: 100%; margin-top:auto;">Mulai</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    @include('frontend.layouts.footers.footer')
@endsection
