@extends('frontend.layouts.main')

@section('content')
@include('frontend.layouts.navbars.navlogin')

<hr class="hr-lines-test">
<div class="container">
    <div class="text-head">
        <a href="{{route('assesment')}}" class="custom-link" id="assessment-link">Assessment</a> /
        <a href="{{route('icareer')}}" class="custom-link" id="career-interest-link">Minat Karir</a>
    </div>
</div>
<hr>

<div class="container assesment">
    <div class="row">
        <div class="col-lg-9 col-12">
            <div class="text-assesment">
                <h2>Tes Minat Karir</h2>
                <span>
                    <i class="bi bi-clock" style="margin-right: 10px;"></i>9 Menit
                </span>
                <p>Asesmen Minat Karier membahas mengenai minat dan kecenderungan bidang kerja yang sesuai dengan diri. 
                    Asesmen ini mengukur 6 bidang minat karier yaitu Executor, Thinker, Creator, Savior, Persuader dan Organizer. 
                    Hasil dari assessment ini akan menunjukkan kecenderungan minat pada bidang karir tertentu. Tes ini harus kamu kerjakan sendiri. 
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
    
        <div class="btn-ass icareer">
            <a href="{{route('icareer.attention')}}" class="btn btn-custom mt-4">Selanjutnya</a>
        </div>

        <div class="mt-4"></div>
            <p class="text-secondary" style="font-style: italic;">
            Disusun oleh Galuh Setia Winahyu, MPsi., Psi & Rudi Widiyanto, Mpsi.,Psi. -2014
        </div>
</div>

@endsection