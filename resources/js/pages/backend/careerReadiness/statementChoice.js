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
            url: API_URL + "/api/v1/career-readiness/statement-choice?limit=-1",
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
                data: "id_choice",
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
                data: "category",
                name: "Category",
            },
            {
                data: "order_no",
                name: "Order No",
            },
            {
                data: "choice_name",
                name: "Choice Name",
            },
            {
                data: "score",
                name: "Score",
            },
            {
                data: "modified_date",
                name: "Modified Date",
            },
            {
                render: function (data, type, full, meta) {
                    let id = full.id_choice;
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
        url: API_URL + "/api/v1/career-readiness/statement-choice/" + id,
        type: "GET",
        success: function (response) {
            // #1 Tampikan Modal
            showModal.show();

            let isChecked = response.data.publish;
            //#2 Tampikan  Data Di Modal
            $("#val_publish").prop("checked", isChecked);
            $("#val_category").html(response.data.category);
            $("#val_orderNo").html(response.data.order_no);
            $("#val_choiceName").html(response.data.choice_name);
            $("#val_score").html(response.data.score);
            $("#val_creationDate").html(response.data.creation_date);
            $("#val_creationId").html(response.data.creation_id);
            $("#val_modifiedDate").html(response.data.modified_date);
            $("#val_modifiedId").html(response.data.modified_id);
        },
    });
});


// GLOBAL SETUP
$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        Authorization: "Bearer " + Cookies.get("JwtToken"),
    },
});

// // 02_PROSES TAMBAH
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
        url: API_URL + "/api/v1/career-readiness/statement-choice/" + id,
        type: "GET",
        success: function (response) {
            // #1 Tampikan Modal
            exampleModal.show();
            $("#tombol-simpan").text("Edit Data");
            $("#modalJudul").text("Edit Data");

            //#2 Tampikan  Data Di Modal
            $("#id_choice").val(response.data.id_choice);
            let isChecked = response.data.publish;
            $("#publish").prop("checked", isChecked);
            $("#category").val(response.data.category);
            $("#order_no").val(response.data.order_no);
            $("#choice_name").val(response.data.choice_name);
            $("#score").val(response.data.score);

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
        var_url = API_URL + "/api/v1/career-readiness/statement-choice";
        type_url = "POST";
    } else {
        var_url = API_URL + "/api/v1/career-readiness/statement-choice/" + id;
        type_url = "PUT";
    }

    // #1 Ambil data value id
    let id_choice = $("#id_choice").val();
    let publish = $("#publish").prop("checked");
    let category = $("#category").val();
    let order_no = $("#order_no").val();
    let choice_name = $("#choice_name").val();
    let score = $("#score").val();
    let creation_id = Cookies.get("id");
    let modified_id = Cookies.get("id");

    // #2. simpan ke variabel data
    let data = {
        id_choice: id_choice,
        publish: publish,
        category: category,
        order_no: order_no,
        choice_name: choice_name,
        score: score,
        creation_id: creation_id,
        modified_id: modified_id,
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
    $("#id_choice").val("");
    $("#publish").prop("checked", false);
    $("#category").val("");
    $("#order_no").val("");
    $("#choice_name").val("");
    $("#score").val("");
    //  remove alert
    $("#error-messages").html("");
    $("#pesanError").addClass("d-none");
});