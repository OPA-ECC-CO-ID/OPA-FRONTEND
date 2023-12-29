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

            <div class="col-lg-9 mt-3">
                <div class="container">
                    <div class="list-group menu-profile">
                        <a href="{{ route('personality.result') }}" class="list-group-item list-group-item-action">Gaya
                            Kepribadian</a>
                        <a href="{{ route('icareer.result') }}" class="list-group-item list-group-item-action">Minat
                            Karir</a>
                        <a href="#" class="list-group-item list-group-item-action">Pemetaan Potensi</a>
                        <a href="{{ route('CareerReadiness.result') }}"
                            class="list-group-item list-group-item-action">Kesiapan
                            Karir</a></a>
                    </div>
                    <div class="container assesment-result bg-white">

                        {{-- Sebelum Test --}}
                        <div class="test-notification pb-4" id="personality-test-notif-false">
                            <div class="container-personality-result">
                                <h4>Gaya Kepribadian</h4>
                                <p>Hasil dari asesmen ini akan menghasilkan data berupa gambaran kecenderungan kepribadian
                                    kamu.</p>
                                <div class="notification-result d-flex">
                                    <i class="bi bi-info-circle-fill"></i>
                                    <p>Kamu belum menyelesaikan tes ini, silakan klik Mulai Tes, untuk mengikuti tes Gaya
                                        kepribadian</p>
                                </div>
                                <button type="button" class="btn btn-custom mt-4" id="btn-mulai-test">Mulai Test</button>
                                <span class="mt-4">*Asesmen ini hanya dapat dipergunakan selama tiga bulan sekali.
                                    Kerjakanlah asesmen ini dengan
                                    jujur dan sungguh-sungguh sesuai kondisi kamu yang sebenarnya.</span>
                            </div>
                        </div>

                        {{-- Setelah sudah test --}}
                        <div class="test-notification d-none" id="personality-test-notif-true">
                            <div class="container-personality-result">
                                <h4>Gaya Kepribadian</h4>
                                <p>Hasil dari asesmen ini akan menghasilkan data berupa gambaran kecenderungan kepribadian
                                    kamu.</p>
                                <div class="notification-result d-flex">
                                    <i class="bi bi-info-circle-fill"></i>
                                    {{-- data dari ajax --}}
                                </div>
                                <button type="button" class="btn btn-custom mt-4 d-none" id="btn-update"
                                    onclick="window.location.href=`${APP_URL}/personality`">Update
                                    Test</button>
                                <span class="mt-4 d-none" id="keterangan-update">*Asesmen ini hanya dapat dipergunakan
                                    selama tiga bulan sekali.
                                    Kerjakanlah asesmen ini dengan
                                    jujur dan sungguh-sungguh sesuai kondisi kamu yang sebenarnya.</span>
                            </div>
                        </div>

                        {{-- Setelah Test --}}
                        <div class="main-content-result d-none" id="personality-content">
                            <div class="container-personality-result">
                                <div class="end-result-box">
                                    <h5>Hasil Asesmen Terakhir</h5>
                                </div>
                                <div class="result-title-text text-center">
                                    Profil Gaya Kepribadian
                                    {{-- Data dari ajax --}}
                                </div>
                                <div id="result-asessment-personality">
                                    {{-- Data Dari Ajax --}}
                                </div>

                                <div class="question-result mt-4 text-center">
                                    <p>Ada pertanyaan mengenai asesmen ini?</p>
                                    <button type="submit" class="btn btn-custom">Hubungi Kami</button>
                                </div>

                                <div class="result-box survey mt-4">
                                    <div class="survey-result">
                                        <h4>Survey Pengalaman<br></h4>
                                        <span>Seberapa sesuai hasil asesmen Kamu dengan kondisi dirimu saat ini?</span>
                                        <form class="option-survey d-flex justify-content-center mt-3">
                                            <div class="emoji-sad-survey">
                                                <img src="{{ Vite::asset('resources/img/frontend/emoji1.svg') }}">
                                                <span>Tidak Sesuai</span>
                                            </div>
                                            <div class="form-check form-check-inline d-flex flex-column">
                                                <input class="form-check-input" type="radio" name="rating" id="rating1"
                                                    value="1">
                                                <label class="form-check-label" for="rating1">1</label>
                                            </div>
                                            <div class="form-check form-check-inline d-flex flex-column">
                                                <input class="form-check-input" type="radio" name="rating" id="rating2"
                                                    value="2">
                                                <label class="form-check-label" for="rating2">2</label>
                                            </div>
                                            <div class="form-check form-check-inline d-flex flex-column">
                                                <input class="form-check-input" type="radio" name="rating" id="rating3"
                                                    value="3">
                                                <label class="form-check-label" for="rating3">3</label>
                                            </div>
                                            <div class="form-check form-check-inline d-flex flex-column">
                                                <input class="form-check-input" type="radio" name="rating" id="rating4"
                                                    value="4">
                                                <label class="form-check-label" for="rating4">4</label>
                                            </div>
                                            <div class="form-check form-check-inline d-flex flex-column">
                                                <input class="form-check-input" type="radio" name="rating" id="rating5"
                                                    value="5">
                                                <label class="form-check-label" for="rating5">5</label>
                                            </div>
                                            <div class="form-check form-check-inline d-flex flex-column">
                                                <input class="form-check-input" type="radio" name="rating" id="rating6"
                                                    value="6">
                                                <label class="form-check-label" for="rating6">6</label>
                                            </div>
                                            <div class="form-check form-check-inline d-flex flex-column">
                                                <input class="form-check-input" type="radio" name="rating"
                                                    id="rating7" value="7">
                                                <label class="form-check-label" for="rating7">7</label>
                                            </div>
                                            <div class="form-check form-check-inline d-flex flex-column">
                                                <input class="form-check-input" type="radio" name="rating"
                                                    id="rating8" value="8">
                                                <label class="form-check-label" for="rating8">8</label>
                                            </div>
                                            <div class="form-check form-check-inline d-flex flex-column">
                                                <input class="form-check-input" type="radio" name="rating"
                                                    id="rating9" value="9">
                                                <label class="form-check-label" for="rating9">9</label>
                                            </div>
                                            <div class="form-check form-check-inline d-flex flex-column">
                                                <input class="form-check-input" type="radio" name="rating"
                                                    id="rating10" value="10">
                                                <label class="form-check-label" for="rating10">10</label>
                                            </div>
                                            <div class="emoji-smile-survey">
                                                <img src="{{ Vite::asset('resources/img/frontend/emoji2.svg') }}">
                                                <span>Sesuai</span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="score-result text-center mt-4 d-none" id="score-result">
                                    <a href="" class="btn btn-outline-custom2 px-3 mx-2" id="btn-reset">RESET</a>
                                    <a href="" class="btn btn-custom px-3 mx-2"  id="btn-save-survei">
                                        SAVE
                                    </a>
                                </div>
                            </div>

                                <div class="container-result-report bg-light mt-4">
                                    <img src="{{ Vite::asset('resources/img/frontend/book.svg') }}" alt="">
                                    <div class="row align-items-center">
                                        <div class="col-lg-8">
                                            <p>Dapatkan Complete Report dan Kenali Dirimu Lebih Dalam<br><span>Kamu akan mendapatkan
                                                laporan lengkap mengenai gambaran dirimu dan saran pengembangan kedepannya.</span></p></div>
                                        <div class="col-lg-4">
                                            <button type="submit" class="btn btn-custom">Complete Report</button>
                                        </div>
                                    </div>
                                </div>

                        </div>
                    </div>
                </div>
            </div>
            @include('frontend.modal.survey')
        </div>
    @endsection
