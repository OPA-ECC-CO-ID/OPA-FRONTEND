import "@/pages/frontend/app-frontend";
import { errorAPI } from "../../utils/error";
import "@/pages/frontend/personality/instruction/maxtime";
import moment from "moment-timezone";

$(document).ready(function () {
    // CEK TES ID
    if (localStorage.getItem("PERSONALITY_TEST_ID") != null) {
        window.location.href = APP_URL + "/personality/test";
    }

    let statustes = false;
    // CEK SUDAH PERNAH TES ATAU BELUM
    let user_id = Cookies.get("user_id");
    $.ajax({
        url: `${API_URL}/api/v1/assessment/${user_id}`,
        type: "GET",
        timeout: 5000,
        contentType: "application/json",
        success: function (response) {
            // Cek Sudah Tes Atau belum
            if (response.data.personality === "Lihat Hasil") {
                $.ajax({
                    url: `${API_URL}/api/v1/personality/result/${user_id}`,
                    type: "GET",
                    timeout: 5000,
                    contentType: "application/json",
                    success: function (response) {
                        console.log(response.data.test);
                        // waktu
                        const time_test = moment(
                            response.data.test.test_date,
                            "YYYY-MM-DD HH:mm:ss"
                        ).format("DD-MM-YYYY");

                        const next_test = moment(
                            response.data.test.next_test,
                            "YYYY-MM-DD"
                        ).format("DD-MM-YYYY");

                        const today = moment().format("DD-MM-YYYY");
                        // const today = "19 November 2024";

                        // cek apakah tes sudah lebih dari 3 bulan ?
                        const isAfterToday = moment(
                            next_test,
                            "DD-MM-YYYY"
                        ).isAfter(moment(today, "DD-MM-YYYY"));

                        console.log("next test = " + next_test);
                        console.log(today);

                        if (isAfterToday) {
                            // belum 3 bulan
                            console.log("belum boleh tes");
                            $("#atention-test-desc").html(
                                `Maaf Kamu sudah melakukan tes pada tanggal <b>${time_test}</b>. Tes ini hanya dapat diikuti selama 3 bulan sekali. Kamu dapat mengikuti tes ini sekali lagi mulai tanggal <b>${next_test}</b>.`
                            );
                            statustes = false;
                        } else {
                            // sudah lebih dari 3 bulan
                            console.log("boleh tes");
                            statustes = true;
                        }
                    },
                    error: function (xhr, status, error) {
                        errorAPI(xhr,status,error)
                    },
                });
            } else {
                // apabila belum pernah tes
                console.log("boleh tes");
                statustes = true;
            }
        },
        error: function (xhr, status, error) {
            errorAPI(xhr,status,error)
        },
    });

    $("#btn-kerjakan").on("click", function (e) {
        e.preventDefault();
        if (statustes == true) {
            // Ubah id Kalau Sudah Ada Fitur Login
            let user_id = Cookies.get("user_id");
            //---------------
            let currentDate = moment()
                .tz("Asia/Jakarta")
                .format("YYYY-MM-DD HH:mm:ss");
            let data = {
                user_id: user_id,
                is_last_test: true,
                self_analyze_result: "-",
                evaluation_grade: 0,
                test_date: currentDate,
            };

            // konversi object ke json
            let jsonData = JSON.stringify(data);

            setTimeout(() => {
                // Kirim data API
                $.ajax({
                    url: API_URL + "/api/v1/personality/user-test",
                    type: "POST",
                    data: jsonData,
                    contentType: "application/json",
                    timeout: 5000, // Timeout set to 5 seconds
                    success: function (response) {
                        localStorage.setItem(
                            "PERSONALITY_TEST_ID",
                            response.data.id_test
                        );
                        window.location.href = APP_URL + "/personality/test";
                    },
                    error: function (xhr, status, error) {
                      errorAPI(xhr,status,error)
                        // console.log(error)
                    },
                });
            }, 500);
        } else {
            const attentionTest = new bootstrap.Modal(
                document.getElementById("attention-test"),
                {}
            );
            attentionTest.show();
        }
    });
});
