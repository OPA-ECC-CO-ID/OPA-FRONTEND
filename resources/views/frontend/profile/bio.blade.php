@extends('frontend.layouts.main')

@section('content')
    @include('frontend.layouts.navbars.navlogin')

    <style>
        body {
            background: #F8F8F8;
        }
    </style>
    @include('frontend.components.alert')
    <div class="container">
        <div class="row">

            @include('frontend.layouts.sidebars.sidebar')

            <div class="col-lg-9 mt-3">
                <div class="container">
                    <div class="list-group menu-profile">
                        <a href="{{ route('profile-bio') }}" class="list-group-item list-group-item-action">Data Diri</a>
                        <a href="{{ route('education') }}" class="list-group-item list-group-item-action">Pendidikan</a>
                        <a href="{{ route('skills') }}" class="list-group-item list-group-item-action">Mengenai Diri</a>
                    </div>
                    <div class="container-bio bg-white">
                        <h3>Data Diri</h3>
                        <form id="form-bio">
                            <div class="mb-3">
                                <label for="full_name" class="form-label">Nama Lengkap <span
                                        style="color: red;">*</span></label>
                                <input type="text" class="form-control custom-input shadow-none" name="full_name"
                                    id="full_name" required>
                            </div>
                            <div class="mb-3">
                                <label for="phone" class="form-label">Nomor hp <span style="color: red;">*</span></label>
                                <input type="tel" class="form-control custom-input shadow-none" name="phone"
                                    id="phone" required>
                            </div>
                            <div class="mb-3">
                                <label for="gender" class="form-label">Jenis Kelamin <span
                                        style="color: red;">*</span></label>
                                <select class="form-select shadow-none custom-input" name="gender" id="gender" required>
                                    <option value="" disabled selected>Pilih jenis kelamin</option>
                                    <option value="F">Perempuan</option>
                                    <option value="M">Laki - Laki</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="birth_place" class="form-label">Tempat Lahir <span
                                        style="color: red;">*</span></label>
                                <input type="text" class="form-control custom-input shadow-none" name="birth_place"
                                    id="birth_place" required>
                            </div>
                            <div class="mb-3">
                                <label for="birth_date" class="form-label">Tanggal Lahir <span
                                        style="color: red;">*</span></label>
                                <input type="date" class="form-control custom-input shadow-none" name="birth_date"
                                    id="birth_date" required>
                            </div>
                            <div class="mb-3">
                                <label for="bio_country_id" class="form-label">Negara Asal <span
                                        style="color: red;">*</span></label>
                                <select class="form-select shadow-none custom-input" name="bio_country_id"
                                    id="bio_country_id" required>

                                </select>
                            </div>
                            <div class="mb-3" id="province-box">
                                <label for="bio_province_id" class="form-label">Provinsi Asal <span
                                        style="color: red;">*</span></label>
                                <select class="form-select shadow-none custom-input" name="bio_province_id"
                                    id="bio_province_id" required>

                                </select>
                            </div>
                            <div class="mb-3" id="city-box">
                                <label for="bio_city_id" class="form-label">Kota Asal <span
                                        style="color: red;">*</span></label>
                                <select class="form-select shadow-none custom-input" name="bio_city_id" id="bio_city_id"
                                    required>

                                </select>
                            </div>
                            <button type="submit" class="btn btn-custom mt-4" id="update-button">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
