import "@/pages/frontend/app-frontend";
import { errorAPI } from "../../utils/error";
import "@/pages/frontend/profile/fotoprofile";
import "@/pages/frontend/utils/dropdown";
import moment from "moment-timezone";

$(document).ready(function () {
    // HANDLE PERSONALITY RESULT
    // CEK apakah sedang tes ?
    if (localStorage.getItem("CAREER_READINESS_TEST_ID")) {
        window.location.href = APP_URL + "/careerreadiness/test";
    } else {
        let user_id = Cookies.get("user_id");
        $.ajax({
            url: `${API_URL}/api/v1/assessment/${user_id}`,
            type: "GET",
            timeout: 5000,
            contentType: "application/json",
            success: function (response) {
                // Cek Sudah Tes Atau belum
                if (response.data.career_readiness === "Lihat Hasil") {
                    $(".main-content-result").removeClass("d-none");
                    $("#hasil-asesment").removeClass("d-none");
                    $("#mulai-test").addClass("d-none");
                    // #1 status tes
                    $.ajax({
                        url: `${API_URL}/api/v1/career-readiness/result/${user_id}`,
                        type: "GET",
                        timeout: 5000,
                        contentType: "application/json",
                        success: function (response) {
                            console.log(response);

                            // waktu
                            const start_date = moment(
                                response.start_date,
                                "YYYY-MM-DD HH:mm:ss"
                            ).format("DD MMMM YYYY [pukul] HH.mm [WIB]");

                            const next_test = moment(
                                response.next_test_date,
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
                                let elementData = `<p>Kamu sudah melakukan tes pada tanggal ${start_date}. Tes ini hanya dapat diikuti selama 3 bulan sekali. Kamu dapat mengikuti tes sekali lagi mulai tanggal ${next_test}.</p>`;
                                $(".notification-result ").append(elementData);
                                $("#btn-update").addClass("d-none");
                                $("#keterangan-test").addClass("d-none");
                            } else {
                                // sudah lebih dari 3 bulan
                                let elementData = `
                              Silakan klik Update Test, untuk mengikuti tes KESIAPAN KARIR kembali`;
                                $(".notification-result ").append(elementData);
                                $("#btn-update").removeClass("d-none");
                                $("#keterangan-test").removeClass("d-none");
                            }
                            // akhir cek

                            // tanggal dan jam tes
                            $(".result-title-text").append(
                                `<p>Tanggal Tes: <span>${moment(
                                    response.start_date,
                                    "YYYY-MM-DD HH:mm:ss"
                                ).format(
                                    "DD MMMM YYYY"
                                )}</span> Jam: <span>${moment(
                                    response.start_date,
                                    "YYYY-MM-DD HH:mm:ss"
                                ).format("HH.mm")}</span></p>`
                            );

                            // HASIL TES CAREER READINESS
                            let resultContainer = $(
                                "#hasil-asessment-readiness"
                            );
                            let resultBoxHTML;
                            response.variable_scores.forEach((result) => {
                                resultBoxHTML += `
                                 <tr>
                                    <th scope="row">${result.variable}</th>
                                    <td colspan="2">
                                        <div class="progress" role="progressbar" aria-label="Basic example"
                                            aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                            <div class="progress-bar" style="width: ${
                                                (result.score /
                                                    response.max_score) *
                                                100
                                            }%"></div>
                                        </div>
                                    </td>
                                </tr>
                            `;
                            });
                            resultContainer.prepend(resultBoxHTML);
                            // Akhir Hasil Asessment
                            $("#detail_interpretation").text(
                                response.detail_interpretation
                            );
                            $("#general_status").text(response.general_status);

                               // Tampil data survei pengalaman
                               var radioElement = document.querySelector(
                                'input[name="rating"][value="' +response.evaluation_grade +'"]'
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
                        window.location.href = APP_URL + "/icareer";
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
                url: `${API_URL}/api/v1/career-readiness/tests/${user_id}/survey`,
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
                url: `${API_URL}/api/v1/career-readiness/tests/${user_id}/survey`,
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
