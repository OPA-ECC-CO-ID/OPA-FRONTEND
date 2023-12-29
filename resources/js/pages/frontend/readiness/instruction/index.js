import "@/pages/frontend/app-frontend";
import { errorAPI } from "../../utils/error";
import "@/pages/frontend/readiness/instruction/maxtime";
import moment from "moment-timezone";

$(document).ready(async function () {
    const redirectToTestPage = () => {
        const careerReadinessTestId = localStorage.getItem("CAREER_READINESS_TEST_ID");
        if (careerReadinessTestId) {
            window.location.href = `${APP_URL}/careerreadiness/test`;
        }
    };

    redirectToTestPage(); // Check on page load
    let statustes = false;

    const checkTestStatus = async () => {
        try {
            let user_id = Cookies.get("user_id");
            const response = await $.ajax({
                url: `${API_URL}/api/v1/assessment/${user_id}`,
                type: "GET",
                timeout: 5000,
                contentType: "application/json"
            });

            if (response.data.career_readiness === "Lihat Hasil") {
                const careerTestResult = await $.ajax({
                    url: `${API_URL}/api/v1/career-readiness/result/${user_id}`,
                    type: "GET",
                    timeout: 5000,
                    contentType: "application/json"
                });

                const time_test = moment(
                    careerTestResult.start_date,
                    "YYYY-MM-DD HH:mm:ss"
                ).format("DD-MM-YYYY");

                const next_test = moment(
                    careerTestResult.next_test_date,
                    "YYYY-MM-DD"
                ).format("DD-MM-YYYY");

                const today = moment().format("DD-MM-YYYY");

                const isAfterToday = moment(
                    next_test,
                    "DD-MM-YYYY"
                ).isAfter(moment(today, "DD-MM-YYYY"));

                if (isAfterToday) {
                    console.log("belum boleh tes");
                    $("#atention-test-desc").html(
                        `Maaf Kamu sudah melakukan tes pada tanggal <b>${time_test}</b>. Tes ini hanya dapat diikuti selama 3 bulan sekali. Kamu dapat mengikuti tes ini sekali lagi mulai tanggal <b>${next_test}</b>.`
                    );
                    statustes = false;
                } else {
                    console.log("boleh tes");
                    statustes = true;
                }
            } else {
                console.log("boleh tes");
                statustes = true;
            }
        } catch (error) {
            errorAPI(error);
        }
    };

    const fetchTestSetting = async () => {
        try {
            const response = await $.ajax({
                url: API_URL + "/api/v1/career-readiness/setting",
                type: "GET",
                timeout: 5000
            });

            let period_test_difference = response.data.data[0].period_test_difference;

            $("#btn-kerjakan").on("click", function (e) {
                e.preventDefault();
                if (statustes == true) {
                    let user_id = Cookies.get("user_id");
                    let currentDate = moment()
                        .tz("Asia/Jakarta")
                        .format("YYYY-MM-DD HH:mm:ss");

                    let nextTestDate = moment()
                        .tz("Asia/Jakarta")
                        .add(period_test_difference, "months")
                        .format("YYYY-MM-DD");

                    let data = {
                        publish: true,
                        user_id: user_id,
                        start_date: currentDate,
                        finish_date: "",
                        next_test_date: nextTestDate,
                        interp_general_id: 1,
                        interp_general_score: 0,
                        evaluation_grade: 0,
                        evaluation_date: "",
                        modified_id: user_id,
                    };

                    let jsonData = JSON.stringify(data);

                    $.ajax({
                        url: API_URL + "/api/v1/career-readiness/test",
                        type: "POST",
                        data: jsonData,
                        timeout: 5000,
                        contentType: "application/json",
                        success: async function (response) {
                            try {
                                await new Promise((resolve) => {
                                    localStorage.setItem(
                                        "CAREER_READINESS_TEST_ID",
                                        response.data.id_test
                                    );
                                    resolve();
                                });

                                // Pindahkan halaman setelah setItem dijalankan
                                window.location.href = APP_URL + "/careerreadiness/test";
                            } catch (error) {
                                console.error(error);
                            }
                        },

                        error: function (xhr, status, error) {
                            errorAPI(xhr, status, error);
                        },
                    });
                } else {
                    let attentionTest = new bootstrap.Modal(
                        document.getElementById("attention-test"),
                        {}
                    );
                    attentionTest.show();
                }
            });
        } catch (error) {
            errorAPI(error);
        }
    };

    try {
        await checkTestStatus();
        await fetchTestSetting();
    } catch (error) {
        console.error(error);
    }
});
