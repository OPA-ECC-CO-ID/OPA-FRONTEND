@extends('frontend.layouts.main')

@section('content')
    @include('frontend.layouts.navbars.navlogin')

    <!-- ======= Hero Section ======= -->
    <div class="container text-center" id="hero">
        <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
            <h3>
                Kenali Diri dan Temukan <br>Jalur Karir Terbaikmu
            </h3>
            <p>
                Online Personal Assesment (OPA) dapat membantu <br>menemukan potensi terpendam yang ada padamu!
            </p>
        </div>
        <div data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
            <a href="{{ route('assesment') }}"><button class="btn btn-custom">Mulai Test →</button></a>
        </div>
    </div>

    <!-- ======= End Hero Section ======= -->

    <!-- ======= Video Section ======= -->

    <div class="container">
        <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
            <div class="video-container">
                <video controls autoplay muted>
                    <source src="{{ Vite::asset('resources/img/frontend/video tutorial.mp4') }}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    </div>

    <!-- ======= End Video Section ======= -->

    <!-- ======= Penjelasan OPA Section ======= -->

    <div class="container" style="overflow: hidden">
        <div class="penjelasan-opa">
            <div class="row">
                <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    <div class="box bg-light">
                        <div>
                            <img src="{{ Vite::asset('resources/img/frontend/intersect4.svg') }}" alt="Gambar"
                                class="intersect">
                        </div>
                        <div class="card card-penjelasan">
                            <div class="card-body">
                                <h2 class="card-title">Kesiapan <br>Karir</h2>
                                <p class="card-text">Assessment ini bertujuan untuk mengetahui presepsi dirinya akan
                                    kesiapan dalam memasuki dunia kerja dilihat dari: Problem Solving, Komunikasi,
                                    Teamwork,Digital technology dan Leadership.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 d-flex">
                    <div class="text-penjelasan">
                        <div data-aos="fade-down" data-aos-delay="200" data-aos-duration="1500">
                            <h2>We provide a suit assesment to help you.</h2>
                        </div>
                        <div data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                            <ul class="list">
                                <li><i class="bi bi-check-circle-fill"></i>Gambaran diri melalui hasil penilaian untuk CV.
                                </li>
                                <li><i class="bi bi-check-circle-fill"></i>Pilih peluang karir sesuai karakter.</li>
                                <li><i class="bi bi-check-circle-fill"></i>Latih kesiapan untuk menghadapi tes psikotes.
                                </li>
                                <li><i class="bi bi-check-circle-fill"></i>Membantumu dalam menjelaskan kelebihan dan
                                    kekurangan saat interview kerja.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ======= END Penjelasan OPA Section ======= -->

    <!-- ======= Partner ======= -->

    <div class="container-fluid bg-light">
        <div class="container container-partner">
            <div class="teks-partner">
                <span class="blue-text">+20</span> partners trust us!
            </div>
            <div class="row row-cols-lg-5 mx-auto">
                <div class="col">
                    <div class="gambar">
                        <img src="{{ Vite::asset('resources/img/frontend/partner-1.svg') }}" alt="gambar">
                    </div>
                </div>
                <div class="col">
                    <div class="gambar">
                        <img src="{{ Vite::asset('resources/img/frontend/partner-2.svg') }}" alt="gambar">
                    </div>
                </div>

                <div class="col">
                    <div class="gambar">
                        <img src="{{ Vite::asset('resources/img/frontend/partner-3.svg') }}" alt="gambar">
                    </div>
                </div>

                <div class="col">
                    <div class="gambar">
                        <img src="{{ Vite::asset('resources/img/frontend/partner-4.svg') }}" alt="gambar">
                    </div>
                </div>

                <div class="col">
                    <div class="gambar">
                        <img src="{{ Vite::asset('resources/img/frontend/partner-5.svg') }}" alt="gambar">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ======= End Partner ======= -->

    <!-- ======= Testimonial ======= -->

    <div class="container testi">
        <div class="text-testi text-center">
            <span>WHAT OUR BELOVED
                <br>CUSTOMER SAY ABOUT OPA</span>
        </div>
        <div class="row testi">
            <div class="col-lg-2 d-flex align-items-center justify-content-end">
                <a href="https://www.tiktok.com/@ecc.co.id?_t=8fe6FzF2bA8&_r=1" target="_blank"><strong><img
                            src="{{ Vite::asset('resources/img/frontend/logo-tiktok.svg') }}"
                            class="tiktok">Ecc.co.id</strong></a>
            </div>

            <div class="col-lg-4 d-flex align-items-center justify-content-center" style="position: relative;">
                <img src="{{ Vite::asset('resources/img/frontend/panah.svg') }}" class="panah">
                <video class="video-testi" controls autoplay muted>
                    <source src="{{ Vite::asset('resources/img/frontend/video testi.mp4') }}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="col-lg-6 d-flex align-items-center justify-content-center">
                <div class="testimonial-box bg-light">
                    <img src="{{ Vite::asset('resources/img/frontend/petik.svg') }}">
                    <p>Bermanfaat untuk evaluasi apa yang menjadi kekurangan diri saya. Hasil OPA juga memberikan insight
                        baru untuk saya.
                    </p>
                    <div class="d-flex">
                        <img src="{{ Vite::asset('resources/img/frontend/img-testi.svg') }}" alt="" style="margin-right:10px">
                        <h5 class="d-flex flex-column">Estetika Nastiti 
                            <span>Fresh Graduate</span>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ======= End Testimonial ======= -->

    <!-- Personal Assesmen in Landing Page -->

    <div class="container">
        <div class="personal-assesmen">
            <div class="text-personal text-center">
                <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    <h1>Personal Assesment</h1>
                    <span>Mari jelajahi potensimu melalui Online Personal Asesment!</span>
                </div>
            </div>

            <div class="container">
                <div class="container-assesmen">
                    <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                        <div class="row row-cols-lg-4">
                            <div class="col">
                                <div class="card card-assesmen mx-auto" style="background-color:  #F9976A;">
                                    <div class="card-body d-flex flex-column">
                                        <img
                                            src="{{ Vite::asset('resources/img/frontend/intersect1.svg') }}"class="intersect">
                                        <h1 class="card-title-assesmen">Gaya <br>Kepribadian</h1>
                                        <p class="card-text-assesmen content">
                                            Asesmen ini mengungkap empat aspek utama, yaitu: <br>loyalitas, komunikasi,
                                            keteraturan, dan respon tantangan.
                                            Asesmen ini memberikan gambaran tentang kepribadian seseorang dalam bidang
                                            pekerjaan.
                                            Tes ini harus dikerjakan sendiri oleh individu yang diuji.
                                        </p>
                                        <button type="button" class="btn btn-outline-custom"
                                            onclick="window.location.href=`${APP_URL}/personality`">Mulai</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card card-assesmen mx-auto" style="background-color:  #99AEEF;">
                                    <div class="card-body d-flex flex-column">
                                        <img
                                            src="{{ Vite::asset('resources/img/frontend/intersect2.svg') }}"class="intersect">
                                        <h1 class="card-title-assesmen">Minat <br>Karir</h1>
                                        <p class="card-text-assesmen content">
                                            Asesmen Minat Karier mengukur 6 bidang minat karier, yaitu: <br>Executor,
                                            Thinker, Creator, Savior, Persuader, dan Organizer.
                                            Ini akan membantu mengidentifikasi minat dan kecenderungan dalam bidang
                                            pekerjaan. Hasil assesmen akan menunjukkan preferensi karir.
                                            Tes ini harus diisi sendiri oleh yang diuji.
                                        </p>
                                        <button type="button" class="btn btn-outline-custom"
                                            onclick="window.location.href=`${APP_URL}/icareer`">Mulai</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card card-assesmen mx-auto" style="background-color:  #5798AC;">
                                    <div class="card-body d-flex flex-column">
                                        <img
                                            src="{{ Vite::asset('resources/img/frontend/intersect3.svg') }}"class="intersect">
                                        <h1 class="card-title-assesmen">Pemetaan <br>Potensi</h1>
                                        <p class="card-text-assesmen content">
                                            Tes pemetaan potensi diri secara spesifik mengukur kemampuan kognitif dalam tiga
                                            bidang, yaitu:
                                            numerik, verbal dan spasial. Tes ini bertujuan untuk mengetahui potensi
                                            seseorang dalam bidang verbal, numerik, dan spasial.
                                        </p>
                                        <button type="button" class="btn btn-outline-custom">Mulai</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card card-assesmen mx-auto" style="background-color:  #F55A22;">
                                    <div class="card-body d-flex flex-column">
                                        <img
                                            src="{{ Vite::asset('resources/img/frontend/intersect4.svg') }}"class="intersect">
                                        <h1 class="card-title-assesmen">Kesiapan <br>Karir</h1>
                                        <p class="card-text-assesmen content">
                                            Assessment ini bertujuan untuk mengetahui presepsi dirinya akan kesiapan dalam
                                            memasuki dunia kerja dilihat dari: Problem Solving, Komunikasi, Teamwork,
                                            Digital technology dan Leadership
                                        </p>
                                        <button type="button" class="btn btn-outline-custom"
                                            onclick="window.location.href=`${APP_URL}/careerreadiness`">Mulai</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- End Personal Assesmen in Landing Page -->

    <!-- Complete Report -->

    <div class="container">
        <div class="complete-report" style="overflow: hidden">
            <div class="text-complete">
                <div data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000">
                    COMPLETE REPORT
                </div>
            </div>

            <div class="row row-complete">
                <div class="col-lg-6">
                    <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                        <div class="phone mx-auto">
                            <img src="{{ Vite::asset('resources/img/frontend/phone3.png') }}" alt="gambar"
                                class="img-fluid">
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 d-flex align-items-center">
                    <div data-aos="fade-left" data-aos-delay="600" data-aos-duration="2000">
                        <div class="list-complete">
                            <h5>Mengapa kamu harus mengunduh complete report ini?</h5>
                            <ul class="list">
                                <li><i class="bi bi-crosshair2" style="color: #CE2424;"></i>Gambaran detail mengenai saran
                                    pekerjaan sesuai hasil yang kamu dapatkan</li>
                                <li><i class="bi bi-person-circle" style="color: #5798AC;"></i>Hasil asesmen dapat
                                    dituliskan dalam profil singkat CV dan digunakan saat sesi interview</li>
                                <li><i class="bi bi-box-fill" style="color: #9AAFF0;"></i>Berisi saran lengkap untuk
                                    pengembangan diri dalam mempersiapkan karir</li>
                                <li><i class="bi bi-lightning-fill" style="color: #FFD600;"></i>Efisien: 4 asesmen dalam 1
                                    laporan</li>
                            </ul>
                            <button class="btn btn-custom">Contoh Complete Report <span
                                    class="bi bi-folder2-open"></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- End Complete Report -->

    <!-- Price Report -->

    <div class="container-fluid price mb-5">
        <div class="price-report">
            <div class="row row-cols-lg-5 flex-nowrap">
                <div class="col order-lg-1 order-1">
                    <div class="card card-report mx-auto">
                        <div class="card-body d-flex flex-column">
                            <h1 class="card-title">Gaya <br>Kepribadian</h1>
                            <h2 class="card-text">Rp 40.000 ,-</h2>
                            <span>Report detail :</span>
                            <ul>
                                <li><i class="bi bi-check2"></i>Pengambilan Keputusan</li>
                                <li><i class="bi bi-check2"></i>Orientasi kepada target</li>
                                <li><i class="bi bi-check2"></i>Pola Komunikasi</li>
                                <li><i class="bi bi-check2"></i>Ketaatan terhadap aturan</li>
                                <li><i class="bi bi-check2"></i>Sistematika kerja</li>
                                <li><i class="bi bi-check2"></i>Situasi kerja</li>
                                <li><i class="bi bi-check2"></i>Saran Pengembangan</li>
                            </ul>
                            <button type="button" class="btn btn-custom"
                                style="width: 100%; margin-top: auto;">Mulai</button>
                        </div>
                    </div>
                </div>
                <div class="col order-lg-2 order-2">
                    <div class="card card-report mx-auto">
                        <div class="card-body d-flex flex-column">
                            <h1 class="card-title">Minat <br>Karir</h1>
                            <h2 class="card-text">Rp 40.000 ,-</h2>
                            <span>Report detail :</span>
                            <ul>
                                <li><i class="bi bi-check2"></i>Kemampuan</li>
                                <li><i class="bi bi-check2"></i>Situasi Kerja</li>
                                <li><i class="bi bi-check2"></i>Rekomendasi peluang kerja</li>
                                <li><i class="bi bi-check2"></i>Jenis karirmu (savior, organizer, dll.)</li>
                            </ul>
                            <button type="button" class="btn btn-custom"
                                style="width: 100%; margin-top: auto;">Mulai</button>
                        </div>
                    </div>
                </div>
                <div class="col order-lg-3 order-3">
                    <div class="card card-report mx-auto">
                        <div class="card-body d-flex flex-column">
                            <h1 class="card-title">Pemetaan <br>Potensi</h1>
                            <h2 class="card-text">Rp 40.000 ,-</h2>
                            <span>Report detail :</span>
                            <ul>
                                <li><i class="bi bi-check2"></i>Kemampuan menerima dan mengolah informasi verbal</li>
                                <li><i class="bi bi-check2"></i>Kemampuan mengolah data numerical</li>
                                <li><i class="bi bi-check2"></i>Kemampuan mengolah data spasial</li>
                            </ul>
                            <button type="button" class="btn btn-custom"
                                style="width: 100%; margin-top: auto;">Mulai</button>
                        </div>
                    </div>
                </div>
                <div class="col order-lg-4 order-4">
                    <div class="card card-report mx-auto">
                        <div class="card-body d-flex flex-column">
                            <h1 class="card-title">Kesiapan <br>Karir</h1>
                            <h2 class="card-text">Rp 40.000 ,-</h2>
                            <span>Report detail :</span>
                            <ul>
                                <li><i class="bi bi-check2"></i>Problem solving</li>
                                <li><i class="bi bi-check2"></i>Komunikasi </li>
                                <li><i class="bi bi-check2"></i>Kerjasama</li>
                                <li><i class="bi bi-check2"></i>Teknologi digital</li>
                                <li><i class="bi bi-check2"></i>Kepemimpinan</li>
                                <li><i class="bi bi-check2"></i>Manajemen karir</li>
                                <li><i class="bi bi-check2"></i>Intercultural</li>
                            </ul>
                            <button type="button" class="btn btn-custom"
                                style="width: 100%; margin-top: auto;">Mulai</button>
                        </div>
                    </div>
                </div>
                <div class="col order-lg-5 order-0">
                    <div class="card card-report mx-auto" style="border: 3px solid #5798AC; position: relative;">
                        <div class="recommended-box"
                            style="position: absolute; top: -20px; left: 50%; transform: translateX(-50%); z-index: 1;">
                            <p>Recommended!</p>
                        </div>
                        <div class="card-body d-flex flex-column">
                            <h1 class="card-title" style="color: #000;"><b>Complete <br>Report</b></h1>
                            <h2 class="card-text" style="color: #000;">Rp 125.000 ,-</h2>
                            <span>Report detail :</span>
                            <ul class="list-price">
                                <li><i class="bi bi-check2" style="color: #5798AC;"></i>4 in 1 Report</li>
                                <li><i class="bi bi-check2" style="color: #5798AC;"></i>Mengenali gambaran diri secara
                                    lengkap</li>
                                <li><i class="bi bi-check2" style="color: #5798AC;"></i>Memahami tipe kepribadianmu</li>
                                <li><i class="bi bi-check2" style="color: #5798AC;"></i>Mengetahi peta potensimu</li>
                                <li><i class="bi bi-check2" style="color: #5798AC;"></i>Saran Pengembangan</li>
                            </ul>
                            <button type="button" class="btn btn-custom"
                                style="width: 100%; margin-top: auto;">Mulai</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <!-- End Price Report -->


    @include('frontend.layouts.footers.footer')
@endsection
