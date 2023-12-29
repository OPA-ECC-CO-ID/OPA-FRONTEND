<div class="modal modal-custom fade" id="waitModal" tabindex="-1" aria-labelledby="waitModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body d-flex flex-column justify-content-center align-items-center">
                <img src="{{ Vite::asset('resources/img/frontend/wait.svg') }}" alt="Gambar Anda"
                    style="max-width: 100%; max-height: 300px;">
                <h2>TUNGGU!</h2>
                <p>Kamu yakin ingin keluar? Jawabanmu mungkin saya tidak tersimpan.</p>
                <button type="button" class="btn btn-custom mb-2" id="btn-wait-tidak" data-bs-dismiss="modal"
                    style="width: 199px">TIDAK</button>
                <button type="button" class="btn btn-outline-custom2" id="btn-wait-keluar" data-bs-dismiss="modal"
                    style="width: 199px">KELUAR</button>
            </div>
        </div>
    </div>
</div>