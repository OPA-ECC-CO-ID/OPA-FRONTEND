import "@/pages/backend/login/cekJwt";
import "@/pages/backend/app-backend";


$(".tombol-close").hide();
$(".tombol-submit").hide();

// SHOW DATA
$(document).ready(function () {
    loadData();
});

// tampil data
function loadData() {
    $.ajax({
        url: API_URL + "/api/v1/icareer/config/1",
        type: "GET",
        success: function (response) {
            clearError();
            $("#max_time_per_page").attr("disabled", true);
            $("#monthly_test_periode").attr("disabled", true);
            $("#min_score_of_variable").attr("disabled", true);
            $("#max_variable_to_be_career_spesific").attr("disabled", true);
            $("#max_time_per_page").val(response.data.max_time_per_page);
            $("#monthly_test_periode").val(response.data.monthly_test_periode);
            $("#min_score_of_variable").val(
                response.data.min_score_of_variable
            );
            $("#max_variable_to_be_career_spesific").val(
                response.data.max_variable_to_be_career_spesific
            );
        },
        error: function (error) {
            showError();
        },
    });
}
// #EDIT DATA
$("body").on("click", ".tombol-submit", function () {
    let max_time_per_page = $("#max_time_per_page").val();
    let monthly_test_periode = $("#monthly_test_periode").val();
    let min_score_of_variable = $("#min_score_of_variable").val();
    let max_variable_to_be_career_spesific = $(
        "#max_variable_to_be_career_spesific"
    ).val();
    let modified_id = Cookies.get("id");

    let data = {
        max_time_per_page: max_time_per_page,
        monthly_test_periode: monthly_test_periode,
        min_score_of_variable: min_score_of_variable,
        modified_id: modified_id,
        max_variable_to_be_career_spesific: max_variable_to_be_career_spesific,
    };

    let jsonData = JSON.stringify(data);

    $.ajax({
        url: API_URL + "/api/v1/icareer/config/1",
        type: "PUT",
        data: jsonData,
        contentType: "application/json",
        success: function (response) {
            // #2 Tampilkan Notifikasi
            Swal.fire("Success!", "Data Berhasil Di Edit", "success");
        },
        error: function (error) {
            showError();
        },
    });
});

$("body").on("click", ".tombol-edit", function () {
    clearError();
    const isDisabled = !$("#max_time_per_page").prop("disabled");
    $(
        "#max_time_per_page, #monthly_test_periode, #min_score_of_variable,#max_variable_to_be_career_spesific"
    ).prop("disabled", isDisabled);
    $(".tombol-submit").toggle(!isDisabled);
    if (isDisabled) {
        $(".tombol-close").hide();
    } else {
        $(".tombol-close").show();
        $(".tombol-edit").hide();
    }
});

$("body").on("click", ".tombol-close", function () {
    loadData();
    clearError();
    const isDisabled = !$("#max_time_per_page").prop("disabled");
    $(
        "#max_time_per_page, #monthly_test_periode, #min_score_of_variable,#max_variable_to_be_career_spesific"
    ).prop("disabled", isDisabled);
    $(".tombol-submit").toggle(!isDisabled);

    $(".tombol-close").hide();
    $(".tombol-edit").show();
});

function clearError() {
    $("#error-messages").html("");
    $("#pesanError").addClass("d-none");
    // $(".personality-form").slideUp();
}

function showError() {
    // $(".personality-form").slideUp();
    $("#pesanError").removeClass("d-none");
    $("#error-messages").html("Data Tidak Ditemukan");
}
