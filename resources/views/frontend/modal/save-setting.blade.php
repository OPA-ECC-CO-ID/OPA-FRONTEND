<div class="modal modal-custom fade" id="saveSetting" tabindex="-1" aria-labelledby="saveSettingLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body d-flex flex-column justify-content-center align-items-center">
                <img src="{{ Vite::asset('resources/img/frontend/wait.svg') }}" alt="Gambar Anda"
                    style="max-width: 100%; max-height: 300px;">
                <h2>TUNGGU!</h2>
                <p>Apakah kamu yakin ingin <br>mengubah data ini?</p>
                <button type="button" class="btn btn-custom mb-2" id="btn-yakin" data-bs-dismiss="modal"
                    style="width: 199px">Ya, yakin</button>
                <button type="button" class="btn btn-outline-custom2" id="btn-tidak-yakin" data-bs-dismiss="modal"
                    style="width: 199px">Batalkan</button>
            </div>
        </div>
    </div>
</div>
