<div class="modal modal-custom fade" id="error500Modal" tabindex="-1" aria-labelledby="error500ModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body d-flex flex-column justify-content-center align-items-center">
                <img src="{{ Vite::asset('resources/img/frontend/error-500.svg') }}" alt="Gambar Anda"
                    style="max-width: 100%; max-height: 300px;">
                <h2>ERROR 500</h2>
                <p>Internal Server Error. 
                    <br>Coba beberapa saat lagi!</p>
                <button type="button" class="btn btn-custom" data-bs-dismiss="modal" id="btn-error500"
                    style="width: 199px">OK</button>
            </div>
        </div>
    </div>
</div>