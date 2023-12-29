import "@/pages/backend/login/cekJwt";
import "@/pages/backend/app-backend";

// #0 Ambil Data ID Modal
let exampleModal = new bootstrap.Modal(document.getElementById("exampleModal")),
    showModal = new bootstrap.Modal(document.getElementById("showModal"));

$(document).ready(function () {
    $("#myTable").DataTable({
        processing: true,
        serverside: true,
        ajax: {
            url: API_URL + "/api/v1/users?limit=-1",
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
                data: null,
                render: function (data, type, row, meta) {
                    // Fungsi ini akan menghasilkan nomor urut yang otomatis bertambah
                    return meta.row + 1;
                },
                name: "No",
            },
            {
                data: "name",
                name: "Name",
            },
            {
                data: "username",
                name: "Username",
            },
            {
                data: "email",
                name: "Email",
            },
            {
                data: "created_at",
                name: "Created At",
            },
            {
                data: "updated_at",
                name: "Updated At",
            },
            {
                render: function (data, type, full, meta) {
                    var id = full.id;
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


// Tampil data Tongsampah
$(document).ready(function () {
    // #01_TAMPIL DATA
    $("#myTrashTable").DataTable({
        processing: true,
        serverside: true,
        ajax: {
            url: API_URL + "/api/v1/users/deleted?limit=-1",
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
                data: null,
                render: function (data, type, row, meta) {
                    // Fungsi ini akan menghasilkan nomor urut yang otomatis bertambah
                    return meta.row + 1;
                },
                name: "No",
            },
            {
                data: "name",
                name: "Name",
            },
            {
                data: "email",
                name: "Email",
            },
            {
                data: "username",
                name: "Username",
            },
            {
                data: "created_at",
                name: "Created At",
            },
            {
                data: "updated_at",
                name: "Updated At",
            },
            {
                render: function (data, type, full, meta) {
                    var id = full.id;
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
$("body").on("click", "#btn-show-trash-users", function () {
    $("#btn-show-trash-users").addClass("bg-gradient-danger");
    $("#data_users").hide();
    $("#data_trash_users").show();
    $(".tombol-tambah").hide();
    $(".section-title").text("Tong Sampah Statement Choise");
    // hapus warna btn
    $("#btn-show-users").removeClass("bg-gradient-primary");
});

// HANDLE TAMPIL DATA USERS
$("body").on("click", "#btn-show-users", function () {
    $("#btn-show-users").addClass("bg-gradient-primary");
    $("#data_users").show();
    $("#data_trash_users").hide();
    $(".tombol-tambah").show();
    $(".section-title").text("Data Member");
    // hapus warna btn
    $("#btn-show-trash-users").removeClass("bg-gradient-danger");
});



// 03_PROSES DETAIL
$("body").on("click", ".tombol-info", function () {
    // #1 Ambil Data Id
    let id = $(this).data("id");
    // #2 Tampilkan Data
    $.ajax({
        url: API_URL + "/api/v1/users/" + id,
        type: "GET",
        success: function (response) {
            // #1 Tampikan Modal
            showModal.show();
            console.log(response.data)
            // $("#tombol-simpan").text("Edit Data");
            // $("#modalJudul").text("Edit Data");

            //#2 Tampikan  Data Di Modal
            $("#val_name").html(response.data.name);
            $("#val_email").html(response.data.email);
            $("#val_username").html(response.data.username);
            $("#val_emailVerified").html(response.data.email_verified_at);
            $("#val_rememberToken").html(response.data.remember_token);
            $("#val_createdAt").html(response.data.created_at);
            $("#val_updatedAt").html(response.data.updated_at);
        },
    });
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
        url: API_URL + "/api/v1/users/" + id,
        type: "GET",
        success: function (response) {
            // #1 Tampikan Modal
            exampleModal.show();
            $("#tombol-simpan").text("Edit Data");
            $("#modalJudul").text("Edit Data");

            //#2 Tampikan  Data Di Modal
            $("#name").val(response.data.name);
            $("#email").val(response.data.email);
            $("#username").val(response.data.username);
            $("#password").val(response.data.password);

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
        var_url = API_URL + "/api/v1/users";
        type_url = "POST";
    } else {
        var_url = API_URL + "/api/v1/users/" + id;
        type_url = "PUT";
    }

    // #1 Ambil data value id
    let name = $("#name").val();
    let email = $("#email").val();
    let username = $("#username").val();
    let password = $("#password").val();
    let creation_id = Cookies.get("id");
    let modified_id = Cookies.get("id");

    // #2. simpan ke variabel data
    let data = {
        name: name,
        email: email,
        username: username,
        password: password,
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
                url: API_URL + "/api/v1/users/" + id,
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
// $("body").on("click", ".tombol-restore", function (e) {
//     Swal.fire({
//         title: "Apakah Anda yakin?",
//         text: "Anda tidak akan bisa mengembalikannya!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Ya, kembalikan!",
//     }).then((result) => {
//         if (result.isConfirmed) {
//             $.ajax({
//                 url: API_URL + "/api/v1/users/restore", // URL endpoint API tanpa ID
//                 type: "POST", // Menggunakan metode POST untuk mengembalikan data
//                 data: {
//                     id: [
//                         $(this).data("id") // Mengirimkan ID sebagai data dalam permintaan POST
//                     ]
//                 },
//                 success: function (response) {
//                     console.log("ID yang dikirim:", $(this).data("id"));
//                     Swal.fire(
//                         "Dikembalikan!",
//                         "Data telah berhasil dikembalikan.",
//                         "success"
//                     );
//                     $("#myTable").DataTable().ajax.reload();
//                     $("#myTrashTable").DataTable().ajax.reload();
//                 },
//                 error: function (xhr, status, error) {
//                     Swal.fire(
//                         "Gagal!",
//                         "Terjadi kesalahan saat mengembalikan data.",
//                         "error"
//                     );
//                 }
//             });
//         }
//     });
// });


// RESTORE DATA
$("body").on("click", ".tombol-restore", function (e) {
    var id = $(this).data("id");
    $.ajax({
        url: API_URL + "/api/v1/users/restore",
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
                url: API_URL + "/api/v1/users/force-delete/" + id,
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
    $("#name").val("");
    $("#email").val("");
    $("#username").val("");
    $("#password").val("");

    //  remove alert
    $("#error-messages").html("");
    $("#pesanError").addClass("d-none");
});
