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

<div class="container start-ass">
  <div class="row">
    <div class="col-12 col-lg-5 d-flex">
      <div class="gambar-assesmen mx-auto mt-5">
          <img src="{{Vite::asset('resources/img/frontend/sk.svg')}}" alt="Gambar">
      </div>
    </div>
    <div class="col-12 col-lg-7 d-flex align-items-center">
      <div class="sk-text-content mx-auto">
        <h2>Syarat dan Ketentuan</h2>
            <ol class="" >
              <li>Saya bersedia mengerjakan asesmen ini dengan sungguh-sungguh sesuai dengan kondisi   saya sebenarnya.</li>
              <li>Saya akan menggunakan hasil tes ini dengan bijaksana untuk pengembangan diri secara positif.</li>
              <li>Saya berjanji tidak akan menggandakan dan menyebarluaskan tes ini, karena tes ini merupakan hasil karya cipta intelektual yang dilindungi.</li>
              <li>Hasil asesmen online ini dapat diketahui oleh pihak ketiga jika memang diperlukan. Untuk melindungi data dan kerahasiaan member, ECC akan memberikan notifikasi dan pernyataan kesediaan via email jika ada perusahaan yang ingin melihat profilmu.</li>
            </ol>
            <div class="btn-group-ass">
              <a href="{{route('personality.instruction')}}" class="btn btn-custom next">Lanjutkan</a>
              <a href="{{route('personality.attention')}}" button class="btn btn-outline-back">Kembali</a>
            </div>
      </div>
    </div>
  </div>
</div>

@endsection