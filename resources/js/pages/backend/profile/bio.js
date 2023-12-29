import "@/pages/backend/login/cekJwt";
import "@/pages/backend/app-backend";

// #0 Ambil Data ID Modal
let showModal = new bootstrap.Modal(document.getElementById("showModal"));

$(document).ready(function () {
    $("#myTable").DataTable({
        processing: true,
        serverside: true,
        ajax: {
            url: API_URL + "/api/v1/profile/bio?limit=-1",
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
                data: "id_bio",
                name: "Id Bio",
            },
            {
                data: "full_name",
                name: "Full Name",
            },
            {
                data: "gender",
                name: "Gender",
            },
            {
                data: "job_title",
                name: "Job Title",
            },
            {
                data: "city.city_name",
                name: "Bio City",
            },
            {
                data: "creation_date",
                name: "Creation Date",
            },
            {
                render: function (data, type, full, meta) {
                    var id = full.id_bio;
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
        url: API_URL + "/api/v1/profile/bio/" + id,
        type: "GET",
        success: function (response) {
            // #1 Tampikan Modal
            showModal.show();

            // $("#tombol-simpan").text("Edit Data");
            // $("#modalJudul").text("Edit Data");

            //#2 Tampikan  Data Di Modal
            $("#val_idBio").html(response.data.id_bio);
            $("#val_birthPlace").html(response.data.birth_place);
            $("#val_birthDate").html(response.data.birth_date);
            $("#val_photo").html(response.data.photo);
            $("#val_bioCountry").html(response.data.city.province.country.country_name);
            $("#val_bioProvince").html(response.data.city.province.province_name);
            $("#val_bioCity").html(response.data.city.city_name);
            $("#val_shortBio").html(response.data.short_biography);
            $("#val_positive").html(response.data.positive);
            $("#val_negative").html(response.data.negative);
            $("#val_fullName").html(response.data.full_name);
            $("#val_phone").html(response.data.phone);
            $("#val_gender").html(response.data.gender);
            $("#val_jobTitle").html(response.data.job_title);
            $("#val_creationDate").html(response.data.creation_date);
            $("#val_creationId").html(response.data.creation_id);
            $("#val_modifiedDate").html(response.data.modified_date);
            $("#val_modifiedId").html(response.data.modified_id);
        },
    });
});
