@extends('frontend.layouts.main')

@section('content')
    <style>
        body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            background-color: #FAFAFA;
            font-size: 14px;
            text-rendering: geometricPrecision;
        }

        * {
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }

        h1,
        h2,
        h3,
        h4 {
            font-weight: 500;
        }

        .page {
            background-image: url('{{ Vite::asset('resources/img/frontend/footer-with-symbol.png')}}');
        }
        .frontcover {
            background-image: url('{{ Vite::asset('resources/img/frontend/cover-bg.png') }}');
        }
        .page.type-1 .subpage {
            background-image: url('{{ Vite::asset('resources/img/frontend/symbol-left-bg.png') }}');
        }
        .pagination, .pagination2 {
            background-image: url('{{ Vite::asset('resources/img/frontend/icon-pagination.png') }}');
        }
        .page.content .subpage{
            background-image: url('{{ Vite::asset('resources/img/frontend/content-top-bg.png') }}');
        }

        .page.content-2 .subpage{
            background-image: url('{{ Vite::asset('resources/img/frontend/content-2-top-bg.png') }}');

        }
        .page.footer-2{
            background-image: url('{{ Vite::asset('resources/img/frontend/footer.png') }}');

        }

        .page.unique .pagination {
            background-image: url('{{ Vite::asset('resources/img/frontend/icon-pagination-2.png') }}');
        }

        .page.conclusion{
            background-image: url('{{ Vite::asset('resources/img/frontend/footer-conclusion.png') }}');
        }

        .backcover{
            background-image: url('{{ Vite::asset('resources/img/frontend/back-cover.png') }}');
        }

        .page.unique{
            background-image: url('{{ Vite::asset('resources/img/frontend/footer-unique.png') }}');
        }

        .page.unique>div{
            background-image: url('{{ Vite::asset('resources/img/frontend/bg-heading.png') }}');
        }

    </style>

   <div class="loading">
    <input type="hidden" name="access_adminbo" id="access_adminbo" value="true">
    <input type="hidden" name="userId" id="userId" value="722457">
    <input type="hidden" name="generate" id="generate" value="true">
    <input type="hidden" name="isAccessFromEcc4" value="0" id="isAccessFromEcc4">
    <div style="margin: 0 auto;">
        <input type="hidden" name="" id="userName" value="Laksamana Muhammad Haris Noer Romadlon">
        <input type="hidden" name="" id="kodeDownload" value="Laporan Asesmen Lengkap">
        <div style="width: 210mm; margin: 0;" id="complete-report">
            <div id="container-pdf1" class="canvas_div_pdf1" style="width: 210mm;">
                <div class="page frontcover">
                    <div class="subpage">
                        <div>
                            <h3>
                                08  Desember
                                <br>
                                2023
                            </h3>
                            <h1>
                                Laporan
                                <br>
                                Pengenalan Diri
                            </h1>
                            <h4>
                                (Nandya Nurmala)
                            </h4>
                        </div>
                    </div>
                </div>
                <div class="page type-1">
                    <div class="subpage">
                        <div class="box">
                            <div class="pagination">1</div>
                            <div class="clearfix"></div>
                            <br>
                            <br>
                            <br>
                            <h4 class="mb-3">Hai, <span class="text-orange">Nandya Nurmala</span></h4>
                            <h5 class="mb-3">Salam hangat,</h5>
                            <p align="justify">Selamat kamu sudah menyelesaikan serangkaian asesmen pengenalan dan pemetaan potensi diri. Sebuah langkah baru untuk memulai karier yang sukses
                                sudah kamu lakukan! Tahukah kamu, banyak calon pekerja yang sulit mendapatkan karier impian karena belum mengenal diri? <strong>Tentunya kamu tidak ingin hal yang sama terjadi padamu!</strong></p>
                            <p align="justify">Nah dengan menyelesaikan asesmen ini kami harap kamu akan lebih mengenal dirimu dan bisa menata kariermu dengan lebih baik lagi. Karena yakinlah setiap individu memiliki potensinya masing-masing maka upgrade lagi diri agar semakin berkembang dengan mengenal dirimu lebih dalam.</p>
                            <p>Hasil asesmen ini berisi banyak informasi berkaitan dengan gambaran dirimu, dari hasil ini maka kamu bisa melihat value unikmu yang berbeda dari yang lainnya. So, informasi apa saja yang akan kamu dapatkan?</p>
                            <p><br>Melalui laporan asesmen ini, kamu akan mendapat 3 hal:</p>
                            <ul class="p-0">
								<li class="row my-3 mx-0">
									<div class="col-1 text-center p-0"><img src="{{ Vite::asset('resources/img/frontend/icon-profil.png') }}" width="40"></div>
									<div class="col-8">Gambaran minat karier yang dapat kamu jadikan pertimbangan dalam memilih karier yang tepat.</div>
								</li>
								<li class="row my-3 mx-0">
									<div class="col-1 text-center p-0"><img src="{{ Vite::asset('resources/img/frontend/icon-keunikan.png') }}" width="40"></div>
									<div class="col-8">Keunikan pribadi yang bisa  diandalkan</div>
								</li>
								<li class="row my-3 mx-0">
									<div class="col-1 text-center p-0"><img src="{{ Vite::asset('resources/img/frontend/icon-potensi.png') }}" width="40"></div>
									<div class="col-8">Potensi diri dalam bidang angka,  bahasa, dan bentuk ruang</div>
								</li>
							</ul>
							<p>Selama kamu mengerjakan dengan sungguh-sungguh dan dalam situasi yang optimal, hasil yang muncul pun dapat mengungkap potensi pribadimu yang sesungguhnya.</p>
                        </div>
                    </div>
                </div>
                @include('frontend.complete-report.biodata-report')
                @include('frontend.complete-report.content')
                @include('frontend.complete-report.career-interest')
                @include('frontend.complete-report.personality')
                @include('frontend.complete-report.potential-mapping')
                @include('frontend.complete-report.career-readiness')
                @include('frontend.complete-report.conclusion')
                @include('frontend.complete-report.backcover')
            </div>
        </div>
    </div>
</div>
@endsection
