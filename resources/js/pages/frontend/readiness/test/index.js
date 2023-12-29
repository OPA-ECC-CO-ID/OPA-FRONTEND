import "@/pages/frontend/app-frontend";
import { errorAPI } from "../../utils/error";

$(document).ready(function () {
    // CEK BROWSER MENDUKUNG WEB STORAGE ?
    if (typeof Storage !== "undefined") {
        // CEK APAKAH ADA TES AKTIF
        if (localStorage.getItem("CAREER_READINESS_TEST_ID") === null) {
            window.location.href = APP_URL + "/careerreadiness";
        }

        let pageNo = "PAGE_NO_READINESS";
        if (localStorage.getItem(pageNo) === null) {
            localStorage.setItem(pageNo, 1);
        }
        let radioData = [];
        let max_page;
        let modal_time_show = true;

        //# COUNTDOWN
        const countdownText = document.querySelector(".countdown-text");
        const progressBar = document.querySelector(".progress-test");
        const countdownTime = localStorage.getItem("MAX_TIME_READINESS") || 30;
        let timeLeft = localStorage.getItem("timeLeft") || countdownTime;
        let storedWidth = localStorage.getItem("progressWidth") || 0; // Ambil lebar progressBar dari localStorage
        let currentWidth = parseFloat(storedWidth); // Konversi ke tipe float
        const increment = 100 / countdownTime;
        let intervalId;

        function startCountdown() {
            timeLeft = localStorage.getItem("timeLeft") || countdownTime;
            let storedWidth = localStorage.getItem("progressWidth") || 0;
            currentWidth = parseFloat(storedWidth); // Konversi ke tipe float
            clearInterval(intervalId);
            updateCountdown();
        }

        function updateCountdown() {
            currentWidth += increment;
            let sisawaktu = timeLeft.toString().padStart(2, "0");
            countdownText.textContent = sisawaktu;
            progressBar.style.width = `${currentWidth}%`;
            localStorage.setItem("progressWidth", currentWidth); // Simpan lebar progressBar ke localStorage

            if (timeLeft > 0) {
                timeLeft--;
                localStorage.setItem("timeLeft", timeLeft); // Simpan sisa waktu ke localStorage
                intervalId = setTimeout(updateCountdown, 1000);
            } else {
                localStorage.removeItem("timeLeft"); // Hapus data dari localStorage saat waktu habis
                localStorage.removeItem("progressWidth"); // Hapus data progressBar dari localStorage saat waktu habis
                showTimeUpModal();
            }
        }

        // TIME UP MODAL
        function showTimeUpModal() {
            const timeUpModal = new bootstrap.Modal(
                document.getElementById("timeUpModal"),
                {}
            );
            if (modal_time_show == true) {
                timeUpModal.show();
            }
        }
        // #AKHIR COUNTDOWN

        // HANDLE TAMPIL DATA
        function LoadStatement(pageNo) {
            $.ajax({
                url:
                    API_URL +
                    "/api/v1/career-readiness/statement-choice-combine?page=" +
                    pageNo,
                type: "GET",
                timeout: 5000,
                contentType: "application/json",
                success: function (response) {
                    $("#data-career-readiness").html("");

                    // Loop Data Career Readiness
                    response.data.data.forEach(function (statement, no) {
                        // console.log(statement);
                        var statementHTML = `
                <div class="row">
                    <div class="col-lg-6">
                        <div class="text-question-readiness">
                            <p id="">${statement.statement}</p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="option-group readiness d-flex">`;

                        // Loop to create radio button options
                        statement.arr_choice.forEach(function (choice, index) {
                            statementHTML += `
                            <div class="form-check form-check-inline d-flex flex-column">
                                <input class="form-check-input" type="radio" name="option${
                                    no + 1
                                }-readiness" value="${
                                choice.id
                            }" data-statement-id="${statement.id_statement}">
                                <label class="form-check-label">
                                    <br>${choice.choice}
                                </label>
                            </div>`;
                        });

                        statementHTML += `
                        </div>
                    </div>
                    <hr class="hr-test mx-auto">
                </div>`;

                        $("#data-career-readiness").append(statementHTML);
                    });

                    // Bersihkan data di localStorage
                    radioData = [];
                    max_page = response.data.pagination.last_page;
                    $("#next-button").prop("disabled", true);
                    $("#page-test-link").text("Halaman " + pageNo);

                    // TAMPILKAN DATA INPUT DARI LOCAL STORAGE
                    displayStoredCheckboxData();
                },
                error: function (xhr, status, error) {
                   errorAPI(xhr,status,error)
                },
            });
        }

        // JAWABAN TES DI STORAGE
        function displayStoredCheckboxData() {
            let storedRadioData = localStorage.getItem("radioData");
            if (storedRadioData !== null) {
                radioData = JSON.parse(storedRadioData);

                radioData.forEach(function (data) {
                    let radioInput = $(
                        `input[name='${data.name}'][data-statement-id='${data.statementId}'][value='${data.value}']`
                    );
                    if (radioInput.length > 0) {
                        radioInput.prop("checked", true);
                    }
                });
            }

            if (radioData.length == 5) {
                $("#next-button").prop("disabled", false);
            }
        }

        //# HANDLE SIMPAN DATA INPUT
        $("body").on("click", 'input[type="radio"]', function () {
            var radioValue = $(this).val();
            var radioName = $(this).attr("name");
            var statementId = $(this).attr("data-statement-id");

            var existingData = radioData.find(
                (item) => item.name === radioName
            );

            if (existingData) {
                existingData.value = radioValue;
                existingData.statementId = statementId; // Tambahkan statementId jika sudah ada data yang sesuai
            } else {
                //radioData  = menyimpan data checkbox yg di click
                radioData.push({
                    name: radioName,
                    statementId: statementId,
                    value: radioValue,
                });
            }

            // SIMPAN DATA KE LOCAL STORAGE
            localStorage.setItem("radioData", JSON.stringify(radioData));

            // // SIMPAN KE API
            let data = {
                test_id: localStorage.getItem("CAREER_READINESS_TEST_ID"),
                statement_id: statementId,
                choice_id: radioValue,
            };
            $.ajax({
                url: API_URL + "/api/v1/career-readiness/test-input",
                type: "POST",
                timeout: 5000,
                data: JSON.stringify(data),
                contentType: "application/json",
                success: function (response) {},
                error: function (xhr, status, error) {
                   errorAPI(xhr,status,error)
                },
            });

            if (radioData.length == 5) {
                $("#next-button").prop("disabled", false);
            }
        });

        // HANDLE BUTTON NEXT
        $("#next-button").on("click", function () {
            if (localStorage.getItem("PAGE_NO_READINESS") == max_page) {
                const successModal = new bootstrap.Modal(
                    document.getElementById("successModal"),
                    {}
                );
                modal_time_show = false;
                successModal.show();
            } else {
                let count = localStorage.getItem(pageNo);
                count++;
                LoadStatement(count);
                localStorage.setItem(pageNo, count);
                localStorage.removeItem("radioData");

                // Mulai kembali countdown dari awal
                timeLeft = countdownTime;
                localStorage.setItem("timeLeft", timeLeft); // Set ulang sisa waktu ke nilai awal
                currentWidth = 0;
                localStorage.setItem("progressWidth", currentWidth); // Set ulang lebar progressBar ke nilai awal
                startCountdown();
            }
        });

        // HANDLE CLOSE MODAL
        let timeUpModal = document.getElementById("timeUpModal");
        timeUpModal.addEventListener("hidden.bs.modal", function (event) {
            startCountdown();
        });
        let successModal = document.getElementById("successModal");
        successModal.addEventListener("hidden.bs.modal", function (event) {
            startCountdown();
            modal_time_show = true;
        });

        // # HANDLE BTN TES SELESAI
        $("body").on("click", "#btn-lihat-hasil", function (e) {
            e.preventDefault();
            let testId = localStorage.getItem("CAREER_READINESS_TEST_ID");

            // HANDLE SIMPAN SCORE
            $.ajax({
                url: API_URL + "/api/v1/career-readiness/save-score/" + testId,
                type: "PUT",
                timeout: 5000,
                success: function (response) {
                    // hapus data di local storage
                    localStorage.removeItem("timeLeft");
                    localStorage.removeItem("progressWidth");
                    localStorage.removeItem("PAGE_NO_READINESS");
                    localStorage.removeItem("radioData");
                    localStorage.removeItem("MAX_TIME_READINESS");
                    localStorage.removeItem("CAREER_READINESS_TEST_ID");

                    // pindah halaman
                    window.location.href = APP_URL + "/assesment";
                },
                error: function (xhr, status, error) {
                   errorAPI(xhr,status,error)
                },
            });
        });

        // Load Data
        LoadStatement(localStorage.getItem(pageNo));
        startCountdown();
    } else {
        alert("Browser yang Anda gunakan tidak mendukung Web Storage");
    }
});
