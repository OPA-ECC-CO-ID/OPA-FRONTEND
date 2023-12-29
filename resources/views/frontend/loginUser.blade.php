@extends('frontend.layouts.main')

@section('content')

    <div class="entry">
        <img class="img-fluid-entry d-sm-block" src="{{Vite::asset('resources/img/frontend/addition-login.svg')}}">
            <div class="mx-auto">
                <!--Login Web-->
                    <div class="container-login">
                        <div class="hero-login">
                            <img class="img-entry" src="{{Vite::asset('resources/img/frontend/logo-login.svg')}}">
                            <h2>Selamat datang!</h2>
                            <p>Masuk ke Online Personal Assessment dengan email dan kata sandi anda!</p>
                        </div>

                        <div class="form-login container-fluid">
                            <form action="#" class="needs-validation" id="loginForm">
                                <div class="field email-field">
                                    <div class="input-field-login">
                                        <input type="email" class="email form-control" placeholder="Email" required>
                                    </div>
                                    <span class="error email-error">
                                        <p class="error-text">Format email kamu salah. Cek kembali!</p>
                                    </span>
                                </div>
                                <div class="field login-password">
                                    <div class="input-field-login">
                                        <input type="password" class="password form-control" placeholder="Kata sandi" required>
                                        <i class="bi bi-eye-slash show-hide"></i>
                                    </div>
                                    <span class="password-error">
                                        <p class="error error-text">Kata sandi harus terdapat kombinasi huruf, angka, atau simbol!</p>
                                        <p class="error error-api" style="display: none;">Kata sandi kamu salah. Coba lagi!</p>
                                    </span>
                                </div>
                                <div class="form-check d-flex position-relative">
                                    <span class="checkbox-login position-absolute">
                                        <input type="checkbox" id="check">
                                        <label for="check">Ingat saya</label>
                                    </span>
                                    <a href='{{route('email')}}' class="forget position-absolute end-0">Lupa kata sandi?</a>
                                </div>
                                <div class="input-field-login button-login">
                                    <a href="{{route('index')}}" class="link-underline-opacity-0">
                                        <input type="submit" value="Masuk" id="loginButton" disabled>
                                    </a>
                                </div>
                            </form>

                            <div class="line"></div>
                            <div class="logo text-center container">
                                <a href="https://ecc.co.id/signup/auth?authclient=google">
                                    <img src="{{Vite::asset('resources/img/frontend/google.png')}}" alt="google">
                                </a>
                                <a href="https://www.linkedin.com/login/auth?authclient=linkedin">
                                    <img src="{{Vite::asset('resources/img/frontend/linkdin.png')}}" alt="linkedin">
                                </a>
                            </div>
                            <div class="register text-center container">
                                <p>Belum memiliki akun? <a href="{{('registerUser')}}"> Daftar!</a></p>
                            </div>
                        </div>
                    </div>
            </div>
    </div>
</div>
@endsection
