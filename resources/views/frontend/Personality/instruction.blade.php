@extends('frontend.layouts.main')

@section('content')
    @include('frontend.layouts.navbars.navlogin')

    <hr class="hr-lines-test">
    <div class="container">
        <div class="text-head">
            <a href="{{ route('assesment') }}" class="custom-link" id="assessment-link">Assessment</a> /
            <a href="{{ route('personality') }}" class="custom-link" id="personality-link">Gaya Kepribadian</a>
        </div>
    </div>
    <hr>

    <div class="container start-ass">
        <div class="row">
            <div class="col-12 col-lg-5 d-flex align-items-center">
                <div class="gambar-assesmen mx-auto">
                    <img src="{{ Vite::asset('resources/img/frontend/intruksi.svg') }}" alt="Gambar">
                </div>
            </div>
            <div class="col-12 col-lg-7 d-flex align-items-center">
                <div class="intruksi-text-content mx-auto">
                    <h2>Intruksi dan Pengerjaan</h2>
                    <ol class="">
                        <li>Bacalah setiap pernyataan dengan baik.</li>
                        <li>Beri tanda pada kolom yang sesuai dengan diri Kamu.</li>
                        <li>Pastikan pilihan Kamu sesuai dengan minat atau ketertarikan Kamu terhadap isi dari pernyataan
                            tersebut.</li>
                        <li>Tidak ada jawaban yang salah</li>
                        <li>Setiap halaman diberikan waktu 40 detik untuk menjawab</li>
                    </ol>
                    <div class="btn-group-ass">
                        <a href="{{ route('personality.test') }}" class="btn btn-custom next" id="btn-kerjakan">Kerjakan</a>
                        <a href="{{ route('personality.sk') }}" class="btn btn-outline-back">Kembali</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

    @include('frontend.modal.after-3bulan')
@endsection
