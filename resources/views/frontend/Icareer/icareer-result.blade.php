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
                        <div class="test-notification pb-4" id="mulai-test">
                            <div class="container-icareer-result">
                                <h4>Minat Karir</h4>
                                <p>Hasil dari asesmen ini akan menunjukkan kecenderungan minar pada bidang karir tertentu.
                                </p>
                                <div class="notification-result d-flex">
                                    <i class="bi bi-info-circle-fill"></i>
                                    <p>Kamu belum menyelesaikan tes ini, silakan klik Mulai Tes, untuk mengikuti tes Minat
                                        Karir</p>
                                </div>
                                <button type="button" class="btn btn-custom mt-4" id="btn-mulai-test">Mulai Test</button>
                                <span class="mt-4">*Asesmen ini hanya dapat dipergunakan selama tiga bulan sekali.
                                    Kerjakanlah asesmen ini dengan
                                    jujur dan sungguh-sungguh sesuai kondisi kamu yang sebenarnya.</span>
                            </div>
                        </div>

                        {{-- Setelah Test 3 Bulan --}}
                        <div class="test-notification d-none" id="hasil-test">
                            <div class="container-icareer-result">
                                <h4>Minat Karir</h4>
                                <p>Hasil dari asesmen ini akan menunjukkan kecenderungan minar pada bidang karir tertentu.
                                </p>
                                <div class="notification-result d-flex">
                                    <i class="bi bi-info-circle-fill"></i>
                                    {{-- <p>Silakan klik Update Test, untuk mengikuti tes MINAT KARIR kembali</p> --}}
                                    {{-- Data Dari Ajax --}}
                                </div>
                                <button type="button" class="btn btn-custom mt-4 d-none" id="btn-update"
                                    onclick="window.location.href=`${APP_URL}/icareer`">Update
                                    Test</button>
                                <span class="mt-4 d-none">*Asesmen ini hanya dapat dipergunakan selama tiga bulan sekali.
                                    Kerjakanlah asesmen ini dengan
                                    jujur dan sungguh-sungguh sesuai kondisi kamu yang sebenarnya.</span>
                            </div>
                        </div>

                        {{-- Setelah Test --}}
                        <div class="main-content-result d-none">
                            <div class="container-icareer-result">
                                {{-- <h4>Minat Karir</h4>
                                <p>Hasil dari asesmen ini akan menunjukkan kecenderungan minar pada bidang karir tertentu.
                                </p>
                                <div class="notification-result d-flex">
                                    <i class="bi bi-info-circle-fill"></i>
                                    <p>Kamu sudah melakukan tes pada tanggal 21 Agustus 2023 pukul 14.00 WIB. Tes ini hanya
                                        dapat diikuti selama 3 bulan sekali. Kamu dapat mengikuti tes sekali lagi mulai
                                        tanggal
                                        21 November 2023.</p>
                                </div> --}}
                                <div class="end-result-box">
                                    <h5>Hasil Asesmen Terakhir</h5>
                                </div>
                                <div class="result-title-text text-center">
                                    Profil Minat Karir
                                    {{-- <p>Tanggal Tes: <span>29 Agustus 2023</span> Jam: <span>09.55</span></p> --}}
                                </div>
                                <div class="careerinterest-result">
                                    <div class="interest-graph">
                                        <h5>Grafik Minat</h5>
                                        <div class="result-box-graph">
                                            <table class="table">
                                                <colgroup>
                                                    <col style="width: 20%;">
                                                    </col>
                                                    <col style="width: 70%;">
                                                    </col>
                                                    <col style="width: 10%;">
                                                    </col>
                                                </colgroup>
                                                <tbody id="hasil-asesment">
                                                    {{-- <tr>
                                                        <th scope="row">Executor</th>
                                                        <td colspan="3">
                                                            <div class="progress" role="progressbar"
                                                                aria-label="Basic example" aria-valuenow="100"
                                                                aria-valuemin="0" aria-valuemax="100">
                                                                <div class="progress-bar" style="width: 13%"></div>
                                                            </div>
                                                        </td>
                                                        <td>43</td>
                                                    </tr> --}}

                                                    <tr>
                                                        <td></td>
                                                        <td colspan="3">
                                                            <div class="d-flex justify-content-between">
                                                                <span>0</span>
                                                                <span>15</span>
                                                                <span>30</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="interest-description mt-2">
                                        <h5>Deskripsi Minat</h5>
                                        <p id="desc-minat-karir">Kamu memiliki lebih dari 3 kategori dengan skor tertinggi :
                                        </p>
                                        <h3 id="global-minat-karir"></h3>
                                    </div>
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
                                            <input class="form-check-input" type="radio" name="rating" id="rating7"
                                                value="7">
                                            <label class="form-check-label" for="rating7">7</label>
                                        </div>
                                        <div class="form-check form-check-inline d-flex flex-column">
                                            <input class="form-check-input" type="radio" name="rating" id="rating8"
                                                value="8">
                                            <label class="form-check-label" for="rating8">8</label>
                                        </div>
                                        <div class="form-check form-check-inline d-flex flex-column">
                                            <input class="form-check-input" type="radio" name="rating" id="rating9"
                                                value="9">
                                            <label class="form-check-label" for="rating9">9</label>
                                        </div>
                                        <div class="form-check form-check-inline d-flex flex-column">
                                            <input class="form-check-input" type="radio" name="rating" id="rating10"
                                                value="10">
                                            <label class="form-check-label" for="rating10">10</label>
                                        </div>
                                        <div class="emoji-smile-survey">
                                            <img src="{{ Vite::asset('resources/img/frontend/emoji2.svg') }}">
                                            <span>Sesuai</span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="score-result text-center mt-4 d-none"  id="score-result">
                                <a href="" class="btn btn-outline-custom2 px-3 mx-2" id="btn-reset">RESET</a>
                                <a href="" class="btn btn-custom px-3 mx-2" id="btn-save-survei">
                                    SAVE
                                </a>
                            </div>
                            @include('frontend.modal.survey')

                            <div class="question-result mt-4 text-center">
                                <p>Ada pertanyaan mengenai asesmen ini?</p>
                                <button type="submit" class="btn btn-custom">Hubungi Kami</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
