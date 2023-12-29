import "@/pages/backend/login/cekJwt";
import "@/pages/backend/app-backend";

// #0 Ambil Data ID Modal
let tampilModal = new bootstrap.Modal(document.getElementById("tampilModal"));
let exampleModal = new bootstrap.Modal(document.getElementById("exampleModal"));

// #01_TAMPIL DATA
$(document).ready(function () {
    // TAMPIL DATA
    $("#myTable").DataTable({
        processing: true,
        serverside: true,
        ajax: {
            url: API_URL + "/api/v1/personality/statement-choice?limit=-1",
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
                name: "Id Choice",
            },
            {
                data: "publish",
                name: "Publish",
                render: function (data, type, full, meta) {
                    // Buat input checkbox berdasarkan nilai 'publish'
                    var isChecked = data ? "checked" : "";
                    return `<div class="form-check">
                            <input class="form-check-input" type="checkbox" ${isChecked} disabled>
                        </div>`;
                },
            },
            {
                data: "page_no",
                name: "Page No",
            },
            {
                data: "interp_category.aspect",
                name: "Aspect",
            },
            {
                data: "statement",
                name: "Statement",
            },
            {
                render: function (data, type, full, meta) {
                    var id = full.id_choice;
                    return `
                <div class="action-table">
                    <button class="badge bg-gradient-info tombol-show" data-id="${id}"><i class="fa fa-eye" aria-hidden="true"></i></button>
                    <button class="badge bg-gradient-warning tombol-edit" data-id="${id}"><i class="fa fa-edit" aria-hidden="true"></i></button>
                    <button class="badge bg-gradient-danger tombol-soft-delete" data-id="${id}"><i class="fa fa-trash" aria-hidden="true"></i></button>
                </div>`;
                },
            },
        ],
    });

    // TAMPIL DATA TONG SAMPAH
    $("#myTrashTable").DataTable({
        processing: true,
        serverside: true,
        ajax: {
            url:
                API_URL +
                "/api/v1/personality/statement-choice/deleted?limit=-1",
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
                name: "Id Choice",
            },
            {
                data: "publish",
                name: "Publish",
                render: function (data, type, full, meta) {
                    // Buat input checkbox berdasarkan nilai 'publish'
                    var isChecked = data ? "checked" : "";
                    return `<div class="form-check">
                                <input class="form-check-input" type="checkbox" ${isChecked} disabled>
                            </div>`;
                },
            },
            {
                data: "page_no",
                name: "Page No",
            },
            {
                data: "interp_category.aspect",
                name: "Aspect",
            },

            {
                data: "statement",
                name: "Statement",
            },

            {
                render: function (data, type, full, meta) {
                    var id = full.id_choice;
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
$("body").on("click", "#btn-show-trash-statement", function () {
    $("#btn-show-trash-statement").addClass("bg-gradient-danger");
    $("#data_statement_choise").hide();
    $("#data_trash_statment_choise").show();
    $(".tombol-tambah").hide();
    $(".section-title").text("Tong Sampah Statement Choise");
    // hapus warna btn
    $("#btn-show-statement").removeClass("bg-gradient-primary");
});

// HANDLE TAMPIL DATA
$("body").on("click", "#btn-show-statement", function () {
    $("#btn-show-statement").addClass("bg-gradient-primary");
    $("#data_statement_choise").show();
    $("#data_trash_statment_choise").hide();
    $(".tombol-tambah").show();
    $(".section-title").text("Statement Choise");
    // hapus warna btn
    $("#btn-show-trash-statement").removeClass("bg-gradient-danger");
});

// PROSES SHOW
$("body").on("click", ".tombol-show", function () {
    // #1 Ambil Data Id
    var id = $(this).data("id");
    // #2 Tampilkan Data
    $.ajax({
        url: API_URL + "/api/v1/personality/statement-choice/" + id,
        type: "GET",
        success: function (response) {
            // #1 Tampikan Modal
            tampilModal.show();

            //#2 Tampikan  Data Di Modal
            $("#id_choice_val").text(response.data.id_choice);
            var isChecked = response.data.publish;
            $("#publish_val").prop("checked", isChecked);
            $("#page_no_val").text(response.data.page_no);
            $("#cat_id_val").text(response.data.cat_id);
            $("#statement_val").html(response.data.statement);
            $("#creation_id_val").text(response.data.creation_id);
            $("#creation_date_val").html(response.data.creation_date);
            $("#modified_id_val").text(response.data.modified_id);
            $("#modified_date_val").html(response.data.modified_date);
        },
    });
});

// TAMPIL DATA OPTION RELASI CAT ID -> Aspect
function tampilDataAspectCatId(cat_id = "") {
    $.ajax({
        url: API_URL + "/api/v1/personality/interp-category",
        type: "GET",
        success: function (response) {
            var selectElement = $("#input_option_cat_id");
            selectElement.empty();
            selectElement.append(
                $('<option value="" selected>Choose...</option>')
            );
            response.data.data.forEach(function (option) {
                selectElement.append(
                    $(
                        '<option value="' +
                            option.id_cat +
                            '">' +
                            option.aspect +
                            "</option>"
                    )
                );
            });

            if (cat_id !== "") {
                $("#input_option_cat_id").val(cat_id);
            }
        },
        error: function (error) {
            console.log(error);
        },
    });
}
// PROSES TAMBAH
$("body").on("click", ".tombol-tambah", function (e) {
    // #1 Tampilkan Modal
    exampleModal.show();
    $("#tombol-simpan").text("tambah Data");
    $("#modalJudul").text("Tambah Data");

    // #2 Hapus event handler .click() sebelumnya jika ada
    $("#tombol-simpan").off("click");

    // #3 Ambil data Cat Id dan Aspect dari API untuk mengisi elemen select
    tampilDataAspectCatId();

    // #4 Simpan Data
    $("#tombol-simpan").click(function (e) {
        e.preventDefault();
        simpan();
    });
});

// PROSES EDIT
$("body").on("click", ".tombol-edit", function () {
    // #1 Ambil Data Id
    var id = $(this).data("id");
    // #2 Tampilkan Data
    $.ajax({
        url: API_URL + "/api/v1/personality/statement-choice/" + id,
        type: "GET",
        success: function (response) {
            // #1 Tampikan Modal
            exampleModal.show();
            $("#tombol-simpan").text("Edit Data");
            $("#modalJudul").text("Edit Data");

            //#2 Tampikan  Data Di Modal
            let isChecked = response.data.publish;
            $("#publish").prop("checked", isChecked);
            $("#page_no").val(response.data.page_no);
            tampilDataAspectCatId(response.data.cat_id);
            $("#statement").val(response.data.statement);

            // #3 Hapus event handler .click() sebelumnya jika ada
            $("#tombol-simpan").off("click");

            // #4 Simpan Data
            $("#tombol-simpan").click(function () {
                simpan(id);
            });
        },
    });
});

// PROSES SIMPAN TAMBAH DAN EDIT
function simpan(id = "") {
    let var_url = "";
    let type_url = "";

    // #1 Ambil data value id
    let publish = $("#publish").prop("checked");
    let page_no = $("#page_no").val();
    let cat_id = $("#input_option_cat_id").val();
    let statement = $("#statement").val();
    let creation_id = Cookies.get("id");
    let modified_id = Cookies.get("id");

    // #2. simpan ke variabel data
    let data;

    if (id == "") {
        var_url = API_URL + "/api/v1/personality/statement-choice";
        type_url = "POST";
        data = {
            publish: publish,
            page_no: page_no,
            cat_id: cat_id,
            statement: statement,
            creation_id: creation_id,
            modified_id: modified_id,
        };
    } else {
        var_url = API_URL + "/api/v1/personality/statement-choice/" + id;
        type_url = "PUT";

        data = {
            publish: publish,
            page_no: page_no,
            cat_id: cat_id,
            statement: statement,
            modified_id: modified_id,
        };
    }

    // #3 konversi object ke json
    let jsonData = JSON.stringify(data);

    // #4 Kirim data API
    $.ajax({
        url: var_url,
        type: type_url,
        data: jsonData,
        contentType: "application/json",
        success: function (response) {
            exampleModal.hide();
            // #2 Tampilkan Notifikasi
            Swal.fire("Sukses", "Data  Berhasil Disimpan", "success");
            $("#myTable").DataTable().ajax.reload();
        },
        error: function (error) {
            console.log(error);
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

// SOFT DELETE
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
                url: API_URL + "/api/v1/personality/statement-choice/" + id,
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
        url: API_URL + "/api/v1/personality/statement-choice/restore",
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify({
            id_choice: [id],
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
                url:
                    API_URL +
                    "/api/v1/personality/statement-choice/force-delete/" +
                    id,
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
let myModalEl = document.getElementById("exampleModal");
myModalEl.addEventListener("hidden.bs.modal", function (event) {
    //#2 Tampikan  Data Di Modal
    $("#publish").prop("checked", false);
    $("#page_no").val("");
    $("#cat_id").val("");
    $("#statement").val("");

    //  remove alert
    $("#error-messages").html("");
    $("#pesanError").addClass("d-none");
});
