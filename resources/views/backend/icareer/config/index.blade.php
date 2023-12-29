@extends('backend.layouts.user_type.auth')

@section('content')
    <div>
        <div class="container-fluid py-4">
            <div class="card">
                <div class="card-header pb-0 px-3">
                    <h6 class="mb-0">Pengaturan Asesmen</h6>
                </div>
                <div class="card-body pt-4 p-3">
                    <div class="form-group">
                        {{-- awal error --}}
                        <div class="alert alert-danger alert-dismissible fade show d-none" role="alert" id="pesanError">
                            <span class="alert-text text-white" id="error-messages"></span>
                        </div>
                        {{-- Akhir error --}}
                    </div>
                    <div class="personality-form">
                        <div class="row ">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="max_time_per_page" class="form-control-label">Max Time Per Page</label>
                                    <input class="form-control" type="number" id="max_time_per_page"
                                        name="max_time_per_page">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="monthly_test_periode" class="form-control-label">Monthly Test
                                        Periode</label>
                                    <input class="form-control" type="number" id="monthly_test_periode"
                                        name="monthly_test_periode">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="min_score_of_variable" class="form-control-label">Min Score Of
                                        Variable</label>
                                    <input class="form-control" type="number" id="min_score_of_variable"
                                        name="min_score_of_variable">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="max_variable_to_be_career_spesific" class="form-control-label">Max variable
                                        to be career spesific</label>
                                    <input class="form-control" type="number" id="max_variable_to_be_career_spesific"
                                        name="max_variable_to_be_career_spesific">
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="btn bg-gradient-warning btn-md mt-2 mb-4 tombol-submit">Submit
                            Data</button>
                        <button type="button" class="btn bg-gradient-dark btn-md mt-2 mb-4 tombol-edit">Edit Data</button>
                        <button type="button" class="btn bg-gradient-dark btn-md mt-2 mb-4 tombol-close">Close
                            Data</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
