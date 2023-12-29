import "@/pages/backend/login/cekJwt";
import "@/pages/backend/app-backend";

// #0 Ambil Data ID Modal
let exampleModal = new bootstrap.Modal(document.getElementById("exampleModal"));

// #01_TAMPIL DATA
$(document).ready(function () {
    $("#myTable").DataTable({
        processing: true,
        serverside: true,
        ajax: {
            url: API_URL + "/api/v1/ipedia/majors?limit=-1",
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
                data: "id_major",
                name: "Id Major",
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
                data: "major_name",
                name: "Major Name",
            },
            {
                data: "creation_date",
                name: "Creation Date",
            },
            {
                data: "creation_id",
                name: "Creation Id",
            },
            {
                data: "modified_date",
                name: "modified Date",
            },
            {
                data: "modified_id",
                name: "modified Id",
            },
            {
                render: function (data, type, full, meta) {
                    var id = full.id_major;
                    return `
                    <div class="action-table">
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
            url: API_URL + "/api/v1/ipedia/majors/deleted?limit=-1",
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
                data: "id_major",
                name: "Id Major",
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
                data: "major_name",
                name: "Major Name",
            },
            {
                data: "creation_date",
                name: "Creation Date",
            },
            {
                data: "creation_id",
                name: "Creation Id",
            },
            {
                data: "modified_date",
                name: "modified Date",
            },
            {
                data: "modified_id",
                name: "modified Id",
            },
            {
                render: function (data, type, full, meta) {
                    var id = full.id_major;
                    return `
                    <div class="action-table">
                        <button class="badge bg-gradient-info tombol-restore" data-id="${id}" ><i class="fa fa-undo" aria-hidden="true"></i></button>
                        <button class="badge bg-gradient-danger tombol-force-delete" data-id="${id}"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                    </div>
            `;
                },
            },
        ],
    });
});


// HANDLE TAMPIL DATA TONG SAMPAH
$("body").on("click", "#btn-show-trash-majors", function () {
    $("#btn-show-trash-majors").addClass("bg-gradient-danger");
    $("#data_majors").hide();
    $("#data_trash_majors").show();
    $(".tombol-tambah").hide();
    // hapus warna btn
    $("#btn-show-majors").removeClass("bg-gradient-primary");
});

// HANDLE TAMPIL DATA
$("body").on("click", "#btn-show-majors", function () {
    $("#btn-show-majors").addClass("bg-gradient-primary");
    $("#data_majors").show();
    $("#data_trash_majors").hide();
    $(".tombol-tambah").show();
    // hapus warna btn
    $("#btn-show-trash-majors").removeClass("bg-gradient-danger");
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
    var id = $(this).data("id");
    // #2 Tampilkan Data
    $.ajax({
        url: API_URL + "/api/v1/ipedia/majors/" + id,
        type: "GET",
        success: function (response) {
            // #1 Tampikan Modal
            exampleModal.show();
            $("#tombol-simpan").text("Edit Data");
            $("#modalJudul").text("Edit Data");

            //#2 Tampikan  Data Di Modal
            let isChecked = response.data.publish;
            $("#publish").prop("checked", isChecked);
            $("#major_name").val(response.data.major_name);

            // #3 Hapus event handler .click() sebelumnya jika ada
            $("#tombol-simpan").off("click");

            // #4 Simpan Data
            $("#tombol-simpan").click(function () {
                simpan(id);
            });
        },
    });
});

// 04_PROSES Delete
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
                url: API_URL + "/api/v1/ipedia/majors/" + id,
                type: "DELETE",
                success: function (response) {
                    Swal.fire("Deleted!", "Data Berhasil Di Hapus", "success");
                    $("#myTable").DataTable().ajax.reload();
                },
            });
        }
    });
});

// 05_PROSES SIMPAN TAMBAH DAN EDIT
function simpan(id = "") {
    let var_url = "";
    let type_url = "";
    let data = {};

    // #1 Ambil data value id
    let publish = $("#publish").prop("checked");
    let major_name = $("#major_name").val();
    let creation_id = Cookies.get("id");
    let modified_id = Cookies.get("id");

    // #2 Cek data
    if (id == "") {
        var_url = API_URL + "/api/v1/ipedia/majors";
        type_url = "POST";
        data = {
            publish: publish,
            major_name: major_name,
            creation_id: creation_id,
            modified_id: modified_id,
        };
    } else {
        var_url = API_URL + "/api/v1/ipedia/majors/" + id;
        type_url = "PUT";
        data = {
            publish: publish,
            major_name: major_name,
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
            // #1 Hide Modal
            exampleModal.hide();
            // #2 Tampilkan Notifikasi
            Swal.fire("Sukses", "Data Berhasil Disimpan", "success");
            $("#myTable").DataTable().ajax.reload();
        },
        error: function (error) {
            // #1 Ambil objek error
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
                url: API_URL + "/api/v1/ipedia/majors/" + id,
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
    var id_edu_type = $(this).data("id");
    $.ajax({
        url: API_URL + "/api/v1/ipedia/majors/restore",
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify({
            id: [id_edu_type],
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
                url: API_URL + "/api/v1/ipedia/majors/force-delete/" + id,
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
    $("#publish").val("");
    $("#major_name").val("");
    $("#publish").prop("checked", false);

    //  remove alert
    $("#error-messages").html("");
    $("#pesanError").addClass("d-none");
});
