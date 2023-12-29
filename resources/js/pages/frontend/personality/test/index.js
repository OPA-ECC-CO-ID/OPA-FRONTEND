import "@/pages/frontend/app-frontend";
import { errorAPI } from "../../utils/error";

// AJAX
$(document).ready(function () {
    // CEK BROWSER MENDUKUNG WEB STORAGE ?
    if (typeof Storage !== "undefined") {
        // CEK TES AKTIF

        if (localStorage.getItem("PERSONALITY_TEST_ID") === null) {
            window.location.href = APP_URL + "/personality";
        }

        let pageNo = "PAGE_NO_PERSONALITY";
        if (localStorage.getItem(pageNo) === null) {
            localStorage.setItem(pageNo, 1);
        }
        let max_page = 25;
        let modal_time_show = true;
        let timer;
        let max_time_per_page =
            localStorage.getItem("MAX_TIME_PERSONALITY") || 20;

        // # TAMPIL DATA STATEMENT CHOICE
        function LoadStatementChoice(page_no = 1) {
            $.ajax({
                url:
                    API_URL +
                    "/api/v1/personality/statement-choice/member?page_no=" +
                    page_no,
                type: "GET",
                timeout: 5000,
                contentType: "application/json",
                success: function (response) {
                    // Bersihkan data tes
                    $(".container-personality-options").html("");

                    // Loop Data Statement
                    response.data.data.forEach(function (option, index) {
                        // Create a new radio button and label for each option
                        var optionElement = $(
                            '<span class="personality-option">' +
                                '<input type="radio" id="option-' +
                                option.id_choice +
                                '" name="option" class="radio" value="' +
                                option.id_choice +
                                '" />' +
                                '<label for="option-' +
                                option.id_choice +
                                '" class="option" id="' +
                                option.id_choice +
                                '-label">' +
                                '<i class="bi bi-circle-fill"></i>' +
                                option.statement +
                                "</label></span>"
                        );
                        // Append the option to the container
                        $(".container-personality-options").append(
                            optionElement
                        );
                    });

                    // Set Max Page
                    max_page = response.data.max_page;

                    // Update Nomer Halaman
                    $("#question-number").text(
                        " " + response.data.data[0].page_no + " / " + max_page
                    );

                    // Load Data Timer
                    timerTest(max_time_per_page);

                    // Memuat data input dari local storage jika ada
                    if (localStorage.getItem("userChoice") !== null) {
                        const selectedChoice =
                            localStorage.getItem("userChoice");
                        $(`#option-${selectedChoice}`).prop("checked", true);
                    }
                },
                error: function (xhr, status, error) {
                  errorAPI(xhr,status,error)
                },
            });
        }

        // # TIMER TEST
        function timerTest(initialTime) {
            const countdownPersonality = document.querySelector(
                ".countdown-text-personality"
            );
            const progressBarPersonality = document.querySelector(
                ".progress-personality"
            );
            const timeUpModal = new bootstrap.Modal(
                document.getElementById("timeUpModal")
            );

            let timeLeft = initialTime;

            const interval = 1000;

            function updateCountdownAndProgressBar() {
                countdownPersonality.textContent = timeLeft;
                const progressWidth =
                    ((initialTime - timeLeft) / initialTime) * 100;
                progressBarPersonality.style.width = `${progressWidth}%`;

                if (timeLeft === 0) {
                    clearInterval(timer);
                    if (modal_time_show == true) {
                        timeUpModal.show();
                    }
                } else {
                    timeLeft--;
                }
            }

            // Hentikan timer jika sedang berjalan
            if (timer) {
                clearInterval(timer);
            }

            updateCountdownAndProgressBar();
            timer = setInterval(updateCountdownAndProgressBar, interval);
        }

        // # AMBIL JAWABAN TEST
        $("body").on("click", ".option", function () {
            var labelId = $(this).attr("for");

            // Menggunakan id label untuk mencari input yang sesuai
            var inputValue = $("input[id='" + labelId + "']").val();

            // SIMPAN DATA DENGAN AJAX
            let data = {
                test_id: localStorage.getItem("PERSONALITY_TEST_ID"),
                choice_id: inputValue,
            };

            // Simpan pilihan pengguna ke local storage
            localStorage.setItem("userChoice", inputValue);

            $.ajax({
                url: API_URL + "/api/v1/personality/user-input",
                type: "POST",
                data: JSON.stringify(data),
                contentType: "application/json",
                timeout: 5000,
                success: function (response) {
                    if (localStorage.getItem(pageNo) == max_page) {
                        const successModal = new bootstrap.Modal(
                            document.getElementById("successModal")
                        );
                        modal_time_show = false;
                        successModal.show();
                    } else {
                        let count = localStorage.getItem(pageNo);
                        count++;
                        LoadStatementChoice(count);
                        localStorage.setItem(pageNo, count);
                    }
                },
                error: function (xhr, status, error) {
                  errorAPI(xhr,status,error)
                },
            });
        });

        // # ULANGI SOAL KETIKA KEHABISAN WAKTU
        $("body").on("click", "#btn-ulangi-soal", function () {
            timerTest(max_time_per_page);
        });

        // HANDLE CLOSE MODAL
        let timeUpModal = document.getElementById("timeUpModal");
        timeUpModal.addEventListener("hidden.bs.modal", function (event) {
            timerTest(max_time_per_page);
        });
        let successModal = document.getElementById("successModal");
        successModal.addEventListener("hidden.bs.modal", function (event) {
            timerTest(max_time_per_page);
            modal_time_show = true;
        });

        // # TOMBOL LIHAT HASIL
        $("body").on("click", "#btn-lihat-hasil", function (e) {
            e.preventDefault();
            let testId = localStorage.getItem("PERSONALITY_TEST_ID");

            // HANDLE SIMPAN SCORE
            let data = {
                test_id: testId,
            };
            $.ajax({
                url: API_URL + "/api/v1/personality/save-score/" + testId,
                type: "PUT",
                data: JSON.stringify(data),
                timeout: 5000,
                contentType: "application/json",
                success: function (response) {
                    // pindah halaman
                    window.location.href = APP_URL + "/assesment";

                    // hapus data di local storage
                    localStorage.removeItem(pageNo);
                    localStorage.removeItem("userChoice");
                    localStorage.removeItem("MAX_TIME_PERSONALITY");
                    localStorage.removeItem("PERSONALITY_TEST_ID");
                },
                error: function (xhr, status, error) {
                  errorAPI(xhr,status,error)
                },
            });
        });

        // # LOAD DATA STATEMMENT
        LoadStatementChoice(localStorage.getItem(pageNo));
    } else {
        alert("Browser yang Anda gunakan tidak mendukung Web Storage");
    }
});
