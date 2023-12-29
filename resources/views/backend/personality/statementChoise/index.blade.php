    @extends('backend.layouts.user_type.auth')

    @section('content')
        <div>
            <div class="container-fluid pb-4">
                <div class="card">
                    <div class="card-header pb-0 px-3">
                        <h6 class="mb-3 section-title">Statement Choise</h6>
                        <div class="row">
                            <div class="col ">
                                <button type="button" class="btn bg-gradient-primary" id="btn-show-statement">Data Statement
                                    Choise</button>
                                <button type="button" class="btn" id="btn-show-trash-statement">Tong
                                    Sampah</button>
                            </div>
                            <div class="col  d-flex justify-content-end">
                                <button type="button" class="btn bg-gradient-primary tombol-tambah">
                                    Tambah Data
                                </button>
                            </div>
                        </div>

                    </div>
                    <div class="card-body pt-4 p-3" id="interp-category" style="overflow-x:scroll;">
                        <div id="data_statement_choise">

                            <table id="myTable" class="display text-xs" style="width: 100%">
                                <thead>
                                    <tr>
                                        <th>Id Choise</th>
                                        <th>Publish</th>
                                        <th>Page No</th>
                                        <th>Aspect</th>
                                        <th>Statement</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div id="data_trash_statment_choise" style="display: none">
                            <table id="myTrashTable" class="display text-xs" style="width: 100%">
                                <thead>
                                    <tr>
                                        <th>Id Choise</th>
                                        <th>Publish</th>
                                        <th>Page No</th>
                                        <th>Aspect</th>
                                        <th>Statement</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>

                    </div>
                </div>

                @include('backend.personality.statementChoise._modal_edit')
                @include('backend.personality.statementChoise._modal_show')
            </div>
        </div>
    @endsection
