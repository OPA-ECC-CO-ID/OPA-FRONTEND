<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
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
                        <th>Alias Code</th>
                        <td>
                            <div class="form-group">
                                <input class="form-control" type="text" id="alias_code" name="alias_code" required
                                    disabled>
                            </div>
                        </td>
                    </tr>
                    <tr class="border-bottom">
                        <th>Interpretasi</th>
                        <td>
                            <div id="interpretasi"></div>
                        </td>
                    </tr>
                    <tr class="border-bottom">
                        <th>Range Start</th>
                        <td>
                            <div class="form-group">
                                <input class="form-control" type="text" id="range_start" name="range_start" required>
                            </div>
                        </td>
                    </tr>
                    <tr class="border-bottom">
                        <th>Range End</th>
                        <td>
                            <div class="form-group">
                                <input class="form-control" type="text" id="range_end" name="range_end" required>
                            </div>
                        </td>
                    </tr>

                    <tr class="border-bottom">
                        <th>Tendency Work</th>
                        <td>
                            <div class="form-group">
                                <textarea class="form-control" name="tendency_work" id="tendency_work" rows="2" required></textarea>
                            </div>
                        </td>
                    </tr>
                    <tr class="border-bottom">
                        <th>Tendency Communication</th>
                        <td>
                            <div class="form-group">
                                <textarea class="form-control" name="tendency_communication" id="tendency_communication" rows="2" required></textarea>
                            </div>
                        </td>
                    </tr>
                    <tr class="border-bottom">
                        <th>Powers</th>
                        <td>
                            <div id="powers"></div>
                        </td>
                    </tr>
                    <tr class="border-bottom">
                        <th>Less</th>
                        <td>
                            <div id="less"></div>
                        </td>
                    </tr>
                    <tr class="border-bottom">
                        <th>Dev Advice</th>
                        <td>
                            <div id="dev_advice"></div>
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
