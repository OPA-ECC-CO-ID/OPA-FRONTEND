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
<div class="container start-ass">
    <div class="row ">
      <div class="col-12 col-lg-5 d-flex align-items-center">
        <div class="gambar-assesmen mx-auto ">
            <img src="{{Vite::asset('resources/img/frontend/attention.svg')}}" alt="Gambar">
        </div>
      </div>
      <div class="col-12 col-lg-7 d-flex align-items-center">
        <div class="attention-text-content mx-auto">
          <h2>PERHATIAN!</h2>
              <ol class="" >
                <li>Pastikan kamu berada dalam situasi yang tenang</li>
                <li>Cek kondisi internetmu agar kondisinya stabil dan lancar </li>
                <li> Tes ini hanya dapat dikerjakan 3 bulan sekali</li>
                <li>Dengan memulai asesmen, pengguna menyetujui syarat dan ketentuan yang telah dibuat oleh tim ECC</li>
              </ol>
              <div class="btn-group-ass">
                <a href="{{route('CareerReadiness.sk')}}" class="btn btn-custom next">Lanjutkan</a>
                <a href="{{route('CareerReadiness')}}" class="btn btn-outline-back">Kembali</a>
              </div>
        </div>
      </div>
    </div>
  </div>

@endsection 