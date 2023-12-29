@extends('backend.layouts.user_type.auth')

@section('content')
    <div>
        <div class="container-fluid pb-4">
            <div class="card">
                <div class="card-header pb-0 px-3">
                    <h6 class="mb-0">Data Diri Member</h6>
                </div>
                <div class="card-body pt-4 p-3" id="users" style="overflow-x:scroll;">

                    <table id="myTable" class="display text-xs" style="width: 100%">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Id Bio</th>
                                <th>Full Name</th>
                                <th>Gender</th>
                                <th>Job Title</th>
                                <th>Bio City</th>
                                <th>Creation Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    </table>

                </div>
            </div>

            @include('backend.profile.bio._modal_show')
        </div>
    </div>
@endsection
