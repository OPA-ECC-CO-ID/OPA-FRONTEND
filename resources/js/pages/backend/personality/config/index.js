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
        url: API_URL + "/api/v1/personality/config/1",
        type: "GET",
        success: function (response) {
            clearError();
            $("#periode_test_monthly").attr("disabled", true);
            $("#maxtime_per_page").attr("disabled", true);
            $("#periode_test_monthly").val(response.data.periode_test_monthly);
            $("#maxtime_per_page").val(response.data.maxtime_per_page);
        },
        error: function (error) {
            showError();
        },
    });
}
// #EDIT DATA
$("body").on("click", ".tombol-submit", function () {
    let periode_test_monthly = $("#periode_test_monthly").val();
    let maxtime_per_page = $("#maxtime_per_page").val();
    let modified_id = Cookies.get("id");

    let data = {
        periode_test_monthly: periode_test_monthly,
        maxtime_per_page: maxtime_per_page,
        modified_id: modified_id,
    };

    let jsonData = JSON.stringify(data);

    $.ajax({
        url: API_URL + "/api/v1/personality/config/1",
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
    const isDisabled = !$("#periode_test_monthly").prop("disabled");
    $("#periode_test_monthly, #maxtime_per_page").prop("disabled", isDisabled);
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
    const isDisabled = !$("#periode_test_monthly").prop("disabled");
    $("#periode_test_monthly, #maxtime_per_page").prop("disabled", isDisabled);
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
