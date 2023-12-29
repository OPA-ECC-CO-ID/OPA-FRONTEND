import "@/pages/backend/login/cekJwt";
import "@/pages/backend/app-backend";

// CRUD STATEMENT
// #0 Ambil Data ID Modal
let exampleModal = new bootstrap.Modal(document.getElementById("exampleModal"));
let showModal = new bootstrap.Modal(document.getElementById("showModal"));

// #01_TAMPIL DATA
$(document).ready(function () {
    // TAMPIL DATA
    $("#myTable").DataTable({
        processing: true,
        serverside: true,
        ajax: {
            url: API_URL + "/api/v1/icareer/statement?limit=-1",
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
                data: "id_statement",
                name: "Id",
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
                data: "page",
                name: "Page",
            },
            {
                data: "order_number",
                name: "Order Number",
            },
            {
                data: "variable.variable_name",
                name: "Variable Name",
            },
            {
                data: "statement",
                name: "Statement",
            },
            {
                data: "modified_date",
                name: "Modified Date",
            },
            {
                render: function (data, type, full, meta) {
                    var id = full.id_statement;
                    return `
                    <div class="action-table">
                     <button class="badge bg-gradient-info tombol-show-data" data-id="${id}"><i class="fa fa-eye" aria-hidden="true"></i></button>
                        <button class="badge bg-gradient-warning tombol-edit" data-id="${id}" data-bs-toggle="modal" data-bs-target="#editModal"><i class="fa fa-edit" aria-hidden="true"></i></button>
                        <button class="badge bg-gradient-danger tombol-soft-delete" data-id="${id}"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                    </div>
            `;
                },
            },
        ],
    });
    $("#myTrashTable").DataTable({
        processing: true,
        serverside: true,
        ajax: {
            url: API_URL + "/api/v1/icareer/statement/deleted?limit=-1",
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
                data: "id_statement",
                name: "Id",
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
                data: "page",
                name: "Page",
            },
            {
                data: "order_number",
                name: "Order Number",
            },
            {
                data: "variable.variable_name",
                name: "Variable Name",
            },
            {
                data: "statement",
                name: "Statement",
            },
            {
                data: "modified_date",
                name: "Modified Date",
            },
            {
                render: function (data, type, full, meta) {
                    var id = full.id_statement;
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
    $("#data-show-statement").hide();
    $("#data-show-trash-statement").show();
    $(".tombol-tambah").hide();
    $(".section-title").text("Tong Sampah Statement");
    // hapus warna btn
    $("#btn-show-statement").removeClass("bg-gradient-primary");
});

// HANDLE TAMPIL DATA
$("body").on("click", "#btn-show-statement", function () {
    $("#btn-show-statement").addClass("bg-gradient-primary");
    $("#data-show-statement").show();
    $("#data-show-trash-statement").hide();
    $(".tombol-tambah").show();
    $(".section-title").text("Statement");
    // hapus warna btn
    $("#btn-show-trash-statement").removeClass("bg-gradient-danger");
});

// SHOW MODAL
$("body").on("click", ".tombol-show-data", function (e) {
    var id = $(this).data("id");
    $.ajax({
        url: API_URL + "/api/v1/icareer/statement/" + id,
        type: "GET",
        success: function (response) {
            // #1 Tampikan Modal
            showModal.show();
            console.log(response.data.id_variable);
            var isChecked = response.data.publish;
            $("#publish_val").prop("checked", isChecked);
            $("#page_val").html(response.data.page);
            $("#order_number_val").html(response.data.order_number);
            $("#variable_id_val").html(response.data.variable_id);
            $("#statement_val").html(response.data.statement);
            $("#creation_id_val").html(response.data.creation_id);
            $("#creation_date_val").html(response.data.creation_date);
            $("#modified_id_val").html(response.data.modified_id);
            $("#modified_date_val").html(response.data.modified_date);
        },
    });
});

// TAMPIL DATA OPTION RELASI Variable ID -> Variable Name
function tampilDataVariabelName(variable_id = "") {
    $.ajax({
        url: API_URL + "/api/v1/icareer/variable?limit=-1",
        type: "GET",
        success: function (response) {
            var selectElement = $("#input_option_variable_id");
            selectElement.empty();
            selectElement.append(
                $('<option value="" selected>Choose...</option>')
            );
            response.data.data.forEach(function (option) {
                selectElement.append(
                    $(
                        '<option value="' +
                            option.id_variable +
                            '">' +
                            option.variable_name +
                            "</option>"
                    )
                );
            });

            if (variable_id !== "") {
                $("#input_option_variable_id").val(variable_id);
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

    // #3 tampilkan data option
    tampilDataVariabelName();

    // #4 Simpan Data
    $("#tombol-simpan").click(function () {
        simpan();
    });
});

// PROSES EDIT
$("body").on("click", ".tombol-edit", function () {
    // #1 Ambil Data Id
    var id = $(this).data("id");
    // #2 Tampilkan Data
    $.ajax({
        url: API_URL + "/api/v1/icareer/statement/" + id,
        type: "GET",
        success: function (response) {
            // #1 Tampikan Modal
            exampleModal.show();
            $("#tombol-simpan").text("Edit Data");
            $("#modalJudul").text("Edit Data");

            //#2 Tampikan  Data Di Modal
            let isChecked = response.data.publish;
            $("#publish").prop("checked", isChecked);
            $("#page").val(response.data.page);
            $("#order_number").val(response.data.order_number);
            // $("#variable_id").val(response.data.variable_id);
            tampilDataVariabelName(response.data.variable_id);
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

// PROSES Delete
$("body").on("click", ".tombol-delete", function (e) {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        if (result.isConfirmed) {
            var id = $(this).data("id");
            $.ajax({
                url: API_URL + "/api/v1/icareer/statement/" + id,
                type: "DELETE",
                success: function (response) {
                    Swal.fire("Deleted!", "Data Berhasil Di Hapus", "success");
                    $("#myTable").DataTable().ajax.reload();
                },
                error: function (errors) {
                    console.log(errors);
                },
            });
        }
    });
});

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
                url: API_URL + "/api/v1/icareer/statement/" + id,
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
        url: API_URL + "/api/v1/icareer/statement/restore",
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
                url: API_URL + "/api/v1/icareer/statement/force-delete/" + id,
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

// SIMPAN DATA TAMBAH DAN EDIT
function simpan(id = "") {
    let var_url = "";
    let type_url = "";

    // #1 Ambil data value id
    let publish = $("#publish").prop("checked");
    let page = $("#page").val();
    let order_number = $("#order_number").val();
    let variable_id = $("#input_option_variable_id").val();
    let statement = $("#statement").val();
    let creation_id = Cookies.get("id");
    let modified_id = Cookies.get("id");

    // #2. simpan ke variabel data
    let data;

    if (id == "") {
        var_url = API_URL + "/api/v1/icareer/statement";
        type_url = "POST";

        data = {
            publish: publish,
            page: page,
            order_number: order_number,
            variable_id: variable_id,
            statement: statement,
            creation_id: creation_id,
            modified_id: modified_id,
        };
    } else {
        var_url = API_URL + "/api/v1/icareer/statement/" + id;
        type_url = "PUT";

        data = {
            publish: publish,
            page: page,
            order_number: order_number,
            variable_id: variable_id,
            statement: statement,
            modified_id: modified_id,
        };
    }

    // #3 konversi object ke json
    let jsonData = JSON.stringify(data);

    console.log(jsonData);
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
    $("#page").val("");
    $("#order_number").val("");
    $("#variable_id").val("");
    $("#statement").val("");
    $("#publish").prop("checked", false);
    //  remove alert
    $("#error-messages").html("");
    $("#pesanError").addClass("d-none");
});
