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
                    <div class="alert alert-danger alert-dismissible fade show d-none" role="alert" id="pesanError">
                        <span class="alert-text text-white" id="error-messages"></span>
                    </div>
                    {{-- Akhir error --}}
                    <div class="form-group">
                        <label for="max_time_per_page" class="form-control-label">Max Time Per Page</label>
                        <input class="form-control" type="number" id="max_time_per_page" name="max_time_per_page"
                            required>
                    </div>
                    <div class="form-group">
                        <label for="monthly_test_periode" class="form-control-label">Monthly Test Periode</label>
                        <input class="form-control" type="number" id="monthly_test_periode" name="monthly_test_periode"
                            required>
                    </div>
                    <div class="form-group">
                        <label for="min_score_of_variable" class="form-control-label">Min Score Of Variable</label>
                        <input class="form-control" type="number" id="min_score_of_variable"
                            name="min_score_of_variable" required>
                    </div>
                </div>
                <div class="modal-footer pb-0">
                    <button type="button" class="btn bg-gradient-secondary" data-bs-dismiss="modal"
                        id="tombol-close">Close</button>
                    <button type="button" class="btn bg-gradient-primary" id="tombol-simpan">Tambah
                        Data</button>
                </div>
            </div>
        </div>
    </div>
</div>
