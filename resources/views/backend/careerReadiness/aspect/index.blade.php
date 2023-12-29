@extends('backend.layouts.user_type.auth')

@section('content')
    <div>
        <div class="container-fluid pb-4">
            <div class="card">
                <div class="card-header pb-0 px-3">
                    <h6 class="mb-0">Data Aspek Kesiapan Karier</h6>
                </div>
                <div class="card-body pt-4 p-3" id="interp-category" style="overflow-x:scroll;">

                    {{-- Tambah Data --}}
                    <button type="button" class="btn bg-gradient-primary tombol-tambah">
                        Tambah Data
                    </button>
                    {{-- Akhir Tambah Data --}}

                    <table id="myTable" class="display text-xs" style="width: 100%">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Publish</th>
                                <th>Parent Id</th>
                                <th>Aspect Name</th>
                                <th>Aspect Desc</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            @include('backend.careerReadiness.aspect._modalEditTambah')
        </div>
    </div>

@endsection
