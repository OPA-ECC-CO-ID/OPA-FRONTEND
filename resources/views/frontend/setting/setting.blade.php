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

            @include('frontend.layouts.sidebars.sidebar-setting')

            <div class="col-lg-9 mt-3 mb-4">
                <div class="container bg-white">
                    <div class="container-setting">
                        <h2>Pengaturan Akun</h2>
                        <hr>
                        <div class="datalist">
                            <form>
                                <div class="form-group mb-3">
                                    <div class="form-group-content">
                                        <label for="full_name" class="form-label text-muted">Nama</label>
                                        <label style="margin-right: 16px">:</label>
                                        <input type="text" class="form-control" name="full_name" id="full_name"
                                            value="" readonly>
                                        <div class="btn-edit">
                                            <button class="btn btn-outline-custom2">
                                                <i class="bi bi-pencil-square"></i>
                                            </button>
                                        </div>
                                        <div class="btn-sudah-edit d-flex d-none">
                                            <button style="margin-right:10px" class="btn btn-cancel">
                                                <i class="bi bi-x"></i>
                                            </button>
                                            <button type="button" style="" class="btn btn-save">
                                                <i class="bi bi-check"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="text-error mt-3">
                                        <span class="error-text" style="color: red" id="validasi-full_name"></span>
                                    </div>
                                </div>
                                <div class="form-group mb-3">
                                    <div class="form-group-content">
                                        <label for="username" class="form-label text-muted">Username</label>
                                        <label style="margin-right: 16px">:</label>
                                        <input type="text" class="form-control" name="username" id="username"
                                            value="" readonly>
                                        <div class="btn-edit">
                                            <button class="btn btn-outline-custom2">
                                                <i class="bi bi-pencil-square"></i>
                                            </button>
                                        </div>
                                        <div class="btn-sudah-edit d-flex d-none">
                                            <button style="margin-right:10px" class="btn btn-cancel">
                                                <i class="bi bi-x"></i>
                                            </button>
                                            <button type="button" style="" class="btn btn-save">
                                                <i class="bi bi-check"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="text-error mt-3">
                                        <span class="error-text" style="color: red" id="validasi-username"></span>
                                    </div>
                                </div>
                                <div class="form-group mb-3">
                                    <div class="form-group-content">
                                        <label for="email" class="form-label text-muted">Email</label>
                                        <label style="margin-right: 16px">:</label>
                                        <input type="email" class="form-control" name="email" id="email"
                                            value="" readonly>
                                        <div class="btn-edit">
                                            <button class="btn btn-outline-custom2">
                                                <i class="bi bi-pencil-square"></i>
                                            </button>
                                        </div>
                                        <div class="btn-sudah-edit d-flex d-none">
                                            <button style="margin-right:10px" class="btn btn-cancel">
                                                <i class="bi bi-x"></i>
                                            </button>
                                            <button type="button" style="" class="btn btn-save">
                                                <i class="bi bi-check"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="text-error mt-3">
                                        <span class="error-text" style="color: red" id="validasi-email"></span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        @include('frontend.modal.save-setting')
    </div>
@endsection
