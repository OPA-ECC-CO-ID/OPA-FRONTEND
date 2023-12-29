import "@/pages/backend/login/cekJwt";
import "@/pages/backend/app-backend";

// CRUD User Order
// #0 Ambil Data ID Modal
let showModal = new bootstrap.Modal(document.getElementById("showModal"));

// #01_TAMPIL DATA
$(document).ready(function () {
    $("#myTable").DataTable({
        processing: true,
        serverside: true,
        ajax: {
            url: API_URL + "/api/v1/complete-report/user-order?limit=-1",
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
                data: "user_id",
                name: "User Id",
            },
            {
                data: "user.name",
                name: "Name",
            },
            {
                data: "user.email",
                name: "Email",
            },

            {
                data: "is_all_item",
                name: "Is All Item",
            },
            {
                data: "amount_paid",
                name: "Amount Paid",
            },
            {
                data: "payment_status",
                name: "Payment Status",
            },
            {
                data: "payment_code",
                name: "Payment Code",
            },
            {
                data: "payment_date",
                name: "Payment Date",
            },
            {
                data: "creation_date",
                name: "Creation Date",
            },
            {
                render: function (data, type, full, meta) {
                    var id = full.id_order;
                    return `
                    <div class="action-table">
                        <button class="badge bg-gradient-info tombol-show-data" data-id="${id}"><i class="fa fa-eye" aria-hidden="true"></i></button>
                        <button class="badge bg-gradient-danger tombol-soft-delete" data-id="${id}"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                    </div>
            `;
                },
            },
        ],
    });

    $("#myTrashTable").DataTable({
        processing: true,
        serverside: true,
        ajax: {
            url:
                API_URL + "/api/v1/complete-report/user-order/deleted?limit=-1",
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
                data: "user_id",
                name: "User Id",
            },
            {
                data: "user.name",
                name: "Name",
            },
            {
                data: "user.email",
                name: "Email",
            },

            {
                data: "is_all_item",
                name: "Is All Item",
            },
            {
                data: "amount_paid",
                name: "Amount Paid",
            },
            {
                data: "payment_status",
                name: "Payment Status",
            },
            {
                data: "payment_code",
                name: "Payment Code",
            },
            {
                data: "payment_date",
                name: "Payment Date",
            },
            {
                data: "creation_date",
                name: "Creation Date",
            },
            {
                render: function (data, type, full, meta) {
                    var id = full.id_order;
                    return `
                    <div class="action-table">
                        <button class="badge bg-gradient-info tombol-restore" data-id="${id}"><i class="fa fa-rotate-left" aria-hidden="true"></i></button>
                        <button class="badge bg-gradient-danger tombol-force-delete" data-id="${id}"><i class="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
            `;
                },
            },
        ],
    });
});

// HANDLE TAMPIL DATA TONG SAMPAH
$("body").on("click", "#btn-show-trash-user-order", function () {
    $("#btn-show-trash-user-order").addClass("bg-gradient-danger");
    $("#data-show-user-order").hide();
    $("#data-show-trash-user-order").show();
    $(".tombol-tambah").hide();
    $(".section-title").text("Tong Sampah user-order");
    // hapus warna btn
    $("#btn-show-user-order").removeClass("bg-gradient-primary");
});

// HANDLE TAMPIL DATA
$("body").on("click", "#btn-show-user-order", function () {
    $("#btn-show-user-order").addClass("bg-gradient-primary");
    $("#data-show-user-order").show();
    $("#data-show-trash-user-order").hide();
    $(".tombol-tambah").show();
    $(".section-title").text("user-order");
    // hapus warna btn
    $("#btn-show-trash-user-order").removeClass("bg-gradient-danger");
});

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
                url: API_URL + "/api/v1/complete-report/user-order/" + id,
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
    var id = $(this).data("id");
    console.log(id);
    $.ajax({
        url: API_URL + "/api/v1/complete-report/user-order/restore",
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify({
            id: [id],
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
                url:
                    API_URL +
                    "/api/v1/complete-report/user-order/force-delete/" +
                    id,
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

// SHOW MODAL
$("body").on("click", ".tombol-show-data", function (e) {
    var id = $(this).data("id");
    $.ajax({
        url: API_URL + "/api/v1/complete-report/user-order/" + id,
        type: "GET",
        success: function (response) {
            console.log(response);
            // #1 Tampikan Modal
            showModal.show();
            $("#user_id_val").html(response.data.user_id);
            $("#name_val").html(response.data.user.name);
            $("#email_val").html(response.data.user.email);
            $("#is_all_item_val").html(response.data.is_all_item);
            $("#amount_paid_val").html(response.data.amount_paid);
            $("#payment_status_val").html(response.data.payment_status);
            $("#payment_code_val").html(response.data.payment_code);
            $("#payment_date_val").html(response.data.payment_date);
            $("#creation_date_val").html(response.data.creation_date);

            if (response.data.order_items.length !== 0) {
                let orderItemsHtml = ""; // HTML untuk order items

                response.data.order_items.forEach((item) => {
                    orderItemsHtml += `
                <tr class="double-border-top border-bottom">
                    <th>Assessment</th>
                    <td><div>${item.item.assessment_category.category_name}</div></td>
                </tr>
                <tr class="border-bottom">
                    <th>Price</th>
                    <td><div>Rp ${item.item.price}</div></td>
                </tr>
                <tr>
                    <th>Download</th>
                    <td><div>${item.downloaded}</div></td>
                </tr>
            `;
                });

                $("#table-order").append(orderItemsHtml);
            }
        },
    });
});
