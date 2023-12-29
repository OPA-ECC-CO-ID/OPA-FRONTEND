<div class="modal modal-custom fade" id="successModal" tabindex="-1" aria-labelledby="successModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body d-flex flex-column justify-content-center align-items-center">
                <img src="{{ Vite::asset('resources/img/frontend/succes.svg') }}" alt="Gambar Anda"
                    style="max-width: 100%; max-height: 300px;">
                <h2>SELAMAT!</h2>
                <p>Kamu berhasil menyelesaikan semua<br>
                    soal asesmen.</p>
                <button type="button" class="btn btn-custom" id="btn-lihat-hasil" data-bs-dismiss="modal"
                    style="width: 199px">Lihat
                    Hasil</button>
            </div>
        </div>
    </div>
</div>