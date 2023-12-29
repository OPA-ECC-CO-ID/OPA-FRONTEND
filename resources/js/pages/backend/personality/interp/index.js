import "@/pages/backend/login/cekJwt";
import "@/pages/backend/app-backend";
import Quill from "quill";
import "quill/dist/quill.snow.css";

// CRUD
// #0 Ambil Data ID Modal
let tampilModal = new bootstrap.Modal(document.getElementById("tampilModal"));
let exampleModal = new bootstrap.Modal(document.getElementById("exampleModal"));

// #01_TAMPIL DATA
$(document).ready(function () {
    $("#myTable").DataTable({
        processing: true,
        serverside: true,
        ajax: {
            url: API_URL + "/api/v1/personality/interp?limit=-1",
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
                data: "id_interp",
                name: "Id Interp",
            },
            {
                data: "alias_code",
                name: "Alias Code",
            },
            {
                data: "interpretasi",
                name: "Interpretasi",
            },
            {
                data: "range_start",
                name: "Range Start",
            },
            {
                data: "range_end",
                name: "Range End",
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
                render: function (data, type, full, meta) {
                    var id = full.id_interp;
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
        url: API_URL + "/api/v1/personality/interp/" + id,
        type: "GET",
        success: function (response) {
            // #1 Tampikan Modal
            tampilModal.show();

            //#2 Tampikan  Data Di Modal
            $("#alias_code_val").text(response.data.alias_code);
            $("#interpretasi_val").html(response.data.interpretasi);
            $("#range_start_val").text(response.data.range_start);
            $("#range_end_val").text(response.data.range_end);
            $("#powers_val").html(response.data.powers);
            $("#less_val").html(response.data.less);
            $("#dev_advice_val").html(response.data.dev_advice);
            $("#psychological_dynamics_val").text(
                response.data.psychological_dynamics
            );
            var isChecked = response.data.publish;
            $("#publish_val").prop("checked", isChecked);
        },
    });
});

// Konfigurasi Quill Js
var interpretasi_editor = new Quill("#interpretasi", {
    theme: "snow",
});
var powers_editor = new Quill("#powers", {
    theme: "snow",
});
var less_editor = new Quill("#less", {
    theme: "snow",
});
var dev_advice_editor = new Quill("#dev_advice", {
    theme: "snow",
});

// PROSES EDIT
$("body").on("click", ".tombol-edit", function () {
    // #1 Ambil Data Id
    var id = $(this).data("id");
    // #2 Tampilkan Data
    $.ajax({
        url: API_URL + "/api/v1/personality/interp/" + id,
        type: "GET",
        success: function (response) {
            // #1 Tampikan Modal
            exampleModal.show();

            //#2 Tampikan  Data Di Modal
            let isChecked = response.data.publish;
            $("#publish").prop("checked", isChecked);
            $("#alias_code").val(response.data.alias_code);
            interpretasi_editor.clipboard.dangerouslyPasteHTML(
                response.data.interpretasi
            );
            $("#range_start").val(response.data.range_start);
            $("#range_end").val(response.data.range_end);
            $("#tendency_work").val(response.data.tendency_work);
            $("#tendency_communication").val(
                response.data.tendency_communication
            );
            powers_editor.clipboard.dangerouslyPasteHTML(response.data.powers);
            less_editor.clipboard.dangerouslyPasteHTML(response.data.less);
            dev_advice_editor.clipboard.dangerouslyPasteHTML(
                response.data.dev_advice
            );

            // #3 Hapus event handler .click() sebelumnya jika ada
            $("#tombol-simpan").off("click");

            // #4 Simpan Data
            $("#tombol-simpan").click(function () {
                // #1 Ambil data value id
                let publish = $("#publish").prop("checked");
                let cat_id = response.data.cat_id;
                let alias_code = response.data.alias_code;
                let range_start = $("#range_start").val();
                var interpretasi = interpretasi_editor.root.innerHTML;
                let interpretasi_alt = response.data.interpretasi_alt;
                let complete_interpretation =
                    response.data.complete_interpretation;
                let range_end = $("#range_end").val();
                let description = response.data.description;
                let tendency_work = $("#tendency_work").val();
                let tendency_communication = $("#tendency_communication").val();
                var powers = powers_editor.root.innerHTML;
                var less = less_editor.root.innerHTML;
                let psychological_dynamics =
                    response.data.psychological_dynamics;
                var dev_advice = dev_advice_editor.root.innerHTML;
                let modified_id = Cookies.get("id");
                let modified_date = "2023-04-15 14:30:45";

                // #2. simpan ke variabel data
                let data = {
                    publish: publish,
                    cat_id: cat_id,
                    alias_code: alias_code,
                    range_start: range_start,
                    interpretasi: interpretasi,
                    interpretasi_alt: interpretasi_alt,
                    complete_interpretation: complete_interpretation,
                    range_end: range_end,
                    description: description,
                    tendency_work: tendency_work,
                    tendency_communication: tendency_communication,
                    powers: powers,
                    less: less,
                    psychological_dynamics: psychological_dynamics,
                    dev_advice: dev_advice,
                    modified_id: modified_id,
                    modified_date: modified_date,
                };

                // #3 konversi object ke json
                let jsonData = JSON.stringify(data);

                // #4 Kirim data API
                $.ajax({
                    url: API_URL + "/api/v1/personality/interp/" + id,
                    type: "PUT",
                    data: jsonData,
                    contentType: "application/json",
                    success: function (response) {
                        exampleModal.hide();
                        // #2 Tampilkan Notifikasi
                        Swal.fire(
                            "Sukses",
                            "Data Id  Berhasil Disimpan",
                            "success"
                        );
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
let myModalEl = document.getElementById("exampleModal");
myModalEl.addEventListener("hidden.bs.modal", function (event) {
    //#2 Tampikan  Data Di Modal
    $("#alias_code").text("");
    interpretasi_editor.setText("");
    $("#range_start").text("");
    $("#range_end").text("");
    powers_editor.setText("");
    less_editor.setText("");
    dev_advice_editor.setText("");
    $("#psychological_dynamics").text("");
    $("#publish").prop("checked", false);

    //  remove alert
    $("#error-messages").html("");
    $("#pesanError").addClass("d-none");
});
