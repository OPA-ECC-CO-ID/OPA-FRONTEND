import "@/pages/backend/login/cekJwt";
import "@/pages/backend/app-backend";

// #0 Ambil Data ID Modal
let showModal = new bootstrap.Modal(document.getElementById("showModal"));

// #01_TAMPIL DATA
$(document).ready(function () {
    // TAMPIL DATA
    $("#myTable").DataTable({
        processing: true,
        serverside: true,
        ajax: {
            url: API_URL + "/api/v1/personality/user-test?limit=-1",
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
                data: "id_test",
                name: "Id Test",
            },
            {
                data: "user_id",
                name: "User Id",
            },
            {
                data: "is_last_test",
                name: "Is Last Test",
            },
            {
                data: "self_analyze_result",
                name: "Self Analyze Result",
            },
            {
                data: "evaluation_grade",
                name: "Evaluation Grade",
            },
            {
                data: "test_date",
                name: "Test Date",
            },
            {
                render: function (data, type, full, meta) {
                    var id = full.id_test;
                    return `
                <div class="action-table">
                    <button class="badge bg-gradient-info tombol-show" data-id="${id}"><i class="fa fa-eye" aria-hidden="true"></i></button>
                    <button class="badge bg-gradient-danger tombol-delete" data-id="${id}"><i class="fa fa-trash" aria-hidden="true"></i></button>
                </div>`;
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
        url: API_URL + "/api/v1/personality/user-test/" + id,
        type: "GET",
        success: function (response) {
            // #1 Tampikan Modal
            showModal.show();

            //#2 Tampikan  Data Di Modal
            $("#id_test_val").text(response.data.id_test);
            $("#user_id_val").html(response.data.user_id);
            $("#is_last_test_val").text(response.data.is_last_test);
            $("#self_analyze_result_val").text(
                response.data.self_analyze_result
            );
            $("#evaluation_grade_val").html(response.data.evaluation_grade);
            $("#test_date_val").text(response.data.test_date);
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
                url: API_URL + "/api/v1/personality/user-test/" + id,
                type: "DELETE",
                success: function (response) {
                    Swal.fire("Deleted!", "Data Berhasil Di Hapus", "success");
                    $("#myTable").DataTable().ajax.reload();
                },
            });
        }
    });
});
