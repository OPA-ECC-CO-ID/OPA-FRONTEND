<div class="modal modal-custom fade" id="verifikasiModal" tabindex="-1" aria-labelledby="verifikasiModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body d-flex flex-column justify-content-center align-items-center">
                <img src="{{ Vite::asset('resources/img/frontend/email-verify.svg')}}" alt="Gambar Anda"
                    style="max-width: 100%; max-height: 300px;">
                <h2>EMAIL TERKIRIM!</h2>
                <p>Klik tautan yang kami kirimkan pada emailmu untuk mengubah kata sandi!</p>
                <button type="button" class="btn btn-custom" data-bs-dismiss="modal" id="btn-verifikasi"
                    style="width: 199px">OK</button>
            </div>
        </div>
    </div>
</div>
