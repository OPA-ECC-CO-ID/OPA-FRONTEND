@extends('backend.layouts.user_type.auth')

@section('content')
    <div>
        <div class="container-fluid py-4">
            <div class="card">
                <div class="card-header pb-0 px-3">
                    <h6 class="mb-0">Gaya Kepribadian - Pengaturan</h6>
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
                                    <label for="periode_test_monthly" class="form-control-label">Periode Test
                                        Monthly</label>
                                    <input class="form-control" type="number" id="periode_test_monthly"
                                        name="periode_test_monthly">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="maxtime_per_page" class="form-control-label">Maxtime Per Page</label>
                                    <input class="form-control" type="number" id="maxtime_per_page"
                                        name="maxtime_per_page">
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
