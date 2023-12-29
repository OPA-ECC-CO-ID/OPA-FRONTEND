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
                        <h3>Pendidikan</h3>
                        <form id="form-last-edu">
                            <div class="mb-3">
                                <label for="education_type_id" class="form-label">Pendidikan Terakhir <span
                                        style="color: red;">*</span></label>
                                <select class="form-select shadow-none custom-input" name="education_type_id" id="education_type_id" required>
                                    <option value="" disabled selected>Pilih pendidikan terakhir</option>
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
                            </div>
                            <div class="mb-3">
                                <label for="university_id" class="form-label">Nama Perguruan Tinggi/Sekolah <span
                                        style="color: red;">*</span></label>
                                <select class="form-select shadow-none custom-input" name="university_id" id="university_id" required>
                                
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="major_id" class="form-label">Program Studi <span
                                        style="color: red;">*</span></label>
                                <select class="form-select shadow-none custom-input" name="major_id" id="major_id" required>
                                
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="submajor" class="form-label">Konsentrasi Jurusan <span
                                        style="color: red;">*</span></label>
                                <input type="text" class="form-control custom-input shadow-none" name="submajor" id="submajor" required>
                            </div>
                            <div class="mb-3">
                                <label for="started_date" class="form-label">Tahun Masuk <span
                                        style="color: red;">*</span></label>
                                <input type="date" class="form-control custom-input shadow-none" name="started_date" id="started_date" required>
                            </div>
                            <div class="mb-3">
                                <label for="finished_date" class="form-label">Tahun Lulus <span
                                        style="color: red;">*</span></label>
                                <input type="date" class="form-control custom-input shadow-none" name="finished_date" id="finished_date" required>
                            </div>
                            <button type="submit" class="btn btn-custom mt-4">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
