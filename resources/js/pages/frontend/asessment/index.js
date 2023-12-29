import "@/pages/frontend/app-frontend";

// remove data di localstorage
localStorage.removeItem("timeLeft");
localStorage.removeItem("progressWidth");

// Fungsi untuk mengubah tampilan tombol berdasarkan response data
function updateButton(btnElement, responseData, textValue) {
    const btn = $(btnElement);
    if (responseData === "Lihat Hasil") {
        btn.removeClass("btn-custom").addClass("btn-outline-custom2");
    } else if (responseData === "Mulai") {
        btn.removeClass("btn-outline-custom2").addClass("btn-custom");
    }
    btn.text(textValue);
}

$(document).ready(function () {
    // Kirim data API
    $.ajax({
        url: `${API_URL}/api/v1/assessment/${Cookies.get("user_id")}`,
        type: "GET",
        contentType: "application/json",
        success: function (response) {
            console.log(response);
            updateButton(
                "#btn-asessment-personality",
                response.data.personality,
                response.data.personality
            );
            updateButton(
                "#btn-asessment-readiness",
                response.data.career_readiness,
                response.data.career_readiness
            );
            updateButton(
                "#btn-asessment-icareer",
                response.data.icareer,
                response.data.icareer
            );

            // Handle Personality
            $("#btn-asessment-personality").on("click", function () {
                const path =
                    response.data.personality === "Mulai"
                        ? "/personality"
                        : "/personality/personality-result";
                window.location.href = path;
            });

            // Handle Career Readiness
            $("#btn-asessment-readiness").on("click", function () {
                const path =
                    response.data.career_readiness === "Mulai"
                        ? "/careerreadiness"
                        : "/careerreadiness/careerreadiness-result";
                window.location.href = path;
            });

            // Handle Icareer
            $("#btn-asessment-icareer").on("click", function () {
                const path =
                    response.data.icareer === "Mulai"
                        ? "/icareer"
                        : "/icareer/icareer-result";
                window.location.href = path;
            });
        },
        error: function (error) {
            console.log(error);
        },
    });
});
