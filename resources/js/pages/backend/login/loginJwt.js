$(document).ready(function () {
    // cek apakah ada data cookie jwtToken
    let jwtToken = Cookies.get("jwtToken");
    if (jwtToken != null) window.location.href = APP_URL + "/dashboard";

    // login
    $("#login").submit(function (e) {
        e.preventDefault();
        var formData = $(this).serialize();

        $.ajax({
            type: "POST",
            url: API_URL + "/api/v1/login",
            data: formData,
            success: function (response) {
                if (response.data) {
                    Cookies.set("jwtToken", response.data.token, {
                        expires: 14,
                    });

                    // set id login
                    Cookies.set("id", response.data.user.id);

                    window.location.href = APP_URL + "/dashboard";
                }

                if (response.meta && response.meta.code === 401) {
                    var errorMessage = response.meta.message;

                    var errorAlert =
                        '<div class="alert alert-danger alert-dismissible fade show text-white" role="alert">' +
                        errorMessage +
                        "</span>" +
                        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">' +
                        '<span aria-hidden="true">&times;</span>' +
                        "</button>" +
                        "</div>";

                    $("#error-message").html(errorAlert);
                }
            },
            error: function (error) {
                // console.log(error);
                var errorAlert =
                    '<div class="alert alert-danger alert-dismissible fade show text-white" role="alert">' +
                    "Gagal Login" +
                    "</span>" +
                    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">' +
                    '<span aria-hidden="true">&times;</span>' +
                    "</button>" +
                    "</div>";

                $("#error-message").html(errorAlert);
            },
        });
    });
});
