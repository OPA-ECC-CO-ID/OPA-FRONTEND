@extends('backend.layouts.user_type.auth')

@section('content')
    <div>
        <div class="container-fluid pb-4">
            <div class="card">
                <div class="card-header pb-0 px-3">
                    <h6 class="mb-3 section-title">User Order</h6>
                    <div class="row">
                        <div class="col ">
                            <button type="button" class="btn bg-gradient-primary" id="btn-show-user-order">Data User
                                Order</button>
                            <button type="button" class="btn" id="btn-show-trash-user-order">Tong
                                Sampah</button>
                        </div>
                    </div>

                </div>
                <div class="card-body pt-4 p-3" style="overflow-x:scroll;">
                    <div id="data-show-user-order">
                        <table id="myTable" class="display text-xs" style="width: 100%">
                            <thead>
                                <tr>
                                    <th>User ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Is All Item</th>
                                    <th>Amount Paid</th>
                                    <th>Payment Status</th>
                                    <th>Payment Code</th>
                                    <th>Payment Date</th>
                                    <th>Creation Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div id="data-show-trash-user-order" style="display: none">
                        <table id="myTrashTable" class="display text-xs" style="width: 100%">
                            <thead>
                                <tr>
                                    <th>User ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Is All Item</th>
                                    <th>Amount Paid</th>
                                    <th>Payment Status</th>
                                    <th>Payment Code</th>
                                    <th>Payment Date</th>
                                    <th>Creation Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                        </table>
                    </div>

                </div>
            </div>

            @include('backend.completeReport.userOrder._modal_show')
        </div>
    </div>
@endsection
