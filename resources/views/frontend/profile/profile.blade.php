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
                <div class="container bg-white">
                    <div class="container-profile">
                        <div class="container-profile-bio">
                            <div class="d-flex justify-content-between">
                                <h4>Data Diri</h4>
                                <button type="button" class="btn btn-custom"
                                    onclick="window.location.href=`${APP_URL}/profile/profile-bio`">Edit Profile</button>
                            </div>
                            <div class="container-profile-content mt-2" id="profile-content-bio">
                                <p>Nama Lengkap<br><span id="nama_lengkap"></span></p>
                                <p>Nomor Handphone<br><span id="no_hp">-</span></p>
                                <p>Jenis Kelamin<br><span id="jk"></span></p>
                                <p>Tempat Lahir<br><span id="tempat_lahir"></span></p>
                                <p>Tanggal Lahir<br><span id="tanggal_lahir"></span></p>
                                <p>Negara Asal<br><span id="negara_asal"></span></p>
                                <p id="provinsi">Provinsi Asal<br><span id="provinsi_asal"></span></p>
                                <p id="kota">Kota Asal<br><span id="kota_asal"></span></p>
                            </div>
                        </div>
                        <div class="container-profile-education mt-2">
                            <h4>Pendidikan</h4>
                            <div class="container-profile-content" id="profile-content-education">
                                <p>Pendidikan Terakhir<br><span id="pendidikan_terakhir"></span></p>
                                <p>Nama perguruan Tinggi / Sekolah<br><span id="pt">-</span></p>
                                <p>Program Studi<br><span id="prodi">-</span></p>
                                <p>Konsentrasi Jurusan<br><span id="jurusan">-</span></p>
                                <p>Tahun Masuk<br><span id="masuk">-</span></p>
                                <p>Tahun Lulus<br><span id="lulus">-</span></p>
                            </div>
                        </div>
                        <div class="container-profile-skills mt-2">
                            <h4>Mengenai Diri</h4>
                            <div class="container-profile-content" id="profile-content-skills">
                                <p>Pekerjaan Saat ini<br><span id="job_title"></span></p>
                                <p>Profil Singkat<br><span id="short_biography">-</span></p>
                                <p>Kelebihan<br><span id="positive">-</span></p>
                                <p>Kekurangan<br><span id="negative">-</span></p>
                                <p>Keterampilan non-teknis (soft-skill)<br><span id="soft_skill">-</span></p>
                                <p>Keterampilan teknis (hard-skill)<br><span id="hard_skill">-</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
