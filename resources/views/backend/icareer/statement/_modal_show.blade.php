<div class="modal fade" id="showModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <table cellpadding="10" class="table-show-data" width="100%">
                    <tr class="border-bottom">
                        <th>Publish</th>
                        <td>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="publish_val"
                                    checked="" disabled>
                            </div>
                        </td>
                    </tr>
                    <tr class="border-bottom">
                        <th>Page</th>
                        <td>
                            <div id="page_val"></div>
                        </td>
                    </tr>
                    <tr class="border-bottom">
                        <th>Order Number</th>
                        <td>
                            <div id="order_number_val"></div>
                        </td>
                    </tr>
                    <tr class="border-bottom">
                        <th>Variable Id</th>
                        <td>
                            <div id="variable_id_val"></div>
                        </td>
                    </tr>
                    <tr class="border-bottom">
                        <th>Statement</th>
                        <td>
                            <div id="statement_val"></div>
                        </td>
                    </tr>

                    <tr class="border-bottom">
                        <th>Creation Id</th>
                        <td>
                            <div id="creation_id_val"></div>
                        </td>
                    </tr>
                    <tr class="border-bottom">
                        <th>Creation Date</th>
                        <td>
                            <div id="creation_date_val"></div>
                        </td>
                    </tr>
                    <tr class="border-bottom">
                        <th>Modified Id</th>
                        <td>
                            <div id="modified_id_val"></div>
                        </td>
                    </tr>
                    <tr>
                        <th>Modified Date</th>
                        <td>
                            <div id="modified_date_val"></div>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="modal-footer pb-0">
                <button type="button" class="btn bg-gradient-dark" data-bs-dismiss="modal"
                    id="tombol-close">Close</button>
            </div>
        </div>
    </div>
</div>
