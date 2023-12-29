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
                        <label for="id_aspect" class="form-control-label">id_aspect</label>
                        <input class="form-control" type="number" id="id_aspect" name="id_aspect" required>
                    </div>
                    <div class="form-group">
                        <label for="publish" class="form-control-label">publish</label>
                        <input class="form-control" type="text" id="publish" name="publish" required>
                    </div>
                    <div class="form-group">
                        <label for="parent_id" class="form-control-label">parent_id</label>
                        <input class="form-control" type="text" id="parent_id" name="parent_id" required>
                    </div>
                    <div class="form-group">
                        <label for="aspect_name" class="form-control-label">aspect_name</label>
                        <input class="form-control" type="text" id="aspect_name" name="aspect_name" required>
                    </div>
                    <div class="form-group">
                        <label for="aspect_desc" class="form-control-label">aspect_desc</label>
                        <input class="form-control" type="text" id="aspect_desc" name="aspect_desc" required>
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
