@extends('frontend.layouts.main')

@section('content')
    @include('frontend.layouts.navbars.navlogin')

    {{-- <hr class="hr-lines-test">
    <div class="container">
        <div class="text-head">
            <a href="{{ route('assesment') }}" class="custom-link" id="assessment-link">Assessment</a> /
            <a href="{{ route('personality') }}" class="custom-link" id="personality-link">Gaya Kepribadian</a> /
            <a href="{{ route('personality.test') }}" class="custom-link" id="page-test-link">Input Assesmen</a>
        </div>
    </div>
    <hr> --}}
<div>
    <div class="container">
        <div class="container-personality-title text-center bg-light">
            Personal Asesmen · Gaya Kepribadian
        </div>
    </div>
    <div class="container d-flex justify-content-center align-items-center sticky-top"  style=" z-index: 1;">
        <div class="countdown-container text-align-center justify-content-center align-items-center d-flex">
            <div class="personality-test-text text-center mt-3">
                <h3>Gaya Kepribadian</h3>
                <a>Soal no :<span id="question-number"> / 25</span></a>
            </div>
            <div class="countdown-personality">
                <div class="countdown-text-personality"> 40</div>
            </div>

            <div class="progress-bar-test mt-3">
                <div class="progress-personality"></div>
            </div>
        </div>
    </div>

    <div class="container personality-test">
        <div class="container-personality-question">
            <h4 id="display-question-personality">Silahkan memilih salah satu jawaban sesuai dengan keadaan diri anda</h4>
        </div>

        <div class="container-personality-options">

            {{-- Tampil Data Dari Ajax --}}

        </div>
        
        @include('frontend.modal.success-modal')
        @include('frontend.modal.timeout-modal')
        
    </div>
</div>
@endsection
