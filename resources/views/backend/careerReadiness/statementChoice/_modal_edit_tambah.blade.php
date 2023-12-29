<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title font-weight-normal" id="modalJudul">Edit Data</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                {{-- error --}}
                <div class="alert alert-danger alert-dismissible fade show d-none" role="alert" id="pesanError">
                    <span class="alert-text text-white" id="error-messages"></span>
                </div>
                {{-- Akhir error --}}
                <table cellpadding="10" width="100%" class="tabel-form-input">
                    <tr class="border-bottom">
                        <th>Kategori</th>
                        <td>
                            <div class="form-group">
                                <input class="form-control" type="text" id="category" name="category" required>
                            </div>
                        </td>
                    </tr>
                    <tr class="border-bottom">
                        <th>Order No</th>
                        <td>
                            <div class="form-group">
                                <input class="form-control" type="text" id="order_no" name="order_no" required>
                            </div>
                        </td>
                    </tr>
                    <tr class="border-bottom">
                        <th>Choice Name</th>
                        <td>
                            <div class="form-group">
                                <input class="form-control" type="text" id="choice_name" name="choice_name" required>
                            </div>
                        </td>
                    </tr>
                    <tr class="border-bottom">
                        <th>Score</th>
                        <td>
                            <div class="form-group">
                                <input class="form-control" type="text" id="score" name="score" required>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Publish</th>
                        <td>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="publish"
                                    checked="" name="publish">
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="modal-footer pb-0">
                <button type="button" class="btn bg-gradient-secondary" data-bs-dismiss="modal"
                    id="tombol-close">Close</button>
                <button type="button" class="btn bg-gradient-primary" id="tombol-simpan">Edit Data</button>
            </div>
        </div>
    </div>
</div>
