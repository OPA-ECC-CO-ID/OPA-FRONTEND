    @extends('backend.layouts.user_type.auth')

    @section('content')
        <div>
            <div class="container-fluid pb-4">
                <div class="card">
                    <div class="card-header pb-0 px-3">
                        <h6 class="mb-0">Interpretasi Dasar</h6>
                    </div>
                    <div class="card-body pt-4 p-3" id="interp-category" style="overflow-x:scroll;">

                        <table id="myTable" class="display text-xs" style="width: 100%">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Alias Code</th>
                                    <th>Interpretasi</th>
                                    <th>Range Start</th>
                                    <th>Range End</th>
                                    <th>Publish</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                        </table>

                    </div>
                </div>

                @include('backend.personality.interp._modal_show')
                @include('backend.personality.interp._modal_edit')
            </div>
        </div>
    @endsection
