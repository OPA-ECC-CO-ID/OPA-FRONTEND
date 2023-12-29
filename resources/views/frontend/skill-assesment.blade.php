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
                    <div class="fs-2 fw-bold mb-2">SKILL ASSESMENT</div>
                    <p>Uji skill untuk mengetahui seberapa besar kamu menguasainya!</p>
                </div>
            </div>
        </div>
        <div>
            <div class="card card-assesmen mx-auto" style="background-color:  #Ffff; color:#FFA865;">
                <div class="card-body d-flex flex-column">
                    <img src="{{Vite::asset('resources/img/frontend/intersect-ass5.svg')}}"class="intersect">
                    <h1 class="card-title-assesmen" style="color: var(--main-30, #FFA865);">English <br>Assessment</h1>
                    <p class="card-text-assesmen content" style=" color: #555;">
                        Asesmen ini mengungkap empat aspek utama, yaitu: <br>loyalitas, komunikasi, keteraturan, dan respon tantangan. 
                        Asesmen ini memberikan gambaran tentang kepribadian seseorang dalam bidang pekerjaan. 
                        Tes ini harus dikerjakan sendiri oleh individu yang diuji.
                    </p>
                    <button type="button" class="btn btn-custom " id="btn-asessment-readiness"
                        style="width: 100%; margin-top:auto;">Mulai</button>
                </div>
            </div>
        </div>
    </div>
</div>

@include('frontend.layouts.footers.footer')
@endsection