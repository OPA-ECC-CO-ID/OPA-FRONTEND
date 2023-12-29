import "@/pages/backend/login/cekJwt";
import "@/pages/backend/app-backend";

// CRUD Interp Category
// #0 Ambil Data ID Modal
let exampleModal = new bootstrap.Modal(document.getElementById("exampleModal"));
let tampilModal = new bootstrap.Modal(document.getElementById("tampilModal"));

// #01_TAMPIL DATA
$(document).ready(function () {
    $("#myTable").DataTable({
        processing: true,
        serverside: true,
        ajax: {
            url: API_URL + "/api/v1/personality/interp-category",
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
                data: "id_cat",
                name: "Id Cat",
            },
            {
                data: "aspect",
                name: "Aspect",
            },
            {
                data: "label",
                name: "Label",
            },
            {
                data: "description",
                name: "Description",
            },
            {
                data: "left",
                name: "Left",
            },
            {
                data: "right",
                name: "Right",
            },
            {
                render: function (data, type, full, meta) {
                    var id = full.id_cat;
                    return `
                    <div class="action-table">
                        <button class="badge bg-gradient-info tombol-show" data-id="${id}"><i class="fa fa-eye" aria-hidden="true"></i></button>
                        <button class="badge bg-gradient-warning tombol-edit" data-id="${id}"><i class="fa fa-edit" aria-hidden="true"></i></button>
                    </div>
            `;
                },
            },
        ],
    });
});

// PROSES SHOW
$("body").on("click", ".tombol-show", function () {
    // #1 Ambil Data Id
    var id = $(this).data("id");
    // #2 Tampilkan Data
    $.ajax({
        url: API_URL + "/api/v1/personality/interp-category/" + id,
        type: "GET",
        success: function (response) {
            // #1 Tampikan Modal
            tampilModal.show();

            //#2 Tampikan  Data Di Modal
            $("#id_cat_val").text(response.data.id_cat);
            $("#aspect_val").text(response.data.aspect);
            $("#label_val").text(response.data.label);
            $("#description_val").text(response.data.description);
            $("#left_val").text(response.data.left);
            $("#right_val").text(response.data.right);
            $("#modified_id_val").text(response.data.modified_id);
            $("#modified_date_val").text(response.data.modified_date);
        },
    });
});

// PROSES EDIT
$("body").on("click", ".tombol-edit", function () {
    // #1 Ambil Data Id
    var id = $(this).data("id");
    // #2 Tampilkan Data
    $.ajax({
        url: API_URL + "/api/v1/personality/interp-category/" + id,
        type: "GET",
        success: function (response) {
            // #1 Tampikan Modal
            exampleModal.show();

            //#2 Tampikan  Data Di Modal
            $("#aspect").val(response.data.aspect);
            $("#label").val(response.data.label);
            $("#description").val(response.data.description);
            $("#left").val(response.data.left);
            $("#right").val(response.data.right);

            $("#tombol-simpan").off("click");

            // #4 Simpan Data
            $("#tombol-simpan").click(function () {
                // #1 Ambil data value id
                let aspect = $("#aspect").val();
                let label = $("#label").val();
                let description = $("#description").val();
                let left = $("#left").val();
                let right = $("#right").val();
                let modified_id = Cookies.get("id");

                // #2. simpan ke variabel data
                let data = {
                    aspect: aspect,
                    label: label,
                    description: description,
                    left: left,
                    right: right,
                    modified_id: modified_id,
                };

                // #3 konversi object ke json
                let jsonData = JSON.stringify(data);

                // #4 Kirim data API
                $.ajax({
                    url: API_URL + "/api/v1/personality/interp-category/" + id,
                    type: "PUT",
                    data: jsonData,
                    contentType: "application/json",
                    success: function (response) {
                        // #1 Hide Modal
                        exampleModal.hide();
                        // #2 Tampilkan Notifikasi
                        Swal.fire(
                            "Sukses",
                            "Data Berhasil Disimpan",
                            "success"
                        );
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
                                        "<li>" +
                                        key +
                                        ": " +
                                        errorObj[key] +
                                        "</li>";
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
            });
        },
    });
});

// # MODAL HIDDEN SETTING
var myModalEl = document.getElementById("exampleModal");
myModalEl.addEventListener("hidden.bs.modal", function (event) {
    $("#aspect").val("");
    $("#label").val("");
    $("#description").val("");
    $("#left").val("");
    $("#right").val("");

    //  remove alert
    $("#error-messages").html("");
    $("#pesanError").addClass("d-none");
});
