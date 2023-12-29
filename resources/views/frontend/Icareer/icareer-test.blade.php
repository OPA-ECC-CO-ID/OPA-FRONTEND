@extends('frontend.layouts.main')

@section('content')
    @include('frontend.layouts.navbars.navlogin')

<div>
    <div class="container">
        <div class="text-head">
            <a href="{{ route('icareer.test') }}" class="custom-link" id="page-test-link">Halaman 1</a>
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
                        <div class="option-header" style="display: flex; gap:68px;">
                            <div class="text-option-header" style="margin-left: -8px">
                                <p>Tidak</p>
                            </div>
                            <div class="text-option-header">
                                <p>Kurang</p>
                            </div>
                            <div class="text-option-header" style="margin-left: -8px">
                                <p>Cukup</p>
                            </div>
                            <div class="text-option-header" style="margin-left: -8px">
                                <p>Sesuai</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="data-icareer-statement">
                {{-- Data Dari Ajax --}}
            </div>

            {{-- <div class="row">
            <div class="col-lg-6">
                <div class="text-question">
                    <p id="">Saya seorang yang sangat teratur</p>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="option-group d-flex">
                    <div class="form-check form-check-inline d-flex flex-column">
                    <input class="form-check-input" type="radio" name="option6-icareer" value="tidak" id="tidak6-icareer">
                        <label class="form-check-label" for="tidak6-icareer" id="tidak6-icareer-label">
                            Tidak
                        </label>
                    </div>
                    <div class="form-check form-check-inline d-flex flex-column">
                        <input class="form-check-input" type="radio" name="option6-icareer" value="kurang" id="kurang6-icareer">
                        <label class="form-check-label" for="kurang6-icareer" id="kurang6-icareer-label">
                            Kurang
                        </label>
                    </div>
                    <div class="form-check form-check-inline d-flex flex-column">
                        <input class="form-check-input" type="radio" name="option6-icareer" value="cukup" id="cukup6-icareer">
                        <label class="form-check-label" for="cukup6-icareer" id="cukup6-icareer-label">
                            Cukup
                        </label>
                    </div>
                    <div class="form-check form-check-inline d-flex flex-column">
                        <input class="form-check-input" type="radio" name="option6-icareer" value="sesuai" id="sesuai6-icareer">
                        <label class="form-check-label" for="sesuai6-icareer" id="sesuai6-icareer-label">
                            Sesuai
                        </label>
                    </div>
                </div>
            </div>
            <hr class="hr-test-icareer mx-auto">
            </div>  --}}
            <div class="btn-test d-flex align-items-center justify-content-center" id="next-test">
                <button class="btn btn-custom" disabled id="btn-selanjutnya">Selanjutnya</button>
            </div>
        </div>

        @include('frontend.modal.success-modal')
        @include('frontend.modal.timeout-modal')

    </div>
@endsection
