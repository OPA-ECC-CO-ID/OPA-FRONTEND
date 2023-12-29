<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title font-weight-normal" id="modalJudul">Tambah Data</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    {{-- error --}}

                    {{-- <div id="error-messages" class="text-danger"></div> --}}
                    <div class="alert alert-danger alert-dismissible fade show d-none" role="alert" id="pesanError">
                        <span class="alert-text text-white" id="error-messages"></span>
                    </div>
                    {{-- ahir eror --}}
                    <div class="form-group">
                        <label for="id" class="form-control-label">id</label>
                        <input class="form-control" type="number" id="id" name="id" required>
                    </div>
                    <div class="form-group">
                        <label for="period_test_diff_type" class="form-control-label">period_test_diff_type</label>
                        <input class="form-control" type="text" id="period_test_diff_type" name="period_test_diff_type" required>
                    </div>
                    <div class="form-group">
                        <label for="period_test_difference" class="form-control-label">period_test_difference</label>
                        <input class="form-control" type="text" id="period_test_difference" name="period_test_difference" required>
                    </div>
                    <div class="form-group">
                        <label for="statement_scale" class="form-control-label">statement_scale</label>
                        <input class="form-control" type="text" id="statement_scale" name="statement_scale" required>
                    </div>
                    <div class="form-group">
                        <label for="page_size_statements" class="form-control-label">page_size_statements</label>
                        <input class="form-control" type="text" id="page_size_statements" name="page_size_statements" required>
                    </div>
                    <div class="form-group">
                        <label for="timer_per_page" class="form-control-label">timer_per_page</label>
                        <input class="form-control" type="text" id="timer_per_page" name="timer_per_page" required>
                    </div>
                    <div class="form-group">
                        <label for="copyright" class="form-control-label">copyright</label>
                        <input class="form-control" type="text" id="copyright" name="copyright" required>
                    </div>

                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn bg-gradient-secondary" data-bs-dismiss="modal"
                    id="tombol-close">Close</button>
                <button type="button" class="btn bg-gradient-primary" id="tombol-simpan">Tambah Data</button>
            </div>
        </div>
    </div>
</div>
