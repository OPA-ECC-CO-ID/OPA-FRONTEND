@extends('frontend.layouts.main')

@section('content')

    <div class="entry">
        <img class="img-fluid-entry d-sm-block" src="{{Vite::asset('resources/img/frontend/addition-login.svg')}}">
            <div class="mx-auto">
                <!--Verify Email-->
                    <div class="container-login">
                        <div class="hero-email">
                            <img class="img-entry" src="{{Vite::asset('resources/img/frontend/logo-login.svg')}}">
                            <h2>Lupa kata sandi?</h2>
                            <p>Masukkan alamat email kami akan mengirimkan tautan untuk mengganti kata sandi ke emailmu.</p>
                        </div>

                        <div class="form-login container-fluid">
                            <form action="#" class="needs-validation" id="myForm">
                                <div class="field email-field">
                                    <div class="input-field-login">
                                        <input type="email" class="email form-control-email" placeholder="Alamat email" required>
                                    </div>
                                    <span class="error email-error">
                                        <p class="error-text">Format email kamu salah. Cek kembali!</p>
                                    </span>
                                </div>
                                <div class="text-email container">
                                    <p>Email harus sesuai dengan yang kamu daftarkan!</p>
                                </div>
                                <div class="input-field-login button-login">
                                    <a href="{{route('password')}}" class="link-underline-opacity-0">
                                        <input type="submit" value="Kirim" id="loginButton" disabled>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        @include('frontend.modal.email-verify')
    </div>
@endsection
