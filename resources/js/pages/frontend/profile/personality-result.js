import "@/pages/frontend/app-frontend";
import "@/pages/frontend/profile/fotoprofile";
import "@/pages/frontend/profile/index";
import moment from "moment-timezone";
import { errorAPI } from "../utils/error";

document.addEventListener("DOMContentLoaded", function () {
    // CEK apakah sedang tes ?
    if (localStorage.getItem("PERSONALITY_TEST_ID")) {
        window.location.href = APP_URL + "/personality/test";
    } else {
        // HANDLE PERSONALITY RESULT
        let user_id = Cookies.get("user_id");
        $.ajax({
            url: `${API_URL}/api/v1/assessment/${user_id}`,
            type: "GET",
            contentType: "application/json",
            success: function (response) {
                // Cek Sudah Tes Atau belum
                if (response.data.personality === "Lihat Hasil") {
                    $("#personality-test-notif-false").addClass("d-none");
                    $("#personality-test-notif-true").removeClass("d-none");
                    $("#personality-content").removeClass("d-none");

                    // #1 status tes
                    $.ajax({
                        url: `${API_URL}/api/v1/personality/result/${user_id}`,
                        type: "GET",
                        contentType: "application/json",
                        success: function (response) {
                            const test_date = moment(
                                response.data.test.test_date,
                                "YYYY-MM-DD HH:mm:ss"
                            ).format("DD MMMM YYYY [pukul] HH.mm [WIB]");

                            const next_test = moment(
                                response.data.test.next_test,
                                "YYYY-MM-DD"
                            ).format("DD MMMM YYYY");

                            const today = moment().format("DD MMMM YYYY");
                            // const today = "19 November 2024";

                            // cek apakah tes sudah lebih dari 3 bulan ?
                            const isAfterToday = moment(
                                next_test,
                                "DD MMMM YYYY"
                            ).isAfter(moment(today, "DD MMMM YYYY"));

                            // console.log("next test = " + next_test);
                            // console.log(today);
                            if (isAfterToday) {
                                // belum 3 bulan
                                let elementData = `<p>Kamu sudah melakukan tes pada tanggal ${test_date}. Tes ini hanya dapat diikuti selama 3 bulan sekali. Kamu dapat mengikuti tes sekali lagi mulai tanggal ${next_test}.</p>`;
                                $(".notification-result ").append(elementData);
                                $("#btn-update").addClass("d-none");
                                $("#keterangan-update").addClass("d-none");
                            } else {
                                // sudah lebih dari 3 bulan
                                let elementData = `
                               Silakan klik Update Test, untuk mengikuti tes GAYA KEPRIBADIAN kembali`;
                                $(".notification-result ").append(elementData);
                                $("#btn-update").removeClass("d-none");
                                $("#keterangan-update").removeClass("d-none");
                            }
                            // akhir cek

                            // tanggal dan jam tes
                            $(".result-title-text").append(
                                `<p>Tanggal Tes: <span>${moment(
                                    response.data.test.test_date,
                                    "YYYY-MM-DD HH:mm:ss"
                                ).format(
                                    "DD MMMM YYYY"
                                )}</span> Jam: <span>${moment(
                                    response.data.test.test_date,
                                    "YYYY-MM-DD HH:mm:ss"
                                ).format("HH.mm")}</span></p>`
                            );

                            // HASIL ASESSMENT PERSONLITY
                            let resultContainer = $(
                                "#result-asessment-personality"
                            );

                            response.data.result.forEach((result) => {
                                let resultBoxHTML = `
                            <div class="result-box mb-4">
                                        <h5 class="result-header" id="loyality-result"> ${result.category.label}<i
                                                class="bi bi-chevron-up"></i>
                                        </h5>
                                        <div class="result-content" id="loyality-content">
                                            <p>${result.category.description}</p>
                                            <div class="text-result-box bg-light">
                                                <h4>Gambaran dirimu saat ini</h4>
                                                <p>${result.psychological_dynamics}</p>
                                            </div>
                                            <h4>Saran Pengembangan</h4>
                                            ${result.dev_advice}
                                        </div>
                                    </div>
                            `;
                                resultContainer.append(resultBoxHTML);
                            });

                            // Tampil data survei pengalaman
                            var radioElement = document.querySelector(
                                'input[name="rating"][value="' +
                                    response.data.test.evaluation_grade +
                                    '"]'
                            );
                            if (radioElement) {
                                radioElement.checked = true;
                            }
                        },
                        error: function (xhr, status, error) {
                            errorAPI(xhr, status, error);
                        },
                    });
                } else {
                    $("#btn-mulai-test").on("click", function () {
                        window.location.href = APP_URL + "/personality";
                    });
                }
            },
            error: function (xhr, status, error) {
                errorAPI(xhr, status, error);
            },
        });


        // HANDLE SURVEI
        let resultconfirm = new bootstrap.Modal(document.getElementById("resultconfirm"));

        $('input[name="rating"]').on('change',function() {
            $('#score-result').removeClass('d-none');
        })

        $('#btn-save-survei').on('click',function(e) {
            e.preventDefault();
            resultconfirm.show();

        })

        $('#btn-simpan').on('click',function() {
            var ratingValue = $('input[name="rating"]:checked').val();
            var requestData = {
                "evaluation_grade": ratingValue
            };
            // Mengirimkan data ke API menggunakan AJAX
            $.ajax({
                url: `${API_URL}/api/v1/personality/tests/${user_id}/survey`,
                type: 'PUT',
                contentType: 'application/json',
                data: JSON.stringify(requestData),
                success: function(response) {
                    console.log('Data berhasil dikirim', response);
                    resultconfirm.hide();
                    $('#score-result').addClass('d-none');
                },
                error: function(xhr, status, error) {
                    console.error('Gagal mengirim data:', error);
                }
            });
        })

        $('#btn-tutup').on('click',function() {
            resultconfirm.hide();
            $('#score-result').addClass('d-none');
        })

        $('#btn-reset').on('click',function(e) {
            e.preventDefault()
            var requestData = {
                "evaluation_grade": 0
            };
            // Mengirimkan data ke API menggunakan AJAX
            $.ajax({
                url: `${API_URL}/api/v1/personality/tests/${user_id}/survey`,
                type: 'PUT',
                contentType: 'application/json',
                data: JSON.stringify(requestData),
                success: function(response) {
                    console.log('Data berhasil dikirim', response);
                    resultconfirm.hide();
                    $('#score-result').addClass('d-none');
                    $('input[name="rating"]').prop('checked', false);
                },
                error: function(xhr, status, error) {
                    console.error('Gagal mengirim data:', error);
                }
            });
        })
    }
});
