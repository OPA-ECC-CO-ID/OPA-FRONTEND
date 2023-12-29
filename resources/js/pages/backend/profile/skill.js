import "@/pages/backend/login/cekJwt";
import "@/pages/backend/app-backend";

$(document).ready(function () {
    $("#myTable").DataTable({
        processing: true,
        serverside: true,
        ajax: {
            url: API_URL + "/api/v1/profile/skills?limit=-1",
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
                data: "user_id",
                name: "User Id",
            },
            {
                data: "user.bio.full_name",
                name: "Full Name",
            },
            {
                data: "skill_type",
                name: "Skill Type",
            },
            {
                data: "skill.skill_name",
                name: "Skill",
            },
            {
                data: "creation_date",
                name: "Creation Date",
            },
            {
                render: function (data, type, full, meta) {
                    var id = full.id_skill;
                    return `
                    <div class="action-table">
                    <button class="badge bg-gradient-danger tombol-delete" data-id="${id}"><i class="fa fa-trash-o" aria-hidden="true"  title="Hapus"></i></button>
                    </div>
            `;
                },
            },
        ],
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
                url: API_URL + "/api/v1/profile/skills/" + id,
                type: "DELETE",
                success: function (response) {
                    Swal.fire(
                        "Deleted!",
                        "Your file has been deleted.",
                        "success"
                    );
                    $("#myTable").DataTable().ajax.reload();
                },
            });
        }
    });
});
