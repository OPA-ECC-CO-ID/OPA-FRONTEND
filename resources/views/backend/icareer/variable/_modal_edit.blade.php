<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog  modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title font-weight-normal" id="modalJudul">Tambah Data</h5>
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
                        <th>Id Variable</th>
                        <td>
                            <div class="form-group">
                                <input class="form-control" type="text" id="id_variable" name="id_variable" required
                                    disabled>
                            </div>
                        </td>
                    </tr>
                    <tr class="border-bottom">
                        <th>Variable Name</th>
                        <td>
                            <div class="form-group">
                                <input class="form-control" type="text" id="variable_name" name="variable_name"
                                    required disabled>
                            </div>
                        </td>
                    </tr>
                    <tr class="border-bottom">
                        <th>Global Description</th>
                        <td>
                            <div class="form-group">
                                <textarea class="form-control" name="global_description" id="global_description" rows="4" required></textarea>
                            </div>
                        </td>
                    </tr>
                    <tr class="border-bottom">
                        <th>Desc</th>
                        <td>
                            <div id="desc"></div>
                        </td>
                    </tr>
                    <tr class="border-bottom">
                        <th>Ability</th>
                        <td>
                            <div class="form-group">
                                <input class="form-control" type="text" id="ability" name="ability" required>
                            </div>
                        </td>
                    </tr>

                    <tr class="border-bottom">
                        <th>Interest</th>
                        <td>
                            <div class="form-group">
                                <textarea class="form-control" name="interest" id="interest" rows="4" required></textarea>
                            </div>
                        </td>
                    </tr>
                    <tr class="border-bottom">
                        <th>Personality</th>
                        <td>
                            <div class="form-group">
                                <textarea class="form-control" name="personality" id="personality" rows="4" required></textarea>
                            </div>
                        </td>
                    </tr>
                    <tr class="border-bottom">
                        <th>Typical Activity</th>
                        <td>
                            <div class="form-group">
                                <textarea class="form-control" name="typical_activity" id="typical_activity" rows="4" required></textarea>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Interpretasi</th>
                        <td>
                            <div class="form-group">
                                <textarea class="form-control" name="interpretasi" id="interpretasi" rows="4" required></textarea>
                            </div>
                        </td>
                    </tr>
                </table>

                <div class="modal-footer">
                    <button type="button" class="btn bg-gradient-secondary" data-bs-dismiss="modal"
                        id="tombol-close">Close</button>
                    <button type="button" class="btn bg-gradient-primary" id="tombol-simpan">Tambah
                        Data</button>
                </div>
            </div>
        </div>
    </div>
</div>
