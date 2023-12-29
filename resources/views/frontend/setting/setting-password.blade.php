@extends('frontend.layouts.main')

@section('content')
    @include('frontend.layouts.navbars.navlogin')
    @include('frontend.components.alert')

    <style>
        body {
            background: #F8F8F8;
        }
    </style>

    <div class="container">
        <div class="row">

            @include('frontend.layouts.sidebars.sidebar-setting')

            <div class="col-lg-9 mt-3 mb-4">
                <div class="container bg-white">
                    <div class="container-setting">
                        <h2>Ubah kata sandi</h2>
                        <span>Jika Kamu login menggunakan akun sosial media, gunakan fitur lupa kata sandi untuk mengganti sandi Kamu</span>
                        <hr>
                        <div class="datalist-password">
                            <form id="change-password">
                                <div class="form-group mb-4 mt-4">
                                    <div class="field form-group-row">
                                        <label for="password" class="form-label text-muted">Kata sandi saat ini</label>
                                        <label style="margin-right: 16px">:</label>
                                        <div class="passwordField current-password">
                                            <input type="password" class="form-control currentPassword" name="currentPassword" id="currentPassword" value="">
                                            <i class="bi bi-eye-slash show-hide-current"></i>
                                            <span class="password-error">
                                                {{-- <p class="error error-400">Kata sandi kamu salah. Coba lagi!</p> --}}
                                                <p class="error error-api" style="display: none;">Kata sandi kamu salah. Coba lagi!</p>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="forgot-password-text" style="text-align: right; margin-top: 10px;">
                                        <a href="{{ route('email') }}">Lupa kata sandi?</a>
                                    </div>
                                </div>
                                <div class="form-group mb-5">
                                    <div class="field form-group-row">
                                        <label for="newPassword" class="form-label text-muted">Kata sandi baru</label>
                                        <label style="margin-right: 16px">:</label>
                                        <div class="passwordField new-password">
                                            <input type="password" class="form-control newPassword" name="newPassword" id="newPassword" value="">
                                            <i class="bi bi-eye-slash show-hide-new"></i>
                                            <span class="password-error">
                                                <p class="error error-text">Kata sandi minimal 8 huruf, berupa kombinasi huruf besar-kecil, angka, dan simbol.</p>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="noted-email" style="margin-top: 10px;">
                                        <span>Kata sandi minimal 8 huruf, berupa kombinasi huruf besar-kecil, angka, dan simbol.</span>
                                    </div>
                                </div>
                                <div class="confirm-password form-group mb-4">
                                    <div class="field form-group-row">
                                        <label for="passwordConfirm" class="form-label text-muted">Konfirmasi sandi</label>
                                        <label style="margin-right: 16px">:</label>
                                        <div class="passwordField confirm-password">
                                            <input type="password" class="form-control confirmPassword" name="confirmPassword" id="confirmPassword" value="">
                                            <i class="bi bi-eye-slash show-hide-confirm"></i>
                                            <span class="password-error">
                                                <p class="error error-text">Kata sandi tidak cocok. Coba lagi!</p>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-custom float-md-end" id="submit">Simpan Perubahan</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
