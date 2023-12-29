import "@/pages/backend/login/cekJwt";
import "@/pages/backend/app-backend";

// #0 Ambil Data ID Modal
let showModal = new bootstrap.Modal(document.getElementById("showModal"));

$(document).ready(function () {
    $("#myTable").DataTable({
        processing: true,
        serverside: true,
        ajax: {
            url: API_URL + "/api/v1/profile/last-edu?limit=-1",
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
                data: "id_last_edu",
                name: "Id Last Edu",
            },
            {
                data: "university.university_name",
                name: "University",
            },
            {
                data: "education_type.type_name",
                name: "Education Type",
            },
            {
                data: "major.major_name",
                name: "Major",
            },
            {
                data: "submajor",
                name: "Submajor",
            },
            {
                data: "started_date",
                name: "Started Date",
            },
            {
                data: "finished_date",
                name: "Finished Date",
            },
            {
                data: "creation_date",
                name: "Creation Date",
            },
            {
                render: function (data, type, full, meta) {
                    var id = full.id_last_edu;
                    return `
                    <div class="action-table">
                        <button class="badge bg-gradient-info tombol-info" data-id="${id}" data-bs-toggle="modal" data-bs-target="#editModal" title="Detail"><i class="fa fa-eye" aria-hidden="true"></i></button>
                    </div>
            `;
                },
            },
        ],
    });
});



$("body").on("click", ".tombol-info", function () {
    // #1 Ambil Data Id
    let id = $(this).data("id");
    // #2 Tampilkan Data
    $.ajax({
        url: API_URL + "/api/v1/profile/last-edu/" + id,
        type: "GET",
        success: function (response) {
            // #1 Tampikan Modal
            showModal.show();
            // $("#tombol-simpan").text("Edit Data");
            // $("#modalJudul").text("Edit Data");

            //#2 Tampikan  Data Di Modal
            $("#val_idLastEdu").html(response.data.id_last_edu);
            $("#val_university").html(response.data.university.university_name);
            $("#val_educationType").html(response.data.education_type.type_name);
            $("#val_major").html(response.data.major.major_name);
            $("#val_submajor").html(response.data.submajor);
            $("#val_startedDate").html(response.data.started_date);
            $("#val_finishedDate").html(response.data.finished_date);
            $("#val_creationDate").html(response.data.creation_date);
            $("#val_creationId").html(response.data.creation_id);
            $("#val_modifiedDate").html(response.data.modified_date);
            $("#val_modifiedId").html(response.data.modified_id);
        },
    });
});
