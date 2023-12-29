@extends('frontend.layouts.main')

@section('content')

    <div class="entry">
        <img class="img-fluid-entry d-sm-block" src="{{Vite::asset('resources/img/frontend/addition-login.svg')}}">
            <div class="mx-auto">
                <!--Login Web-->
                    <div class="container-login">
                        <div class="hero-email">
                            <img class="img-entry" src="{{Vite::asset('resources/img/frontend/logo-login.svg')}}">
                            <h2>Kata Sandi Baru</h2>
                            <p>Masukkan kata sandi baru di bawah ini!</p>
                        </div>

                        <div class="form-login container-fluid">
                            <form action="#" class="needs-validation" id="passwordForm">
                                <div class="field create-password">
                                    <div class="input-field-login">
                                        <input type="password" class="newPassword form-control-email" placeholder="Kata sandi baru" required>
                                        <i class="bi bi-eye-slash new-show-hide"></i>
                                    </div>
                                    <span class="error password-error">
                                        <p class="error-text">Kata sandi harus kombinasi huruf, angka, atau simbol!</p>
                                    </span>
                                </div>
                                <div class="field confirm-password">
                                    <div class="input-field-login">
                                        <input type="password" class="cPassword form-control-email" placeholder="Ulangi kata sandi baru" required>
                                        <i class="bi bi-eye-slash confirm-show-hide"></i>
                                    </div>
                                    <span class="error password-error">
                                        <p class="error-text">Kata sandi tidak cocok!</p>
                                    </span>
                                </div>
                                <div class="text-email container">
                                    <p>Minimal 8 kata dengan kombinasi huruf, angka, atau simbol</p>
                                </div>
                                <div class="input-field-login button-login">
                                    <a href="{{route('loginUser')}}" class="link-underline-opacity-0">
                                        <input type="submit" value="Masuk" id="passwordButton" disabled>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        @include('frontend.modal.password-changed')
    </div>

@endsection
