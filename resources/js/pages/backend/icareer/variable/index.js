import "@/pages/backend/login/cekJwt";
import "@/pages/backend/app-backend";

import Quill from "quill";
import "quill/dist/quill.snow.css";

// CRUD

// #0 Ambil Data ID Modal
let exampleModal = new bootstrap.Modal(document.getElementById("exampleModal")),
    showModal = new bootstrap.Modal(document.getElementById("showModal"));

// #01_TAMPIL DATA
$(document).ready(function () {
    $("#myTable").DataTable({
        processing: true,
        serverside: true,
        ajax: {
            url: API_URL + "/api/v1/icareer/variable",
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
                data: "id_variable",
                name: "Id",
            },
            {
                data: "variable_name",
                name: "Variable Name",
            },
            {
                data: "global_description",
                name: "Global Description",
            },
            {
                render: function (data, type, full, meta) {
                    var id = full.id_variable;
                    return `
                    <div class="action-table">
                        <button class="badge bg-gradient-info tombol-show-data" data-id="${id}"><i class="fa fa-eye" aria-hidden="true"></i></button>
                        <button class="badge bg-gradient-warning tombol-edit" data-id="${id}" data-bs-toggle="modal" data-bs-target="#editModal"><i class="fa fa-edit" aria-hidden="true"></i></button>
                    </div>
            `;
                },
            },
        ],
    });
});

// #02_SHOW MODAL
$("body").on("click", ".tombol-show-data", function (e) {
    var id = $(this).data("id");
    $.ajax({
        url: API_URL + "/api/v1/icareer/variable/" + id,
        type: "GET",
        success: function (response) {
            // #1 Tampikan Modal
            showModal.show();
            console.log(response.data.id_variable);
            $("#id_variable_val").html(response.data.id_variable);
            $("#variable_name_val").html(response.data.variable_name);
            $("#global_description_val").html(response.data.global_description);
            $("#desc_val").html(response.data.desc);
            $("#ability_val").html(response.data.ability);
            $("#interest_val").html(response.data.interest);
            $("#personality_val").html(response.data.personality);
            $("#typical_activity_val").html(response.data.typical_activity);
            $("#interpretasi_val").html(response.data.interpretasi);
            $("#creation_id_val").html(response.data.creation_id);
            $("#creation_date_val").html(response.data.creation_date);
            $("#modified_id_val").html(response.data.modified_id);
            $("#modified_date_val").html(response.data.modified_date);
        },
    });
});

// konfigurasi Quilljs
var desc_editor = new Quill("#desc", {
    theme: "snow",
});

// PROSES EDIT
$("body").on("click", ".tombol-edit", function () {
    // #1 Ambil Data Id
    var id = $(this).data("id");
    // #2 Tampilkan Data
    $.ajax({
        url: API_URL + "/api/v1/icareer/variable/" + id,
        type: "GET",
        success: function (response) {
            // #1 Tampikan Modal
            exampleModal.show();
            $("#tombol-simpan").text("Edit Data");
            $("#modalJudul").text("Edit Data");

            //#2 Tampikan  Data Di Modal
            $("#id_variable").val(id);
            $("#variable_name").val(response.data.variable_name);
            $("#global_description").val(response.data.global_description);
            desc_editor.clipboard.dangerouslyPasteHTML(response.data.desc);
            $("#ability").val(response.data.ability);
            $("#interest").val(response.data.interest);
            $("#personality").val(response.data.personality);
            $("#typical_activity").val(response.data.typical_activity);
            $("#interpretasi").val(response.data.interpretasi);

            // #3 Hapus event handler .click() sebelumnya jika ada
            $("#tombol-simpan").off("click");

            // #4 Simpan Data
            $("#tombol-simpan").click(function () {
                // #1 Ambil data value id
                let variable_name = $("#variable_name").val();
                let global_description = $("#global_description").val();
                var desc = desc_editor.root.innerHTML;
                let ability = $("#ability").val();
                let interest = $("#interest").val();
                let personality = $("#personality").val();
                let typical_activity = $("#typical_activity").val();
                let interpretasi = $("#interpretasi").val();
                let modified_id = Cookies.get("id");

                // #2. simpan ke variabel data
                let data = {
                    variable_name: variable_name,
                    global_description: global_description,
                    desc: desc,
                    ability: ability,
                    interest: interest,
                    personality: personality,
                    personality: personality,
                    typical_activity: typical_activity,
                    typical_activity: typical_activity,
                    interpretasi: interpretasi,
                    modified_id: modified_id,
                };

                // #3 konversi object ke json
                let jsonData = JSON.stringify(data);

                // #4 Kirim data API
                $.ajax({
                    url: API_URL + "/api/v1/icareer/variable/" + id,
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
                        // Ambil objek error
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
    $("#variable_name").val("");
    $("#global_description").val("");
    desc_editor.setText("");
    $("#ability").val("");
    $("#interest").val("");
    $("#personality").val("");
    $("#typical_activity").val("");
    $("#interpretasi").val("");
    //  remove alert
    $("#error-messages").html("");
    $("#pesanError").addClass("d-none");
});
