<div class="modal fade" id="tampilModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <table cellpadding="10" id="showTable">
                    <tr class="border-bottom">
                        <th> Alias Code </th>
                        <td>
                            <div id="alias_code_val"></div>
                        </td>
                    </tr>
                    <tr class="border-bottom">
                        <th>Interpretasi</th>
                        <td>
                            <div id="interpretasi_val"></div>
                        </td>
                    </tr>
                    <tr class="border-bottom">
                        <th>Range Start</th>
                        <td>
                            <div id="range_start_val"></div>
                        </td>
                    </tr>
                    <tr class="border-bottom">
                        <th>Range End</th>
                        <td>
                            <div id="range_end_val"></div>
                        </td>
                    </tr>
                    <tr class="border-bottom">
                        <th>Powers</th>
                        <td>
                            <div id="powers_val"></div>
                        </td>
                    </tr>
                    <tr class="border-bottom">
                        <th>Less</th>
                        <td>
                            <div id="less_val"></div>
                        </td>
                    </tr>
                    <tr class="border-bottom">
                        <th>Dev Advice</th>
                        <td>
                            <div id="dev_advice_val"></div>
                        </td>
                    </tr>
                    <tr class="border-bottom">
                        <th>Psychological Dynamics</th>
                        <td>
                            <div id="psychological_dynamics_val"></div>
                        </td>
                    </tr>
                    <tr>
                        <th>Publish</th>
                        <td>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="publish_val"
                                    checked="" disabled>
                            </div>
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
