@extends('backend.layouts.user_type.auth')

@section('content')
    <div>
        <div class="container-fluid pb-4">
            <div class="card">
                <div class="card-header pb-0 px-3">
                    <h6 class="mb-0">Data Member</h6>
                    <div class="row">
                        <div class="col ">
                            <button type="button" class="btn bg-gradient-primary" id="btn-show-users">Data Member</button>
                            <button type="button" class="btn" id="btn-show-trash-users">Tong Sampah</button>
                        </div>
                        <div class="col  d-flex justify-content-end">
                            <button type="button" class="btn bg-gradient-primary tombol-tambah">
                                Tambah Data
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card-body pt-4 p-3" id="users" style="overflow-x:scroll;">
                    <div id="data_users">
                        <table id="myTable" class="display text-xs" style="width: 100%">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Created At</th>
                                    <th>Updated At</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div id="data_trash_users" style="display: none">
                        <table id="myTrashTable" class="display text-xs" style="width: 100%">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Created At</th>
                                    <th>Updated At</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>

            @include('backend.profile.users._modal_edit_tambah')
            @include('backend.profile.users._modal_show')
        </div>
    </div>
@endsection
