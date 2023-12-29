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
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="period_test_diff_type" class="form-control-label">Period Test Diff Type</label>
                                <input class="form-control" type="number" id="period_test_diff_type"
                                    name="period_test_diff_type">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="period_test_difference" class="form-control-label">Period Test Difference</label>
                                <input class="form-control" type="number" id="period_test_difference"
                                    name="period_test_difference">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="statement_scale" class="form-control-label">Statement Scale</label>
                                <input class="form-control" type="text" id="statement_scale"
                                    name="statement_scale">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="page_size_statements" class="form-control-label">Page Size Statements</label>
                                <input class="form-control" type="number" id="page_size_statements"
                                    name="page_size_statements">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="timer_per_page" class="form-control-label">Timer Per Page</label>
                                <input class="form-control" type="number" id="timer_per_page"
                                    name="timer_per_page">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="copyright" class="form-control-label">Copyright</label>
                                <input class="form-control" type="text" id="copyright"
                                    name="copyright">
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
