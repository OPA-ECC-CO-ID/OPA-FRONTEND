import "@/pages/backend/login/cekJwt";
import "@/pages/backend/app-backend";

// #0 Ambil Data ID Modal
let exampleModal = new bootstrap.Modal(document.getElementById("exampleModal"));

// Read Data Zone City
$(document).ready(function () {
    // #01_TAMPIL DATA
    $("#myTable").DataTable({
        processing: true,
        serverside: true,
        ajax: {
            url: API_URL + "/api/v1/ipedia/zone-city?limit=-1",
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
                data: "id_city",
                name: "Id City",
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
                data: "province.province_name",
                name: "Province Name",
            },
            {
                data: "city_name",
                name: "City Name",
            },
            {
                data: "creation_id",
                name: "Creation Id",
            },
            {
                data: "creation_date",
                name: "Creation Date",
            },
            {
                data: "modified_id",
                name: "modified Id",
            },
            {
                data: "modified_date",
                name: "modified Date",
            },
            {
                render: function (data, type, full, meta) {
                    var id = full.id_city;
                    return `
                    <div class="action-table">
                        <button class="badge bg-gradient-warning tombol-edit" data-id="${id}"><i class="fa fa-edit" aria-hidden="true"></i></button>
                        <button class="badge bg-gradient-danger tombol-soft-delete" data-id="${id}"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                    </div>
            `;
                },
            },
        ],
    });
    // #TAMPIL DATA SAMPAH
    $("#myTrashTable").DataTable({
        processing: true,
        serverside: true,
        ajax: {
            url: API_URL + "/api/v1/ipedia/zone-city/deleted?limit=-1",
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
                data: "id_city",
                name: "Id City",
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
                data: "province.province_name",
                name: "Province Name",
            },
            {
                data: "city_name",
                name: "City Name",
            },
            {
                data: "creation_id",
                name: "Creation Id",
            },
            {
                data: "creation_date",
                name: "Creation Date",
            },
            {
                data: "modified_id",
                name: "modified Id",
            },
            {
                data: "modified_date",
                name: "modified Date",
            },
            {
                render: function (data, type, full, meta) {
                    var id = full.id_city;
                    return `
                    <div class="action-table">
                        <button class="badge bg-gradient-info tombol-restore" data-id="${id}"><i class="fa fa-undo" aria-hidden="true"></i></button>
                        <button class="badge bg-gradient-danger tombol-force-delete" data-id="${id}"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                    </div>
            `;
                },
            },
        ],
    });
});

// HANDLE TAMPIL DATA TONG SAMPAH
$("body").on("click", "#btn-show-trash-city", function () {
    $("#btn-show-trash-city").addClass("bg-gradient-danger");
    $("#data_city").hide();
    $("#data_trash_city").show();
    $(".tombol-tambah").hide();
    // hapus warna btn
    $("#btn-show-city").removeClass("bg-gradient-primary");
});

// HANDLE TAMPIL DATA
$("body").on("click", "#btn-show-city", function () {
    $("#btn-show-city").addClass("bg-gradient-primary");
    $("#data_city").show();
    $("#data_trash_city").hide();
    $(".tombol-tambah").show();
    // hapus warna btn
    $("#btn-show-trash-city").removeClass("bg-gradient-danger");
});

// TAMPIL DATA OPTION RELASI Province ID -> Province Name
function tampilDataProvinceName(province_id = "") {
    $.ajax({
        url: API_URL + "/api/v1/ipedia/zone-province?limit=-1",
        type: "GET",
        success: function (response) {
            var selectElement = $("#input_option_province_id");
            selectElement.empty();
            selectElement.append(
                $('<option value="" selected>Choose...</option>')
            );
            response.data.data.forEach(function (option) {
                selectElement.append(
                    $(
                        '<option value="' +
                            option.id_province +
                            '">' +
                            option.province_name +
                            "</option>"
                    )
                );
            });

            if (province_id !== "") {
                $("#input_option_province_id").val(province_id);
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
    tampilDataProvinceName();

    // #2 Hapus event handler .click() sebelumnya jika ada
    $("#tombol-simpan").off("click");

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
        url: API_URL + "/api/v1/ipedia/zone-city/" + id,
        type: "GET",
        success: function (response) {
            // #1 Tampikan Modal
            exampleModal.show();
            $("#tombol-simpan").text("Edit Data");
            $("#modalJudul").text("Edit Data");

            //#2 Tampikan  Data Di Modal
            let isChecked = response.data.publish;
            $("#publish").prop("checked", isChecked);
            tampilDataProvinceName(response.data.province_id);
            $("#city_name").val(response.data.city_name);

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
    let data;

    // #1 Ambil data value id
    let publish = $("#publish").prop("checked");
    let province_id = $("#input_option_province_id").val();
    let city_name = $("#city_name").val();
    let creation_id = Cookies.get("id");
    let modified_id = Cookies.get("id");

    if (id == "") {
        var_url = API_URL + "/api/v1/ipedia/zone-city";
        type_url = "POST";
        data = {
            publish: publish,
            province_id: province_id,
            city_name: city_name,
            creation_id: creation_id,
            modified_id: modified_id,
        };
    } else {
        var_url = API_URL + "/api/v1/ipedia/zone-city/" + id;
        type_url = "PUT";
        data = {
            publish: publish,
            province_id: province_id,
            city_name: city_name,
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
                url: API_URL + "/api/v1/ipedia/zone-city/" + id,
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
    var id_province = $(this).data("id");
    $.ajax({
        url: API_URL + "/api/v1/ipedia/zone-city/restore",
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify({
            id: [id_province],
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
                url: API_URL + "/api/v1/ipedia/zone-city/force-delete/" + id,
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
    $("#province_id").val("");
    $("#city_name").val("");

    //  remove alert
    $("#error-messages").html("");
    $("#pesanError").addClass("d-none");
});
