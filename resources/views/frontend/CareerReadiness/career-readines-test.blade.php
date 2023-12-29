@extends('frontend.layouts.main')

@section('content')
    @include('frontend.layouts.navbars.navlogin')

    <div class="container">
        <div class="text-head">
            <a href="{{ route('CareerReadiness.test') }}" class="custom-link" id="page-test-link">Halaman 1</a>
        </div>
    </div>

    <div class="container d-flex justify-content-center align-items-center sticky-top" style=" z-index: 1;">
        <div class="countdown-container text-align-center justify-content-center align-items-center d-flex">
            <div class="countdown" id="countdown">
                <div class="countdown-text"> 40</div>
            </div>
            <div class="progress-bar-test">
                <div class="progress-test"></div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="container-question">
            <div class="container-option-header">
                <div class="row">
                    <div class="col-lg-6">
                    </div>
                    <div class="col-lg-6">
                        <div class="option-header text-center align-items-center"
                            style="display: flex;gap:45px;">
                            <div class="text-option-header" style="margin-left:-40px;">
                                <p>Sangat <br>Tidak Sesuai</p>
                            </div>
                            <div class="text-option-header" style="margin-right:25px;">
                                <p>Tidak <br>Sesuai</p>
                            </div>
                            <div class="text-option-header" style="margin-left: -10px;">
                                <p>Cukup</p>
                            </div>
                            <div class="text-option-header" style="margin-left: 18px;">
                                <p>Sesuai</p>
                            </div>
                            <div class="text-option-header" style="margin-left: 10px;">
                                <p>Sangat <br>Sesuai</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="data-career-readiness">
                {{-- Data Dari Ajax --}}
            </div>
            <div class="btn-test d-flex align-items-center justify-content-center">
                <button id="next-button" class="btn btn-custom  "disabled>Selanjutnya</button>
            </div>
        </div>

        @include('frontend.modal.success-modal')
        @include('frontend.modal.timeout-modal')
        @include('frontend.modal.error404')

    </div>
@endsection
