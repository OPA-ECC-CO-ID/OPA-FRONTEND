import "@/pages/frontend/app-frontend";
import "@/pages/frontend/profile/fotoprofile";
import "@/pages/frontend/utils/dropdown";
import moment from "moment";

let linkPersonality = `${APP_URL}/personality`;
let linkIcareer = `${APP_URL}/icareer`;
let linkReadiness = `${APP_URL}/careerreadiness`;

$(document).ready(function () {
    // Kirim data API
    $.ajax({
        url: `${API_URL}/api/v1/assessment/${Cookies.get("user_id")}`,
        type: "GET",
        timeout: 5000,
        contentType: "application/json",
        success: function (response) {
            console.log(response.data);
            let date;
            // personality
            if (response.data.personality == "Lihat Hasil") {
                date = moment(response.data.personality_hasil[0].test_date);
                $("#test_date_personality").text(date.format("D MMMM YYYY"));
                $("#status_personality").removeClass("bi-x-circle");
                $("#status_personality").addClass("bi-check-circle");
                $("#hasil_personality").text("Lihat Hasil");
                $("#hasil_personality").removeClass("btn-outline-custom2");
                $("#hasil_personality").addClass("btn-custom");
                linkPersonality += "/personality-result";
            } else {
                $("#status_personality").removeClass("bi-check-circle");
                $("#status_personality").addClass("bi-x-circle");
            }

            // icareer
            if (response.data.icareer == "Lihat Hasil") {
                date = moment(response.data.icareer_hasil.time_test);
                $("#test_date_icareer").text(date.format("D MMMM YYYY"));
                $("#status_icareer").removeClass("bi-x-circle");
                $("#status_icareer").addClass("bi-check-circle");
                $("#hasil_icareer").text("Lihat Hasil");
                $("#hasil_icareer").removeClass("btn-outline-custom2");
                $("#hasil_icareer").addClass("btn-custom");
                linkIcareer += "/icareer-result";
            } else {
                $("#status_icareer").removeClass("bi-check-circle");
                $("#status_icareer").addClass("bi-x-circle");
            }

            // careerreadiness
            if (response.data.career_readiness == "Lihat Hasil") {
                date = moment(response.data.career_readiness_hasil.start_date);
                $("#test_date_careerreadiness").text(
                    date.format("D MMMM YYYY")
                );
                $("#status_careerreadiness").removeClass("bi-x-circle");
                $("#status_careerreadiness").addClass("bi-check-circle");
                $("#hasil_careerreadiness").text("Lihat Hasil");
                $("#hasil_careerreadiness").removeClass("btn-outline-custom2");
                $("#hasil_careerreadiness").addClass("btn-custom");
                linkReadiness += "/careerreadiness-result";
            } else {
                $("#status_careerreadiness").removeClass("bi-check-circle");
                $("#status_careerreadiness").addClass("bi-x-circle");
            }
        },
        error: function (xhr, status, error) {
            if (status === "timeout") {
                window.location.href = `${APP_URL}/error-500`;
            } else if (xhr.status === 500) {
                window.location.href = `${APP_URL}/error-500`;
            } else {
                window.location.href = `${APP_URL}/error-500`;
                console.log(xhr);
            }
        },
    });
});

// Personality
$("#hasil_personality").on("click", function () {
    setTimeout(() => {
        window.location.href = linkPersonality;
    }, 200);
});

// Personality
$("#hasil_icareer").on("click", function () {
    setTimeout(() => {
        window.location.href = linkIcareer;
    }, 200);
});

// Personality
$("#hasil_careerreadiness").on("click", function () {
    setTimeout(() => {
        window.location.href = linkReadiness;
    }, 200);
});
