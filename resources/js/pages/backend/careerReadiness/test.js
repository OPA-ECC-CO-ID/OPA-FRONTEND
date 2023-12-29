import "@/pages/backend/login/cekJwt";
import "@/pages/backend/app-backend";

let showModal = new bootstrap.Modal(document.getElementById("showModal"));

// #01_TAMPIL DATA
$(document).ready(function () {
    
    $("#myTable").DataTable({
        processing: true,
        serverside: true,
        ajax: {
            url: API_URL + "/api/v1/career-readiness/test",
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
                data: "publish",
                name: "Publish",
                render: function (data, type, full, meta) {
                    // Buat input checkbox berdasarkan nilai 'publish'
                    let isChecked = data ? "checked" : "";
                    return `<div class="form-check">
                                <input class="form-check-input" type="checkbox" ${isChecked} disabled>
                            </div>`;
                },
            },
            {
                data: "user_id",
                name: "User Id",
            },
            {
                data: "start_date",
                name: "Start Date",
            },
            {
                data: "finish_date",
                name: "Finish Date",
            },
            {
                data: "next_test_date",
                name: "Next Test Date",
            },
            {
                data: "interp_general_id",
                name: "Interp General Id",
            },
            {
                data: "interp_general_score",
                name: "Interp General Score",
            },
            {
                data: "evaluation_grade",
                name: "Evaluation Grade",
            },
            {
                data: "evaluation_date",
                name: "Evaluation Date",
            },
            {
                render: function (data, type, full, meta) {
                    let id = full.id_test;
                    return `
                    <div class="action-table">
                        <button class="badge bg-gradient-info tombol-info" data-id="${id}" data-bs-toggle="modal" title="Detail"><i class="fa fa-eye" aria-hidden="true"></i></button>
                        <button class="badge bg-gradient-danger tombol-delete" data-id="${id}"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                    </div>
            `;
                },
            },
        ],
    });
});


// 02_PROSES DETAIL
$("body").on("click", ".tombol-info", function () {
    // #1 Ambil Data Id
    let id = $(this).data("id");
    // #2 Tampilkan Data
    $.ajax({
        url: API_URL + "/api/v1/career-readiness/test/" + id,
        type: "GET",
        success: function (response) {
            // #1 Tampikan Modal
            showModal.show();

            //#2 Tampikan  Data Di Modal
            let isChecked = response.data.publish;
            $("#val_publish").prop("checked", isChecked);
            $("#val_userId").html(response.data.user_id);
            $("#val_startDate").html(response.data.start_date);
            $("#val_finishDate").html(response.data.finish_date);
            $("#val_nextTestDate").html(response.data.next_test_date);
            $("#val_interpGeneralId").html(response.data.interp_general_id);
            $("#val_interpGeneralScore").html(response.data.interp_general_score);
            $("#val_evaluationGrade").html(response.data.evaluation_grade);
            $("#val_evaluationDate").html(response.data.evaluation_date);
            $("#val_modifiedDate").html(response.data.modified_date);
            $("#val_modifiedId").html(response.data.modified_id);
        },
    });
});


// 03_PROSES Delete
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
                url: API_URL + "/api/v1/career-readiness/test/" + id,
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

// // GLOBAL SETUP
// $.ajaxSetup({
//     headers: {
//         "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
//         Authorization: "Bearer " + Cookies.get("jwtToken"),
//     },
// });

// // #02_CREATE DATA
// $("body").on("click", ".tombol-tambah", function (e) {
//     showModal("#exampleModal");
//     $("#tombol-simpan").text("tambah Data");
//     $("#modalJudul").text("Tambah Data");

//     $("#tombol-simpan").click(function () {
//         // #1 Ambil data value id
//         let id_aspect = $("#id_aspect").val();
//         let publish = $("#publish").val();
//         let parent_id = $("#parent_id").val();
//         let aspect_name = $("#aspect_name").val();
//         let aspect_desc = $("#aspect_desc").val();
//         let creation_id = Cookies.get("id");
//         let modified_id = Cookies.get("id");

//         // #2. simpan ke variabel data
//         let data = {
//             id_aspect: id_aspect,
//             publish: publish,
//             parent_id: parent_id,
//             aspect_name: aspect_name,
//             aspect_desc: aspect_desc,
//             creation_id: creation_id,
//             modified_id: modified_id,
//         };

//         // #3 konversi object ke json
//         let jsonData = JSON.stringify(data);

//         // #4 Kirim data API
//         $.ajax({
//             url: API_URL + "/api/v1/career-readiness/aspect", 
//             type: "POST",
//             data: jsonData,
//             contentType: "application/json",
//             success: function (response) {
//                 clearInput();

//                 // #2 Tampilkan Notifikasi
//                 Swal.fire("Sukses", "Data Berhasil Disimpan", "success");
//                 $("#myTable").DataTable().ajax.reload();
//             },
//             error: function (error) {
//                 // Ambil objek error
//                 $("#pesanError").removeClass("d-none");
//                 if (error.responseJSON) {
//                     var errorObj = error.responseJSON.errors;
//                     var errorMessage = "<ul>";
//                     for (var key in errorObj) {
//                         if (errorObj.hasOwnProperty(key)) {
//                             errorMessage +=
//                                 "<li>" + key + ": " + errorObj[key] + "</li>";
//                         }
//                     }
//                     errorMessage += "</ul>";

//                     // Tampilkan pesan error di dalam modal
//                     $("#error-messages").html(errorMessage);
//                 } else {
//                     $("#error-messages").html("Data gagal Disimpan");
//                 }
//             },
//         });
//     });
// });



// // 04_PROSES Delete
// $("body").on("click", ".tombol-delete", function (e) {
//     Swal.fire({
//         title: "Are you sure?",
//         text: "You won't be able to revert this!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//         if (result.isConfirmed) {
//             var id = $(this).data("id");
//             $.ajax({
//                 url: API_URL + "/api/v1/career-readiness/aspect/" + id,
//                 type: "DELETE",
//                 success: function (response) {
//                     Swal.fire(
//                         "Deleted!",
//                         "Your file has been deleted.",
//                         "success"
//                     );
//                     $("#myTable").DataTable().ajax.reload();
//                 },
//             });
//         }
//     });
// });



// // CLEAR INPUT
// function clearInput() {
//     $("#id_aspect").val("");
//     $("#publish").val("");
//     $("#parent_id").val("");
//     $("#aspect_name").val("");
//     $("#aspect_desc").val("");
//     removeError();
// }

// // clear error
// function removeError() {
//     $("#error-messages").html("");
//     $("#pesanError").addClass("d-none");
// }

// // Show Modal
// function showModal(id) {
//     if (id == "#exampleModal") {
//         $("#editModal").attr("id", "exampleModal");
//         clearInput();
//     } else {
//         $("#exampleModal").attr("id", "editModal");
//     }
//     var button = document.createElement("button");
//     button.setAttribute("type", "button");
//     button.setAttribute("style", "display: none;");
//     button.setAttribute("data-bs-toggle", "modal");
//     button.setAttribute("data-bs-target", id);

//     // Tempelkan tombol modal ke dalam body
//     $("body").append(button);

//     // Klik tombol modal secara otomatis
//     $(button).click();
// }
