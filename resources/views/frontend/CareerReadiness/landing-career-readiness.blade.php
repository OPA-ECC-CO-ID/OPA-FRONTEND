@extends('frontend.layouts.main')

@section('content')
@include('frontend.layouts.navbars.navlogin')

<hr class="hr-lines-test">
<div class="container">
    <div class="text-head">
        <a href="{{route('assesment')}}" class="custom-link" id="assessment-link">Assessment</a> /
        <a href="{{route('CareerReadiness')}}" class="custom-link" id="career-readiness-link">Kesiapan Karir</a>
    </div>
</div>
<hr>

<div class="container assesment">
    <div class="row">
        <div class="col-lg-9 col-12">
            <div class="text-assesment">
                <h2>Tes Kesiapan Karir</h2>
                <span>
                    <i class="bi bi-clock" style="margin-right: 10px;"></i>± 9 Menit
                </span>
                <p>Assessment ini bertujuan untuk mengetahui presepsi dirinya akan kesiapan dalam memasuki dunia kerja dilihat dari: Problem Solving, Komunikasi, Teamwork,Digital technology dan Leadership. Tes ini harus kamu kerjakan sendiri.
                    <br><br>Di assesmen ini akan ditampilkan sebuah alat bantu untuk mengukur minat. Tes akan berlangsung sekitar 7 menit. Kamu diminta memberi tanda pada setiap soal sesuai dengan kondisi diri Kamu.
                </p>
            </div>
        </div>

        <div class="col-lg-3 col-12">
            <div class="card card-ass">
                <div class="card-header" style="background-color: #FF863F;"></div>
                    <ul class="list-group list-group-flush hovered">
                        <li class="list-group-item"><h4>Assesmen</h4></li>
                        <li class="list-group-item no-border"><span>Tes OPA</span></li>
                        <li class="list-group-item no-border">
                            <a href="{{route('personality')}}" class="custom-link">Gaya Kepribadian</a>
                        </li>
                        <li class="list-group-item no-border">
                            <a href="{{route('icareer')}}" class="custom-link">Minat Karir</a>
                        </li>
                        <li class="list-group-item no-border">
                            <a href="" class="custom-link">Pemetaan Potensi</a>
                        </li>
                        <li class="list-group-item no-border">
                            <a href="{{route('CareerReadiness')}}" class="custom-link">Kesiapan Karir</a>
                        </li>
                        <li class="list-group-item no-border" ><span>Tes Lainya</span></li>
                        <li class="list-group-item no-border">
                            <a href="halaman5.html" class="custom-link">English Assesmen</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    
        <div class="btn-ass readiness">
            <a href="{{route('CareerReadiness.attention')}}" class="btn btn-custom mt-4">Selanjutnya</a>
        </div>

        <div class="mt-4">
            <p class="text-secondary" style="font-style: italic;">
            Hak cipta isi asesmen milik ©️ Galuh Setia Winahyu, MPsi., Psi & Rudi Widiyanto, Mpsi.,Psi. -2014
        </div>
</div>

@endsection