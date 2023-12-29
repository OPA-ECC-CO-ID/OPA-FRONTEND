<div class="modal modal-custom fade" id="timeUpModal" tabindex="-1" aria-labelledby="timeUpModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body d-flex flex-column justify-content-center align-items-center">
                <img src="{{ Vite::asset('resources/img/frontend/timeout.svg') }}" alt="Gambar Anda"
                    style="max-width: 100%; max-height: 300px;">
                <h2>WAKTU HABIS!</h2>
                <p>Waktu pengerjaanmu sudah habis. <br>Klik ‘Ok’ untuk mengerjakan soal <br>sebelumnya!</p>
                <button type="button" class="btn btn-custom" data-bs-dismiss="modal" id="btn-ulangi-soal"
                            style="width: 199px">OK</button>
            </div>
        </div>
    </div>
</div>