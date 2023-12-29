import "@/pages/backend/login/cekJwt";
import "@/pages/backend/app-backend";

// CRUD
let showModal = new bootstrap.Modal(document.getElementById("showModal"));
// let exampleModal = new bootstrap.Modal(document.getElementById("exampleModal"));

// #01_TAMPIL DATA
$(document).ready(function () {
    // TAMPIL DATA
    $("#myTable").DataTable({
        processing: true,
        serverside: true,
        ajax: {
            url: API_URL + "/api/v1/icareer/user-test",
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
                data: "time_test",
                name: "Time Test",
            },
            {
                data: "is_last_input",
                name: "Is Last Input",
            },
            {
                data: "is_input_eval_grade",
                name: "Is Input Eval Grade",
            },
            {
                data: "evaluation_grade",
                name: "Evaluation Grade",
            },
            {
                data: "type_career",
                name: "Type Career",
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
        url: API_URL + "/api/v1/icareer/user-test/" + id,
        type: "GET",
        success: function (response) {
            // #1 Tampikan Modal
            showModal.show();

            //#2 Tampikan  Data Di Modal
            $("#id_test_val").text(response.data.id_test);
            $("#user_id_val").text(response.data.user_id);
            $("#time_test_val").text(response.data.time_test);
            $("#is_last_input_val").text(response.data.is_last_input);
            $("#is_input_eval_grade_val").html(
                response.data.is_input_eval_grade
            );
            $("#evaluation_grade_val").text(response.data.evaluation_grade);
            $("#type_career_val").html(response.data.type_career);
            $("#score_executor_val").text(response.data.score_executor);
            $("#score_thinkers_val").html(response.data.score_thinkers);
            $("#score_creators_val").html(response.data.score_creators);
            $("#score_savior_val").html(response.data.score_savior);
            $("#score_persuaders_val").html(response.data.score_persuaders);
            $("#score_organizers_val").html(response.data.score_organizers);
            $("#modified_date_val").html(response.data.modified_date);
            $("#modified_id_val").html(response.data.modified_id);
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
                url: API_URL + "/api/v1/icareer/user-test/" + id,
                type: "DELETE",
                success: function (response) {
                    Swal.fire("Deleted!", "Data Berhasil Di Hapus", "success");
                    $("#myTable").DataTable().ajax.reload();
                },
            });
        }
    });
});
