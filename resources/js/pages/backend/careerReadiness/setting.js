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
        url: API_URL + "/api/v1/career-readiness/setting/4",
        type: "GET",
        success: function (response) {
            clearError();
            $("#period_test_diff_type").attr("disabled", true );
            $("#period_test_difference").attr("disabled", true );
            $("#statement_scale").attr("disabled", true );
            $("#page_size_statements").attr("disabled", true );
            $("#timer_per_page").attr("disabled", true );
            $("#copyright").attr("disabled", true );
            $("#period_test_diff_type").val(response.data.period_test_diff_type);
            $("#period_test_difference").val(response.data.period_test_difference);
            // console.log(response)
            $("#statement_scale").val(response.data.statement_scale);
            $("#page_size_statements").val(response.data.page_size_statements);
            $("#timer_per_page").val(response.data.timer_per_page);
            $("#copyright").val(response.data.copyright);
        },
        error: function (error) {
            showError();
        },
    });
}


// #EDIT DATA
$("body").on("click", ".tombol-submit", function () {
    let period_test_diff_type = $("#period_test_diff_type").val();
    let period_test_difference = $("#period_test_difference").val();
    let statement_scale = $("#statement_scale").val();
    let page_size_statements = $("#page_size_statements").val();
    let timer_per_page = $("#timer_per_page").val();
    let copyright = $("#copyright").val();
    let modified_id = Cookies.get("id");

    let data = {
        period_test_diff_type: period_test_diff_type,
        period_test_difference: period_test_difference,
        statement_scale: statement_scale,
        page_size_statements: page_size_statements,
        timer_per_page: timer_per_page,
        copyright: copyright,
        modified_id: modified_id,
    };

    let jsonData = JSON.stringify(data);

    $.ajax({
        url: API_URL + "/api/v1/career-readiness/setting/4",
        type: "PUT",
        data: jsonData,
        contentType: "application/json",
        success: function (response) {
            const isDisabled = !$("#period_test_diff_type").prop("disabled");
            $("#period_test_diff_type, #period_test_difference, #statement_scale, #page_size_statements, #timer_per_page, #copyright").prop("disabled", isDisabled);
            $(".tombol-submit").toggle(!isDisabled);

            $(".tombol-close").hide();
            $(".tombol-edit").show();
            // #2 Tampilkan Notifikasi
            Swal.fire("Success!", "Data Berhasil Di Perbarui", "success");
        },
        error: function (error) {
            showError();
        },
    });
});

$("body").on("click", ".tombol-edit", function () {
    clearError();
    const isDisabled = !$("#period_test_diff_type").prop("disabled");
    $("#period_test_diff_type, #period_test_difference, #statement_scale, #page_size_statements, #timer_per_page, #copyright").prop("disabled", isDisabled);
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
    const isDisabled = !$("#period_test_diff_type").prop("disabled");
    $("#period_test_diff_type, #period_test_difference, #statement_scale, #page_size_statements, #timer_per_page, #copyright").prop("disabled", isDisabled);
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
