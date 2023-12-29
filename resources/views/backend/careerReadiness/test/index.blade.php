@extends('backend.layouts.user_type.auth')

@section('content')
    <div>
        <div class="container-fluid pb-4">
            <div class="card">
                <div class="card-header pb-0 px-3">
                    <h6 class="mb-0">Data Aspek Kesiapan Karier</h6>
                </div>
                <div class="card-body pt-4 p-3" id="interp-category" style="overflow-x:scroll;">

                    <table id="myTable" class="display text-xs" style="width: 100%">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Publish</th>
                                <th>User Id</th>
                                <th>Start Date</th>
                                <th>Finish Date</th>
                                <th>Next Test Date</th>
                                <th>Interp General Id</th>
                                <th>Interp General Score</th>
                                <th>Evaluation Grade</th>
                                <th>Evaluation Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            @include('backend.careerReadiness.test._modal_show')
        </div>
    </div>
@endsection
