import "@/pages/backend/login/cekJwt";
import "@/pages/backend/app-backend";
import Cookies from "js-cookie";
import Quill from "quill";
import "quill/dist/quill.snow.css";

// Konfigurasi Quill Js
let description_editor = new Quill("#description", {
    theme: "snow",
});
let report_detail_editor = new Quill("#report_detail", {
    theme: "snow",
});

// SHOW DATA
$(document).ready(function () {
    loadData();
});

// tampil data
function loadData() {
    $.ajax({
        url: API_URL + "/api/v1/complete-report/setting/1",
        type: "GET",
        success: function (response) {
            clearError();
            description_editor.clipboard.dangerouslyPasteHTML(
                response.data.description
            );
            report_detail_editor.clipboard.dangerouslyPasteHTML(
                response.data.report_detail
            );
            $("#price_all_item").val(response.data.price_all_item);
            let isChecked = response.data.enable_discount === 1;
            $("#enable_discount").prop("checked", isChecked);
            $("#discount_value").val(response.data.discount_value);
            $("#discount_date_start").val(response.data.discount_date_start);
            $("#discount_date_end").val(response.data.discount_date_end);
            $("#discount_name").val(response.data.discount_name);
            $("#discount_desc").val(response.data.discount_description);
            let isCheckedNotif = response.data.notif_admin_every_order === 1;
            $("#notif_admin_every_order").prop("checked", isCheckedNotif);
            $("#notif_email_address").val(response.data.notif_email_address);
            $("#notif_email_content").val(response.data.notif_email_content);

        },
        error: function (error) {
            showError();
        },
    });
}


// #EDIT DATA
$("body").on("click", ".tombol-submit", function () {
    let description = description_editor.root.innerHTML;
    let report_detail = report_detail_editor.root.innerHTML;
    let price_all_item = $("#price_all_item").val();
    let enable_discount = $("#enable_discount").prop("checked") ? 1 : 0;
    let discount_value = $("#discount_value").val();
    let discount_date_start = $("#discount_date_start").val();
    let discount_date_end = $("#discount_date_end").val();
    let discount_name = $("#discount_name").val();
    let discount_description = $("#discount_desc").val();
    let notif_admin_every_order = $("#notif_admin_every_order").prop("checked") ? 1 : 0;
    let notif_email_address = $("#notif_email_address").val();
    let notif_email_content = $("#notif_email_content").val();
    let modified_id = Cookies.get("id");

    let data = {
        description: description,
        report_detail: report_detail,
        price_all_item: price_all_item,
        enable_discount: enable_discount,
        discount_value: discount_value,
        discount_date_start: discount_date_start,
        discount_date_end:discount_date_end,
        discount_name: discount_name,
        discount_description: discount_description,
        notif_admin_every_order: notif_admin_every_order,
        notif_email_address: notif_email_address,
        notif_email_content: notif_email_content,
        modified_id: modified_id,
    };

    let jsonData = JSON.stringify(data);

    $.ajax({
        url: API_URL + "/api/v1/complete-report/setting/1",
        type: "PUT",
        data: jsonData,
        contentType: "application/json",
        success: function (response) {
            Swal.fire("Success!", "Data Berhasil Di Perbarui", "success");
        },
        error: function (error) {
            console.log(error)
        },
    });
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

