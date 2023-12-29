import "@/pages/backend/login/cekJwt";
import "@/pages/backend/app-backend";
import Cookies from "js-cookie";
import Quill from "quill";
import "quill/dist/quill.snow.css";

// #0 Ambil Data ID Modal
let exampleModal = new bootstrap.Modal(document.getElementById("exampleModal")),
    showModal = new bootstrap.Modal(document.getElementById("showModal"));

$(document).ready(function () {
    $("#myTable").DataTable({
        processing: true,
        serverside: true,
        ajax: {
            url: API_URL + "/api/v1/complete-report/item-assessment",
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
                data: "id_item",
                // render: function (data, type, row, meta) {
                //     // Fungsi ini akan menghasilkan nomor urut yang otomatis bertambah
                //     return meta.row + 1;
                // },
                name: "No",
            },
            {
                data: "assessment_id",
                name: "Assessment ID",
            },
            {
                data: "report_detail",
                name: "Report Detail",
            },
            {
                data: "price",
                name: "Price",
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
                data: "modified_date",
                name: "Modified Date",
            },
            {
                render: function (data, type, full, meta) {
                    let id = full.id_item;
                    return `
                    <div class="action-table">
                    <button class="badge bg-gradient-info tombol-info" data-id="${id}" data-bs-toggle="modal" title="Detail"><i class="fa fa-eye" aria-hidden="true"></i></button>
                        <button class="badge bg-gradient-warning tombol-edit" data-id="${id}" data-bs-toggle="modal" data-bs-target="#editModal" title="Edit"><i class="fa fa-edit" aria-hidden="true"></i></button>
                        <button class="badge bg-gradient-danger tombol-soft-delete" data-id="${id}"><i class="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
            `;
                },
            },
        ],
    });
});


// // Tampil data Tongsampah
$(document).ready(function () {
    // #01_TAMPIL DATA
    $("#myTrashTable").DataTable({
        processing: true,
        serverside: true,
        ajax: {
            url: API_URL + "/api/v1/complete-report/item-assessment/deleted",
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
                data: "id_item",
                // render: function (data, type, row, meta) {
                //     // Fungsi ini akan menghasilkan nomor urut yang otomatis bertambah
                //     return meta.row + 1;
                // },
                name: "No",
            },
            {
                data: "assessment_id",
                name: "Assessment ID",
            },
            {
                data: "report_detail",
                name: "Report Detail",
            },
            {
                data: "price",
                name: "Price",
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
                data: "modified_date",
                name: "Modified Date",
            },
            {
                render: function (data, type, full, meta) {
                    var id = full.id_item;
                    return `
                    <div class="action-table">
                        <button class="badge bg-gradient-info tombol-restore" data-id="${id}"><i class="fa fa-rotate-left" aria-hidden="true"></i></button>
                        <button class="badge bg-gradient-danger tombol-force-delete" data-id="${id}"><i class="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
            `;
                },
            },
        ],
    });
});


// HANDLE TAMPIL DATA TONG SAMPAH
$("body").on("click", "#btn-show-trash-items", function () {
    $("#btn-show-trash-items").addClass("bg-gradient-danger");
    $("#data_items").hide();
    $("#data_trash_items").show();
    $(".tombol-tambah").hide();
    $(".section-title").text("Tong Sampah Item Assesmen");
    
    $("#btn-show-items").removeClass("bg-gradient-primary");
});

// HANDLE TAMPIL DATA ITEMS
$("body").on("click", "#btn-show-items", function () {
    $("#btn-show-items").addClass("bg-gradient-primary");
    $("#data_items").show();
    $("#data_trash_items").hide();
    $(".tombol-tambah").show();
    $(".section-title").text("Data Member");
    
    $("#btn-show-trash-items").removeClass("bg-gradient-danger");
});



// 03_PROSES DETAIL
$("body").on("click", ".tombol-info", function () {
    // #1 Ambil Data Id
    let id = $(this).data("id");
    // #2 Tampilkan Data
    $.ajax({
        url: API_URL + "/api/v1/complete-report/item-assessment/" + id,
        type: "GET",
        success: function (response) {
            // #1 Tampikan Modal
            showModal.show();
            // console.log(response.data)

            $("#publish_val").html(response.data.publish);
            $("#assesment_id_val").html(response.data.assessment_id);
            $("#report_detail_val").html(response.data.report_detail);
            $("#price_val").html(response.data.price);
            $("#creation_id_val").html(response.data.creation_id);
            $("#creation_date_val").html(response.data.creation_date);
            $("#modified_id_val").html(response.data.modified_id);
            $("#modified_date_val").html(response.data.modified_date);
        },
    });
});


// Konfigurasi Quill Js
let report_detail_editor = new Quill("#report_detail", {
    theme: "snow",
});

// 02_PROSES TAMBAH
$("body").on("click", ".tombol-tambah", function (e) {
    // #1 Tampilkan Modal
    exampleModal.show();
    $("#tombol-simpan").text("tambah Data");
    $("#modalJudul").text("Tambah Data");

    // #2 Hapus event handler .click() sebelumnya jika ada
    $("#tombol-simpan").off("click");

    // #3 Simpan Data
    $("#tombol-simpan").click(function (e) {
        e.preventDefault();
        simpan();
    });
});

// 03_PROSES EDIT
$("body").on("click", ".tombol-edit", function () {
    // #1 Ambil Data Id
    let id = $(this).data("id");
    // #2 Tampilkan Data
    $.ajax({
        url: API_URL + "/api/v1/complete-report/item-assessment/" + id,
        type: "GET",
        success: function (response) {
            // console.log(response.data.assessment_id)
            // #1 Tampikan Modal
            exampleModal.show();
            $("#tombol-simpan").text("Edit Data");
            $("#modalJudul").text("Edit Data");

            //#2 Tampikan  Data Di Modal
            $("#assessment_id").val(response.data.assessment_id);
            report_detail_editor.clipboard.dangerouslyPasteHTML(
                response.data.report_detail
            );
            $("#price").val(response.data.price);
            $("#publish").val(response.data.publish);

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
        var_url = API_URL + "/api/v1/complete-report/item-assessment";
        type_url = "POST";
    } else {
        var_url = API_URL + "/api/v1/complete-report/item-assessment/" + id;
        type_url = "PUT";
    }

    // #1 Ambil data value id
    let assessment_id = $("#assessment_id").val();
    let report_detail = report_detail_editor.root.innerHTML;
    let price = $("#price").val();
    let publish = $("#publish").prop("checked");
    let creation_id = Cookies.get("id");
    let modified_id = Cookies.get("id");

    // #2. simpan ke variabel data
    let data = {
        assessment_id: assessment_id,
        report_detail: report_detail,
        price: price,
        publish: publish,
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


// 04_SOFT Delete
$("body").on("click", ".tombol-soft-delete", function (e) {
    Swal.fire({
        title: "Yakin Akan Dihapus?",
        text: "Data Akan Dipindahkan Ke Tong sampah",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Hapus",
    }).then((result) => {
        if (result.isConfirmed) {
            var id = $(this).data("id");
            $.ajax({
                url: API_URL + "/api/v1/complete-report/item-assessment/" + id,
                type: "DELETE",
                success: function (response) {
                    Swal.fire("Deleted!", "Data Berhasil Di Hapus", "success");
                    $("#myTable").DataTable().ajax.reload();
                    $("#myTrashTable").DataTable().ajax.reload();
                },
            });
        }
    });
});


// RESTORE DATA
$("body").on("click", ".tombol-restore", function (e) {
    var id = $(this).data("id");
    $.ajax({
        url: API_URL + "/api/v1/complete-report/item-assessment/restore",
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify({
            id: [id],
        }),
        success: function (response) {
            Swal.fire("Restored!", "Data Berhasil Di-restore", "success");
            $("#myTable").DataTable().ajax.reload();
            $("#myTrashTable").DataTable().ajax.reload();
        },
    });
});

// FORCE DELETE
$("body").on("click", ".tombol-force-delete", function (e) {
    Swal.fire({
        title: "Yakin Akan Dihapus?",
        text: "Data Akan Dihapus Secara Permanen",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Hapus",
    }).then((result) => {
        if (result.isConfirmed) {
            var id = $(this).data("id");
            $.ajax({
                url: API_URL + "/api/v1/complete-report/item-assessment/force-delete/" + id,
                type: "DELETE",
                success: function (response) {
                    Swal.fire(
                        "Deleted!",
                        "Data Berhasil Di Hapus permanen",
                        "success"
                    );
                    $("#myTable").DataTable().ajax.reload();
                    $("#myTrashTable").DataTable().ajax.reload();
                },
            });
        }
    });
});

// # MODAL HIDDEN SETTING
var myModalEl = document.getElementById("exampleModal");
myModalEl.addEventListener("hidden.bs.modal", function (event) {
    $("#assessment_id").val("");
    report_detail_editor.setText('');
    $("#price").val("");
    $("#publish").val("");

    //  remove alert
    $("#error-messages").html("");
    $("#pesanError").addClass("d-none");
});
