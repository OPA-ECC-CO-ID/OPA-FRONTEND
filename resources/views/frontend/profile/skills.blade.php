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
                        <form>
                            <div class="mb-3">
                                <label for="job_title" class="form-label">Pekerjaan Saat Ini <span
                                        style="color: red;">*</span></label>
                                <input type="text" class="form-control custom-input shadow-none" name="job_title" id="job_title" required>
                            </div>
                            <div class="mb-3">
                                <label for="short_biography" class="form-label">Profil Singkat <span
                                        style="color: red;">*</span></label>
                                <textarea class="form-control custom-input shadow-none" style="height: 156px" name="short_biography" id="short_biography" rows="5" required></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="positive" class="form-label">Kelebihan <span
                                        style="color: red;">*</span></label>
                                <input type="text" class="form-control custom-input shadow-none" name="positive" id="positive"required>
                            </div>
                            <div class="mb-3">
                                <label for="negative" class="form-label">Kekurangan <span
                                        style="color: red;">*</span></label>
                                <input type="text" class="form-control custom-input shadow-none" name="negative" id="negative" required>
                            </div>
                            <div class="mb-3">
                                <label for="softSkills" class="form-label">Ketrampilan non-teknis (soft-skill)<span
                                        style="color: red;">*</span></label>
                                <select name="softSkills" id="softSkills" multiple class="form-control custom-input shadow-none"></select>
                            </div>
                            <div class="mb-3">
                                <label for="hardSkills" class="form-label">Keterampilan Teknis (hard skill)<span
                                        style="color: red;">*</span></label>
                                 <select name="hardSkills" id="hardSkills" multiple class="form-control custom-input shadow-none"></select>
                            </div>
                            <button type="submit" class="btn btn-custom mt-4" id="update-data">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
