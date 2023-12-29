@extends('backend.layouts.user_type.auth')

@section('content')
    <div>
        <div class="container-fluid pb-4">
            <div class="card">
                <div class="card-header pb-0 px-3">
                    <h6 class="mb-0">Pengaturan Complete Report</h6>
                </div>
                <div class="card-body pt-4 p-3" id="interp-category" style="overflow-x:scroll;">

                    <table cellpadding="10" width="100%" class="tabel-form-input">
                        <tr class="border-bottom">
                            <th>Description</th>
                            <td>
                                <div id="description"></div>
                            </td>
                        </tr>
                        <tr class="border-bottom">
                            <th>Report Detail</th>
                            <td>
                                <div id="report_detail"></div>
                            </td>
                        </tr>
                        <tr class="border-bottom">
                            <th>Price All Item</th>
                            <td>
                                <div class="form-group">
                                    <input class="form-control" type="text" id="price_all_item" name="price_all_item"
                                        required>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-bottom">
                            <th>Enable Discount</th>
                            <td>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="enable_discount"
                                        checked="" name="enable_discount">
                                </div>
                            </td>
                        </tr>
                        <tr class="border-bottom">
                            <th>Discount Value</th>
                            <td>
                                <div class="form-group">
                                    <input class="form-control" type="text" id="discount_value" name="discount_value" required>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-bottom">
                            <th>Discount Date Start</th>
                            <td>
                                <div class="form-group">
                                    <input class="form-control" type="text" id="discount_date_start" name="discount_date_start" required>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-bottom">
                            <th>Discount Date End</th>
                            <td>
                                <div class="form-group">
                                    <input class="form-control" type="text" id="discount_date_end" name="discount_date_end" required>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-bottom">
                            <th>Discount Name</th>
                            <td>
                                <div class="form-group">
                                    <input class="form-control" type="text" id="discount_name" name="discount_name" required>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-bottom">
                            <th>Discount Description</th>
                            <td>
                                <div class="form-group">
                                    <input class="form-control" type="text" id="discount_desc" name="discount_desc" required>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-bottom">
                            <th>Notif Admin Every Order</th>
                            <td>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="notif_admin_every_order"
                                        checked="" name="notif_admin_every_order">
                                </div>
                            </td>
                        </tr>
                        <tr class="border-bottom">
                            <th>Notif Email Address</th>
                            <td>
                                <div class="form-group">
                                    <input class="form-control" type="text" id="notif_email_address" name="notif_email_address" required>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-bottom">
                            <th>Notif Email Content</th>
                            <td>
                                <div class="form-group">
                                    <input class="form-control" type="text" id="notif_email_content" name="notif_email_content" required>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <button type="submit" class="btn bg-gradient-warning btn-md mt-2 mb-4 tombol-submit">Submit
                        Data</button>
                </div>
            </div>
        </div>
    </div>
@endsection
