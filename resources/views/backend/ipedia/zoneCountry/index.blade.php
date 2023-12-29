    @extends('backend.layouts.user_type.auth')

    @section('content')
        <div>
            <div class="container-fluid pb-4">
                <div class="card">
                    <div class="card-header pb-0 px-3">
                        <h6 class="mb-3 section-title">Data Negara</h6>
                        <div class="row">
                            <div class="col ">
                                <button type="button" class="btn bg-gradient-primary" id="btn-show-country">Data
                                    Negara</button>
                                <button type="button" class="btn" id="btn-show-trash-country">Tong
                                    Sampah</button>
                            </div>
                            <div class="col  d-flex justify-content-end">
                                <button type="button" class="btn bg-gradient-primary tombol-tambah">
                                    Tambah Data
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card-body pt-4 p-3" style="overflow-x:scroll;">
                        <div id="data_country">
                            <table id="myTable" class="display text-xs" style="width: 100%">
                                <thead>
                                    <tr>
                                        <th>Id Country</th>
                                        <th>Publish</th>
                                        <th>Country Code</th>
                                        <th>Country Name</th>
                                        <th>Creation Date</th>
                                        <th>Creation Id</th>
                                        <th>Modified Date</th>
                                        <th>Modified Id</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div id="data_trash_country" style="display: none">
                            <table id="myTrashTable" class="display text-xs" style="width: 100%">
                                <thead>
                                    <tr>
                                        <th>Id Country</th>
                                        <th>Publish</th>
                                        <th>Country Code</th>
                                        <th>Country Name</th>
                                        <th>Creation Date</th>
                                        <th>Creation Id</th>
                                        <th>Modified Date</th>
                                        <th>Modified Id</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>

                @include('backend.ipedia.zoneCountry._modal_edit_tambah')

            </div>
        </div>
    @endsection
