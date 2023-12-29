@extends('frontend.layouts.main')

@section('content')
@include('frontend.layouts.navbars.navlogin')

<hr class="hr-lines-test">
<div class="container">
    <div class="text-head">
        <a href="{{route('assesment')}}" class="custom-link" id="assessment-link">Assessment</a> /
        <a href="{{route('personality')}}" class="custom-link" id="personality-link">Gaya Kepribadian</a>
    </div>
</div>
<hr>

<div class="container assesment">
    <div class="row">
        <div class="col-lg-9 col-12">
            <div class="text-assesment">
                <h2>Tes Gaya Kepribadian</h2>
                <span>
                    <i class="bi bi-clock" style="margin-right: 10px;"></i>9 Menit
                </span>
                <p>Asesmen Gaya Kepribadian lebih banyak mengungkap tentang pribadi dan kecenderungan seseorang saat mengerjakan tugas. Assesmen ini mengungkap empat aspek utama yaitu respon tantangan, komunikasi, loyalitas dan keteraturan. Hasil dari asesmen ini akan menghasilkan data berupa gambaran kecenderungan kepribadian. Tes ini harus kamu kerjakan sendiri.  
                    <br><br>Berikut ini akan ditampilkan sebuah tes psikologi. Tes akan langsung sekitar 9 menit. Kamu diminta memilih 1 diantara 4 pertanyaan yang ada sesuai dengan kondisi diri kamu.
                </p>
            </div>
        </div>

        <div class="col-lg-3 col-12">
            <div class="card card-ass">
                <div class="card-header" style="background-color: #FF863F;"></div>
                    <ul class="list-group list-group-flush hovered">
                        <li class="list-group-item "><h4>Assesmen</h4></li>
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
    
        <div class="btn-ass personality">
            <a href="{{route('personality.attention')}}" class="btn btn-custom mt-4">Selanjutnya</a>
        </div>

        <div class="mt-4">
            <p class="text-secondary" style="font-style: italic;">
            Hak cipta isi asesmen milik ©️ Galuh Setia Winahyu, MPsi., Psi & Rudi Widiyanto, Mpsi.,Psi. -2014
        </div>
</div>

@endsection