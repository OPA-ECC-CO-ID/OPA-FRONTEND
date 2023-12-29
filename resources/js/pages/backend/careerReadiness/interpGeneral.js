import "@/pages/backend/login/cekJwt";
import "@/pages/backend/app-backend";

// #0 Ambil Data ID Modal
let exampleModal = new bootstrap.Modal(document.getElementById("exampleModal")),
    showModal = new bootstrap.Modal(document.getElementById("showModal"));

// #01_TAMPIL DATA
$(document).ready(function () {

    $("#myTable").DataTable({
        processing: true,
        serverside: true,
        ajax: {
            url: API_URL + "/api/v1/career-readiness/interpretation-general?limit=-1",
            type: "GET",
            dataSrc: "data.data",
            timeout: 5000,
            error: function (xhr, status, error) {
                if (status === "timeout") {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Request timeout. Please try again later.",
                    });
                } else if (xhr.status === 500) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Server error. Please try again later.",
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "An error occurred: " + error,
                    });
                }
            },
        },
        columns: [
            {

                data: "id_interp_general",
                // data: null,
                // render: function (data, type, row, meta) {
                //     // Fungsi ini akan menghasilkan nomor urut yang otomatis bertambah
                //     return meta.row + 1;
                // },
                name: "No",
            },
            {
                data: "publish",
                name: "Publish",
                render: function (data, type, full, meta) {
                    // Buat input checkbox berdasarkan nilai 'publish'
                    let isChecked = data ? "checked" : "";
                    return `<div class="form-check">
                                <input class="form-check-input" type="checkbox" ${isChecked} disabled>
                            </div>`;
                },
            },
            {
                data: "general_status",
                name: "General Status",
            },
            {
                data: "general_interpretation",
                render: function (data, type, row) {
                    let shortText = data.length > 150 ? data.substring(0, 150) + ' . . .' : data;
                    return shortText;
                },
                name: "General Interpretation",
            },
            {
                data: "range_score_start",
                name: "Range Score Start",
            },
            {
                data: "range_score_end",
                name: "Range Score End",
            },
            {
                data: "modified_date",
                name: "Modified Date",
            },
            {
                render: function (data, type, full, meta) {
                    let id = full.id_interp_general;
                    return `
                    <div class="action-table">
                        <button class="badge bg-gradient-info tombol-info" data-id="${id}" data-bs-toggle="modal" title="Detail"><i class="fa fa-eye" aria-hidden="true"></i></button>
                        <button class="badge bg-gradient-warning tombol-edit" data-id="${id}" data-bs-toggle="modal" data-bs-target="#editModal"><i class="fa fa-edit" aria-hidden="true"></i></button>
                    </div>
            `;
                },
            },
        ],
    });
});

// 02_PROSES DETAIL
$("body").on("click", ".tombol-info", function () {
    // #1 Ambil Data Id
    let id = $(this).data("id");
    // #2 Tampilkan Data
    $.ajax({
        url: API_URL + "/api/v1/career-readiness/interpretation-general/" + id,
        type: "GET",
        success: function (response) {
            // #1 Tampikan Modal
            showModal.show();

            let isChecked = response.data.publish;
            //#2 Tampikan  Data Di Modal
            $("#val_publish").prop("checked", isChecked);
            $("#val_generalStatus").html(response.data.general_status);
            $("#val_generalInterp").html(response.data.general_interpretation);
            $("#val_rangeScoreStart").html(response.data.range_score_start);
            $("#val_rangeScoreEnd").html(response.data.range_score_end);
            $("#val_creationDate").html(response.data.creation_date);
            $("#val_creationId").html(response.data.creation_id);
            $("#val_modifiedDate").html(response.data.modified_date);
            $("#val_modifiedId").html(response.data.modified_id);
        },
    });
});

// // #02_CREATE DATA
// $("body").on("click", ".tombol-tambah", function (e) {
//     // #1 Tampilkan Modal
//     exampleModal.show();
//     $("#tombol-simpan").text("tambah Data");
//     $("#modalJudul").text("Tambah Data");

//     // #2 Hapus event handler .click() sebelumnya jika ada
//     $("#tombol-simpan").off("click");

//     // #3 Simpan Data
//     $("#tombol-simpan").click(function (e) {
//         e.preventDefault();
//         simpan();
//     });
// });

// 03_PROSES EDIT
$("body").on("click", ".tombol-edit", function () {
    // #1 Ambil Data Id
    var id = $(this).data("id");
    // #2 Tampilkan Data
    $.ajax({
        url: API_URL + "/api/v1/career-readiness/interpretation-general/" + id,
        type: "GET",
        success: function (response) {
            // #1 Tampikan Modal
            exampleModal.show();
            $("#tombol-simpan").text("Edit Data");
            $("#modalJudul").text("Edit Data");

            //#2 Tampikan  Data Di Modal
            $("#id_interp_general").val(response.data.id_interp_general);
            let isChecked = response.data.publish;
            $("#publish").prop("checked", isChecked);
            $("#general_status").val(response.data.general_status);
            $("#general_interpretation").val(response.data.general_interpretation);
            $("#range_score_start").val(response.data.range_score_start);
            $("#range_score_end").val(response.data.range_score_end);

            // #3 Hapus event handler .click() sebelumnya jika ada
            $("#tombol-simpan").off("click");

            // #4 Simpan Data
            $("#tombol-simpan").click(function () {
                simpan(id);
            });
        },
    });
});


// #05 SIMPAN DATA TAMBAH DAN EDIT
function simpan(id = "") {
    let var_url = "";
    let type_url = "";
    if (id == "") {
        var_url = API_URL + "/api/v1/career-readiness/interpretation-general";
        type_url = "POST";
    } else {
        var_url = API_URL + "/api/v1/career-readiness/interpretation-general/" + id;
        type_url = "PUT";
    }

    // #1 Ambil data value id
    let id_interp_general = $("#id_interp_general").val();
    let publish = $("#publish").prop("checked");
    let general_status = $("#general_status").val();
    let general_interpretation = $("#general_interpretation").val();
    let range_score_start = $("#range_score_start").val();
    let range_score_end = $("#range_score_end").val();
    let creation_id = Cookies.get("id");
    let modified_id = Cookies.get("id");

    // #2. simpan ke variabel data
    let data = {
        id_interp_general: id_interp_general,
        publish: publish,
        general_status: general_status,
        general_interpretation: general_interpretation,
        range_score_start: range_score_start,
        range_score_end: range_score_end,
        creation_id: creation_id,
        modified_id: modified_id,
        // modified_date: modified_date,
    };

    // #3 konversi object ke json
    let jsonData = JSON.stringify(data);

    // #4 Kirim data API
    $.ajax({
        url: var_url,
        type: type_url,
        data: jsonData,
        contentType: "application/json",
        success: function (response) {
            // #1 Hide Modal
            exampleModal.hide();
            // #2 Tampilkan Notifikasi
            Swal.fire("Sukses", "Data Berhasil Disimpan", "success");
            $("#myTable").DataTable().ajax.reload();
        },
        error: function (error) {
            // Ambil objek error
            $("#pesanError").removeClass("d-none");
            if (error.responseJSON) {
                var errorObj = error.responseJSON.errors;
                var errorMessage = "<ul>";
                for (var key in errorObj) {
                    if (errorObj.hasOwnProperty(key)) {
                        errorMessage +=
                            "<li>" + key + ": " + errorObj[key] + "</li>";
                    }
                }
                errorMessage += "</ul>";

                // #2 Tampilkan pesan error di dalam modal
                $("#error-messages").html(errorMessage);
            } else {
                // #2 Tampilkan pesan error di dalam modal
                $("#error-messages").html("Data gagal Disimpan");
            }
        },
    });
}

// # MODAL HIDDEN SETTING
var myModalEl = document.getElementById("exampleModal");
myModalEl.addEventListener("hidden.bs.modal", function (event) {
    $("#id_interp_general").val("");
    $("#publish").prop("checked", false);
    $("#general_status").val("");
    $("#general_interpretation").val("");
    $("#range_score_start").val("");
    $("#range_score_end").val("");

    //  remove alert
    $("#error-messages").html("");
    $("#pesanError").addClass("d-none");
});
