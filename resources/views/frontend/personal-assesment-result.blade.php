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
                <div class="container personal-result bg-white">
                    <div class="container-result">
                        <h4>Hasil Personal Asesmen</h4>
                        <p>Berikut adalah hasil tes yang telah kamu selesaikan di Online Personal Asesmen (OPA)</p>
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                    <tr class="border-top text-center">
                                        <th scope="col" style="width: 30%;">Assesmen</th>
                                        <th scope="col" style="width: 20%;">Status Pengerjaan</th>
                                        </th>
                                        <th scope="col" style="width: 30%;">Waktu</th>
                                        <th scope="col" style="width: 20%;">Hasil</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Gaya Kepribadian</td>
                                        <td><i class="bi bi-x-circle" id="status_personality"></i></td>
                                        <td id="test_date_personality"></td>
                                        <td><button type="submit" class="btn btn-outline-custom2" id="hasil_personality">Mulai
                                                Test</button></td>
                                    </tr>
                                    <tr>
                                        <td>Minat Karir</td>
                                        <td><i class="bi bi-x-circle" id="status_icareer"></i></td>
                                        <td id="test_date_icareer"></td>
                                        <td><button type="submit" class="btn btn-outline-custom2" id="hasil_icareer">Mulai
                                                Test</button></td>
                                    </tr>
                                    <tr>
                                        <td>Pemetaan Potensi</td>
                                        <td><i class="bi bi-x-circle"></i></td>
                                        <td></td>
                                        <td><button type="submit" class="btn btn-outline-custom2">Mulai Test</button></td>
                                    </tr>
                                    <tr>
                                        <td>Kesiapan Karir</td>
                                        <td><i class="bi bi-x-circle" id="status_careerreadiness"></i></td>
                                        <td id="test_date_careerreadiness"></td>
                                        <td><button type="submit" class="btn btn-outline-custom2"
                                                id="hasil_careerreadiness">Mulai
                                                Test</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <span>*Asesmen ini hanya dapat dipergunakan selama tiga bulan sekali. Kerjakanlah asesmen ini dengan
                            jujur dan sungguh-sungguh sesuai kondisi kamu yang sebenarnya.</span>
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
    </div>
@endsection
