@extends('backend.layouts.user_type.auth')

@section('content')
    <div>
        <div class="container-fluid pb-4">
            <div class="card">
                <div class="card-header pb-0 px-3">
                    <h6 class="mb-0">Data Aspek Statement</h6>
                </div>
                <div class="card-body pt-4 p-3" id="interp-category" style="overflow-x:scroll;">

                    <table id="myTable" class="display text-xs" style="width: 100%">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Publish</th>
                                <th>Category</th>
                                <th>Aspect</th>
                                <th>Statement Name</th>
                                <th>Modified Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            @include('backend.careerReadiness.statement._modal_edit_tambah')
            @include('backend.careerReadiness.statement._modal_show')
        </div>
    </div>
@endsection
