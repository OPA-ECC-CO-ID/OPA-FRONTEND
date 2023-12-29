@extends('frontend.layouts.main')

@section('content')

    <div class="access">
        <img class="img-fluid-access d-sm-block" src="{{Vite::asset('resources/img/frontend/addition-register.svg')}}">
            <div class="mx-auto">
                <!--Register Web-->
                    <div class="container-register">
                        <div class="hero-register">
                            <img class="img-access" src="{{Vite::asset('resources/img/frontend/logo-register.svg')}}">
                            <h2>Ayo bergabung!</h2>
                            <p>Daftar ke Online Personal Assessment dan temukan bakat terpendammu!</p>
                        </div>

                        <div class="form-register w-100 container-fluid">
                            <form action="#" class="needs-validation" id="myForm">
                                <div class="field name-field">
                                    <div class="input-field-register">
                                        <input type="text" class="name form-control" placeholder="Nama lengkap" required>
                                    </div>
                                </div>
                                <div class="field email-field">
                                    <div class="input-field-register">
                                        <input type="email" class="email form-control" placeholder="Email" required>
                                    </div>
                                    <span class="email-error">
                                        <p class="error error-text error-api">Format email kamu salah. Cek kembali!</p>
                                        {{-- <p class="error error-api" style="display: none;">Email sudah terdaftar</p> --}}
                                    </span>
                                </div>
                                <div class="field username-field">
                                    <div class="input-field-register">
                                        <input type="text" class="username form-control" placeholder="Username" required>
                                    </div>
                                    <span class="username-error">
                                        <p class="error error-text">Username sudah digunakan. Coba lainnya!</p>
                                        <p class="error error-api-username" style="display: none;">Username sudah terdaftar</p>
                                    </span>
                                </div>
                                <div class="field login-password">
                                    <div class="input-field-register position-relative">
                                        <input type="password" class="password form-control" placeholder="Kata sandi" required>
                                        <i class="bi bi-eye-slash show-hide"></i>
                                    </div>
                                    <span class="error password-error">
                                        <p class="error-text">Kata sandi harus terdapat kombinasi huruf, angka, atau simbol!</p>
                                    </span>
                                </div>
                                <div class="text-register container">
                                    <p>Minimal 8 kata dengan kombinasi huruf, angka dan simbol</p>
                                </div>
                                <div class="form-check-register d-flex position-relative">
                                    <div class="checkbox-register position-absolute d-flex">
                                        <input type="checkbox" id="check">
                                        <label for="check">Dengan mendaftar, saya menyetujui kebijakan dan privasi yang berlaku</label>
                                    </div>
                                </div>
                                {{-- <div class="g-recaptcha" id="captchaElement" data-sitekey="6Ldwu7UoAAAAABY_m5bkwFfXcv6HR2sqDmRi_GRK" data-callback="onCaptchaVerify"></div> --}}

                                <div class="input-field-register button-register">
                                    <a href="{{route('onboarding')}}" class="link-underline-opacity-0">
                                        <input type="submit" value="Daftar" id="registerButton" disabled>
                                    </a>
                                </div>
                            </form>
                        </div>

                        <div class="line"></div>
                        <div class="logo text-center container">
                            <a href="https://ecc.co.id/signup/auth?authclient=google">
                                <img src="{{Vite::asset('resources/img/frontend/google.png')}}" alt="google">
                            </a>
                            <a href="https://www.linkedin.com/login/auth?authclient=linkedin">
                                <img src="{{Vite::asset('resources/img/frontend/linkdin.png')}}" alt="linkedin">
                            </a>
                        </div>
                            <div class="login align-items-center text-center container">
                                <p>Sudah memiliki akun? <a href="{{('loginUser')}}"> Masuk!</a></p>
                            </div>
                    </div>
            </div>
    </div>
</div>
@endsection
