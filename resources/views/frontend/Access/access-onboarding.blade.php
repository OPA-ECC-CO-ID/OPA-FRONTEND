@extends('frontend.layouts.main')

@section('content')
    <div class="access">
        <img class="img-fluid-access d-sm-block" src="{{Vite::asset('resources/img/frontend/addition-onboarding.svg')}}">
            <div class="mx-auto">
                <!--Onboarding Web-->
                    <div class="container-ob">
                        <div class="hero-onboarding mx-auto text-center mw-100">
                            <h2 class="latin-text text-center">Selamat bergabung!</h2>
                            <p class="latin-text text-center">Data dirimu akan sangat membantu dalam penilaian asesmen dan proses perekrutan</p>
                        </div>
                        <div class="progress-bar d-flex mx-auto position-relative flex-row">
                            <div class="step">
                                <div class="bullet">
                                    <span>1</span>
                                </div>
                                <div class="check bi bi-check2"></div>
                                <p>Data diri</p>
                            </div>
                            <div class="step">
                                <div class="bullet">
                                    <span>2</span>
                                </div>
                                <div class="check bi bi-check2"></div>
                                <p>Pendidikan</p>
                            </div>
                            <div class="step">
                                <div class="bullet">
                                    <span>3</span>
                                </div>
                                <div class="check bi bi-check2"></div>
                                <p>Tentang diri</p>
                            </div>
                        </div>

                        <div class="form-outer m-auto container-fluid">
                            <form action="#" method="post" class="needs-validation d-flex text-center overflow-x-hidden">
                                <div class="page first slide-page needs-validation">
                                    <div class="field-ob">
                                        <div class="label" for="name">Nama lengkap <span style="color: red;">*</span></div>
                                        <input type="text" class="form-control" id="name" placeholder="Isi sesuai kartu identitas (KTP/SIM)" required>
                                    </div>
                                    <div class="field-ob">
                                        <div class="label" for="phone">Nomor hp <span style="color: red;">*</span></div>
                                        <input type="tel" class="form-control" id="phone" name="phone" placeholder="contoh: +62 8223 3297 321" pattern="+[\d]{2} [\d]{4} [\d]{4} [\d]{3}" required>
                                    </div>
                                    <div class="text-ob container">
                                        <p>Tambahkan kode negara di awal nomor</p>
                                    </div>
                                    <div class="field-ob">
                                        <div class="label" for="gender">Jenis kelamin <span style="color: red;">*</span></div>
                                        <select class="form-control custom-form" id="gender" required>
                                            <option value="" disabled selected>Pilih jenis kelamin</option>
                                            <option value="F">Perempuan</option>
                                            <option value="M">Laki - Laki</option>
                                        </select>
                                        <i class="bi bi-caret-down-fill dropdown"></i>
                                    </div>
                                    <div class="field-ob">
                                        <div class="label" for="placeOfBirth">Tempat lahir <span style="color: red;">*</span></div>
                                        <input type="text" class="form-control" id="placeOfBirth" placeholder="Isi sesuai kartu identitas (KTP/SIM)" required>
                                    </div>
                                    <div class="field-ob">
                                        <div class="label" for="date">Tanggal lahir <span style="color: red;">*</span></div>
                                        <input type="date" class="form-control custom-form" id="date" placeholder="dd/mm/yyyy" required>
                                    </div>
                                    <div class="field-ob">
                                        <div class="label" for="bio_country">Negara asal <span style="color: red;">*</span></div>
                                        <select class="form-control custom-input" name="bio_country" id="bio_country" required>
                                            <option value="100">INDONESIA</option>
                                        </select>
                                        <i class="bi bi-caret-down-fill dropdown"></i>
                                    </div>
                                    <div class="field-ob" id="province-box">
                                        <div class="label" for="bio_province">Provinsi asal <span style="color: red;">*</span></div>
                                        <select class="form-control" id="bio_province" required>
                                            <option value="100" selected disabled hidden>Isi sesuai kartu identitas (KTP/SIM)</option>
                                        </select>
                                        <i class="bi bi-caret-down-fill dropdown"></i>
                                    </div>
                                    <div class="field-ob" id="city-box">
                                        <div class="label" for="bio_city">Kota asal <span style="color: red;">*</span></div>
                                        <select class="form-control" id="bio_city" required>
                                            <option value="" selected disabled hidden>Isi sesuai kartu identitas (KTP/SIM)</option>
                                        </select>
                                        <i class="bi bi-caret-down-fill dropdown"></i>
                                    </div>
                                    <div class="field-ob btns">
                                        <button class="firstNext next" disabled>Selanjutnya</button>
                                    </div>
                                </div>

                                <div class="page second">
                                    <div class="field-ob">
                                        <div class="label" for="education">Pendidikan Terakhir <span style="color: red;">*</span></div>
                                            <select class="form-control" id="education" placeholder="contoh: S1" required>
                                                <option value="" selected disabled hidden>contoh: S1</option>
                                                <option value="1">SD</option>
                                                <option value="2">SMP</option>
                                                <option value="3">SMA/SMK</option>
                                                <option value="4">D1</option>
                                                <option value="5">D2</option>
                                                <option value="6">D3</option>
                                                <option value="7">D4</option>
                                                <option value="8">S1</option>
                                                <option value="9">S2</option>
                                                <option value="10">S3</option>
                                                <option value="11">Profesi</option>
                                            </select>
                                       <i class="bi bi-caret-down-fill dropdown"></i>
                                    </div>
                                    <div class="field-ob">
                                        <div class="label" for="university">Nama Perguruan Tinggi/Sekolah <span style="color: red;">*</span></div>
                                            <select class="form-control select2" id="university" placeholder="contoh: Universitas Muhammadiyah Surakarta" required>
                                            </select>
                                        <i class="bi bi-caret-down-fill dropdown"></i>
                                    </div>
                                    <div class="field-ob">
                                        <div class="label" for="major">Program Studi <span style="color: red;">*</span></div>
                                            <select class="form-control select2" id="major" placeholder="contoh: Teknik Informatika" required>
                                            </select>
                                        <i class="bi bi-caret-down-fill dropdown"></i>
                                    </div>
                                    <div class="text-ob container">
                                        <p>Bagi pelajar bisa mengisi sesuai penjurusan. Contoh: IPA</p>
                                    </div>
                                    <div class="field-ob">
                                        <div class="label" for="concentration">Konsentrasi Jurusan <span style="color: red;">*</span></div>
                                        <input type="text" class="form-control" id="concentration" placeholder="contoh: Rekayasa Perangkat Lunak (RPL)" required>
                                    </div>
                                    <div class="text-ob container">
                                        <p>Bagi pelajar bisa mengisi sesuai penjurusan. Contoh: IPA</p>
                                    </div>
                                    <div class="field-ob">
                                        <div class="label" for="entryYear">Tahun masuk <span style="color: red;">*</span></div>
                                        <input type="date" class="form-control custom-input" name="entryYear" id="entryYear" required>
                                    </div>
                                    <div class="field-ob">
                                        <div class="label" for="graduationYear">Tahun lulus <span style="color: red;">*</span></div>
                                        <input type="date" class="form-control custom-input" name="graduationYear" id="graduationYear" required>
                                    </div>
                                    <div class="text-ob container">
                                        <p>Bagi mahasiswa / pelajar dapat mengisi dengan ekspetasi lulus</p>
                                    </div>
                                    <div class="field-ob btns">
                                        <button class="prev-1 prev">Sebelumnya</button>
                                        <button class="next-1 next" disabled>Selanjutnya</button>
                                    </div>
                                </div>

                                <div class="page third">
                                    <div class="field-ob">
                                        <div class="label" for="currentJob">Pekerjaan saat ini <span style="color: red;">*</span></div>
                                        <input type="text" class="form-control job_title" id="job_title" placeholder="Contoh: Fresh Graduate" required>
                                    </div>
                                    <div class="text-ob container">
                                        <p>Bagi mahasiswa / pelajar mengisi sesuai kondisi. Contoh: Mahasiswa</p>
                                    </div>
                                    <div class="field-ob">
                                        <div class="label" for="profile">Profil singkat <span style="color: red;">*</span></div>
                                        <textarea class="form-control short_biography" id="short_biography" rows="4" cols="4" placeholder="Deskripsikan dirimu secara singkat" required></textarea>
                                    </div>
                                    <div class="field-ob">
                                        <div class="label" for="strengths">Kelebihan <span style="color: red;">*</span></div>
                                        <input type="text" class="form-control positive" id="positive" placeholder="Jelaskan secara singkat" required>
                                    </div>
                                    <div class="field-ob">
                                        <div class="label" for="weaknesses">Kekurangan <span style="color: red;">*</span></div>
                                        <input type="text" class="form-control negative" id="negative" placeholder="Jelaskan secara singkat" required>
                                    </div>
                                    <div class="field-ob">
                                        <div class="label" for="skills">Keterampilan non-teknis (soft skill) <span style="color: red;">*</span></div>
                                            <select id="softSkills" multiple class="form-control custom-input shadow-none" required></select>
                                            {{-- <input type="text" class="form-control softSkills" id="skills" placeholder="Tekan 'enter' untuk tambah lainnya" required> --}}
                                    </div>
                                    <div class="field-ob">
                                        <div class="label" for="hardSkills">Keterampilan teknis (hard skill) <span style="color: red;">*</span></div>
                                            <select id="hardSkills" multiple class="form-control custom-input shadow-none"></select>
                                            {{-- <input type="text" class="form-control" id="hardSkills" multiple class="form-control custom-input shadow-none" placeholder="Tekan 'enter' untuk tambah lainnya" required> --}}
                                    </div>
                                    <div class="field-ob btns">
                                        <button class="prev-2 prev">Sebelumnya</button>
                                        <button class="submit" id="update-data" disabled>Selesai</button>
                                    </div>
                                </div>
                            </form>
                    </div>
            </div>
    </div>
@endsection
