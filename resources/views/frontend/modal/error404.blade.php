<div class="modal modal-custom fade" id="error404Modal" tabindex="-1" aria-labelledby="error404ModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body d-flex flex-column justify-content-center align-items-center">
                <img src="{{ Vite::asset('resources/img/frontend/timeout.svg') }}" alt="Gambar Anda"
                    style="max-width: 100%; max-height: 300px;">
                <h2>ERROR 404</h2>
                <p>Terdapat kesalahan dalam mengakses website. Mohon coba lagi nanti.</p>
                <button type="button" class="btn btn-custom" data-bs-dismiss="modal" id="btn-error404"
                    style="width: 199px">OK</button>
            </div>
        </div>
    </div>
</div>